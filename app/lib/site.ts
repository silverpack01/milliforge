export const CONTACT_PHONE_DISPLAY = "0311 3717007";
export const CONTACT_PHONE_TEL = "+923113717007";

export function buildWhatsAppUrl(text: string): string {
  return `https://wa.me/923113717007?text=${encodeURIComponent(text)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(
  "Hi MilliForge! I want to discuss a project."
);
