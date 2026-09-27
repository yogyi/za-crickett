/** Address shown on the site. Forward this to CONTACT_INBOX. */
export const CONTACT_EMAIL = "hello@zacricket.co";

/** Existing inbox. The contact form delivers here so messages still arrive. */
export const CONTACT_INBOX = "zacricket26@gmail.com";
export const CONTACT_PHONE_DISPLAY = "+65 9423 1702";
export const CONTACT_PHONE_TEL = "+6594231702";
export const WHATSAPP_NUMBER = "6594231702";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildWhatsAppUrl(text?: string): string {
  if (!text) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
