export const CONTACT_EMAIL = "zacricket26@gmail.com";
export const CONTACT_PHONE_DISPLAY = "+65 9423 1702";
export const CONTACT_PHONE_TEL = "+6594231702";
export const WHATSAPP_NUMBER = "6594231702";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildWhatsAppUrl(text?: string): string {
  if (!text) return WHATSAPP_URL;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
}
