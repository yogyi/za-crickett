import { NextResponse } from "next/server";
import { getProductById } from "@/data/products";
import { formatCustomizationDisplay } from "@/lib/customization";
import { getShippingFeeSgd } from "@/lib/shipping";
import { getStripe } from "@/lib/stripe";

type CheckoutItem = {
  productId?: string;
  quantity?: number;
  variant?: string;
  customization?: Record<string, string>;
};

function toCents(amount: number) {
  return Math.round(amount * 100);
}

export async function POST(request: Request) {
  let body: { items?: CheckoutItem[] };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid order." }, { status: 400 });
  }

  const items = Array.isArray(body.items) ? body.items : [];
  if (items.length === 0 || items.length > 20) {
    return NextResponse.json({ error: "Your cart is empty." }, { status: 400 });
  }

  const lineItems: {
    quantity: number;
    price_data: {
      currency: "sgd";
      unit_amount: number;
      product_data: { name: string; description?: string };
    };
  }[] = [];

  let subtotal = 0;

  for (const item of items) {
    const product = item.productId ? getProductById(item.productId) : undefined;
    const quantity = Number(item.quantity);
    if (!product || !product.inStock || !Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
      return NextResponse.json(
        { error: "One of the products in this order is not available." },
        { status: 400 }
      );
    }

    const details = [
      item.variant?.trim(),
      ...Object.entries(item.customization ?? {})
        .filter(([, value]) => value.trim())
        .map(([key, value]) =>
          formatCustomizationDisplay(
            key,
            value.trim().slice(0, 40),
            key === "weight" ? "g" : key === "grains" ? "grains" : undefined
          )
        ),
    ].filter(Boolean);

    lineItems.push({
      quantity,
      price_data: {
        currency: "sgd",
        unit_amount: toCents(product.price),
        product_data: {
          name: product.name,
          ...(details.length > 0 ? { description: details.join(" · ").slice(0, 500) } : {}),
        },
      },
    });
    subtotal += product.price * quantity;
  }

  const delivery = getShippingFeeSgd("SG", subtotal);
  lineItems.push({
    quantity: 1,
    price_data: {
      currency: "sgd",
      unit_amount: toCents(delivery),
      product_data: { name: "Delivery" },
    },
  });

  const origin = request.headers.get("origin") || new URL(request.url).origin;

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cart`,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: [
          "SG",
          "HK",
          "IN",
          "MY",
          "AU",
          "NZ",
          "AE",
          "BH",
          "OM",
          "QA",
          "GB",
          "US",
          "CA",
        ],
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: "Checkout could not start." }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch {
    return NextResponse.json(
      { error: "Card checkout is unavailable right now." },
      { status: 500 }
    );
  }
}
