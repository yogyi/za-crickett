export type CheckoutPayload = {
  productId: string;
  quantity: number;
  variant?: string;
  customization?: Record<string, string>;
};

export async function startCardCheckout(items: CheckoutPayload[]) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items }),
  });
  const data = (await response.json()) as { url?: string; error?: string };
  if (!response.ok || !data.url) {
    throw new Error(data.error || "Card checkout is unavailable right now.");
  }
  window.location.assign(data.url);
}
