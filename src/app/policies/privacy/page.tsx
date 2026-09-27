import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What personal data ZA Cricket collects on this website, why we use it, and how to ask about it.",
};

const sections = [
  {
    title: "Who we are",
    content: `This policy covers the ZA Cricket website. We are based in Singapore. For privacy questions, email ${CONTACT_EMAIL} or WhatsApp ${CONTACT_PHONE_DISPLAY}.`,
  },
  {
    title: "What we collect",
    content: `Contact form. If you write to us on the contact page, we receive your name, email address, subject, and message. We do not ask for a card number on that form.

Orders. Buy on WhatsApp opens a chat that names the product and asks about your game. It does not include the price. Ordering from the cart opens WhatsApp with the items, the published price, and the delivery fee. Anything you then send in that chat — your name, phone number, delivery address, and how you will pay — is handled in WhatsApp, which is operated by Meta. We do not collect or store card numbers on this website.

Chat assistant. If you use the on-site chat, the messages you type are sent to our server and then to Google's Gemini service so it can draft a reply. Do not put card numbers or identity documents in that chat.

Saved in your browser. Your cart, and the country you pick for currency, stay in your browser on this device. That is not an account. It does not reserve stock, and it is not sent to us unless you go on to order.

Technical logs. Our host may record an IP address and basic browser details to run the site. The contact form and the chat assistant also use the IP address briefly to limit repeated submissions. We do not add that address to a customer database, and we do not use advertising cookies.`,
  },
  {
    title: "Why we use it",
    content:
      "We use this information to reply to you, confirm and deliver an order, answer a sizing or product question, and keep the site working. We do not sell personal data.",
  },
  {
    title: "Who else handles it",
    content: `FormSubmit (formsubmit.co) emails the contact form to our team.\nWhatsApp (Meta) carries order and support chats.\nGoogle Gemini drafts replies in the on-site chat.\nVercel hosts the website.\nA courier receives the name, address, and phone number you gave us when we ship an order.\n\nEach of those services handles the data only for that job.`,
  },
  {
    title: "Payment details",
    content:
      "This website does not take payment and does not store card numbers. If you pay, you arrange it in the WhatsApp chat after we confirm the order. The price we confirm is the price published on the product page, plus the delivery fee shown there, unless we have told you a different international delivery fee in that chat before you pay.",
  },
  {
    title: "How long we keep it",
    content:
      "We keep enquiry and order messages for as long as we need them to complete the order and handle any exchange request, then delete them when they are no longer needed. The cart in your browser stays until you clear it or clear this site's data in your browser.",
  },
  {
    title: "Your choices",
    content: `Email ${CONTACT_EMAIL} to ask what we hold about you, to correct it, or to ask us to delete an enquiry or order message we no longer need. You can empty the cart yourself in the browser. You can use the shop without the chat assistant, and you can order only if you choose to continue on WhatsApp.`,
  },
  {
    title: "Singapore law",
    content:
      "We handle personal data in line with Singapore's Personal Data Protection Act 2012. This policy does not remove any right that Act gives you.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      sections={sections}
      lastUpdated="28 September 2026"
    />
  );
}
