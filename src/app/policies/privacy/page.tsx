import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const sections = [
  {
    title: "Introduction",
    content:
      "ZA Cricket (\"we\", \"us\", \"our\") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.",
  },
  {
    title: "Jurisdiction and Law",
    content:
      "This website is operated from Singapore. These policies are governed by the laws of the Republic of Singapore. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the Singapore courts.",
  },
  {
    title: "Site Access",
    content:
      "We grant you a limited, non-exclusive licence to access and use this website for personal, non-commercial purposes. You may not reproduce, distribute, or exploit any content without our prior written consent.",
  },
  {
    title: "Account",
    content:
      "If you create an account with us, you are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. Please notify us immediately of any unauthorised use.",
  },
  {
    title: "Logos and Intellectual Property",
    content:
      "All logos, trademarks, product images, and content on this website are the property of ZA Cricket or its licensors. Unauthorised use of our branding or intellectual property is strictly prohibited.",
  },
  {
    title: "Liability",
    content:
      "To the fullest extent permitted by law, ZA Cricket shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or our products. Our total liability is limited to the amount you paid for the relevant product or service.",
  },
  {
    title: "Products and Services",
    content:
      "We strive to display product information accurately. However, we do not warrant that descriptions, pricing, or availability are error-free. We reserve the right to correct errors and update product information at any time.",
  },
  {
    title: "Billing",
    content:
      "All prices are listed in Singapore Dollars (SGD) unless otherwise stated. You agree to pay all charges associated with your order, including applicable taxes and shipping fees.",
  },
  {
    title: "Payment Method",
    content:
      "We accept major credit cards, debit cards, and other payment methods as displayed at checkout. Payment processing is handled securely through our payment partners. We do not store your full card details on our servers.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy" sections={sections} />
  );
}
