import Link from "next/link";
import { ClearCartOnSuccess } from "@/components/checkout/ClearCartOnSuccess";
import { getStripe } from "@/lib/stripe";

export const metadata = {
  title: "Payment received",
};

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  let paid = false;

  if (sessionId) {
    try {
      const session = await getStripe().checkout.sessions.retrieve(sessionId);
      paid = session.payment_status === "paid";
    } catch {
      paid = false;
    }
  }

  if (!paid) {
    return (
      <div className="py-20 text-center">
        <div className="max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold text-zinc-900">Payment not confirmed</h1>
          <p className="mt-3 text-zinc-600">
            We could not confirm this payment. If money left your card, check the receipt from Stripe, or message ZA Cricket on WhatsApp.
          </p>
          <Link
            href="/cart"
            className="inline-flex mt-8 px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors"
          >
            Back to cart
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 text-center">
      <ClearCartOnSuccess />
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-2xl font-bold text-zinc-900">Payment received</h1>
        <p className="mt-3 text-zinc-600">
          Thank you. Stripe has emailed your receipt. ZA Cricket will prepare the order and send tracking on WhatsApp or email.
        </p>
        <Link
          href="/shop"
          className="inline-flex mt-8 px-7 py-3.5 bg-brand text-white font-semibold rounded-xl hover:bg-brand-dark transition-colors"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
