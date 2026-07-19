import type { Metadata } from "next";
import { PolicyLayout } from "@/components/policies/PolicyLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms governing use of the ZA Cricket website and purchases from ZA Cricket.",
};

const sections = [
  {
    title: "1. Introduction",
    content:
      'Welcome to ZA Cricket. The ZA Cricket website, online store, and related services, features, content, and products are collectively the "Site". The Site is operated by ZA Cricket Pte. Ltd. ("ZA Cricket", "we", "us", or "our").\n\nBy accessing the Site, creating an account, submitting an order, or purchasing a product, you agree to these Terms and Conditions, our Privacy Policy, Shipping and Delivery Policy, Returns, Exchanges and Refunds Policy, and other notices published on the Site. Do not use the Site or purchase products if you do not agree.',
  },
  {
    title: "2. Definitions",
    content:
      '"Account" means a customer account registered on the Site. "Customer", "User", or "you" means a person who accesses the Site, communicates with us, or purchases or attempts to purchase a product. "Order" means an order submitted through the Site or another authorised ZA Cricket channel. "Products" includes our cricket equipment, apparel, accessories, and merchandise. "Services" means the Site and its associated content, functions, communications, and purchasing facilities.',
  },
  {
    title: "3. Eligibility",
    content:
      "You must have legal capacity to enter a binding agreement to place an order. Users under 18 may browse the Site but should use it and purchase only with the consent and supervision of a parent or legal guardian. You confirm that the information you provide is complete and accurate, you are authorised to use the selected payment method, and your purchase is lawful.",
  },
  {
    title: "4. Site Access and Acceptable Use",
    content:
      "ZA Cricket grants you a limited, personal, non-exclusive, non-transferable, and revocable right to use the Site for lawful personal and shopping purposes.\n\nYou must not use the Site unlawfully or fraudulently; attempt unauthorised access; introduce malware; interfere with security or availability; scrape the Site without written permission; impersonate another person; reproduce or commercially exploit Site content without permission; or infringe the rights of ZA Cricket or any third party. We may restrict access where these Terms are breached or to protect the Site and its users.",
  },
  {
    title: "5. Accounts",
    content:
      "You are responsible for accurate and current account information, maintaining the confidentiality of login details, restricting unauthorised access, and promptly notifying us of suspected unauthorised use. We may suspend or close an account containing false information, used fraudulently, or operated in breach of these Terms.",
  },
  {
    title: "6. Product Information",
    content:
      "We aim to provide accurate descriptions, photographs, specifications, measurements, and prices. Colours may vary by screen; naturally sourced and handmade products such as English willow bats may vary in grain, shade, balance, finish, and appearance; stated measurements may be approximate; packaging may differ; and minor product improvements may occur without notice. You are responsible for reviewing product details and suitability before ordering.",
  },
  {
    title: "7. Product Availability",
    content:
      "All products are subject to availability, and adding an item to a cart does not reserve it. We may limit quantities. If an item becomes unavailable, we may offer an alternative, arrange a back order with your agreement, or cancel and refund the affected item.",
  },
  {
    title: "8. Orders and Contract Formation",
    content:
      "Submitting an order is an offer to purchase. An automated acknowledgement confirms receipt but not acceptance. An order is accepted when we expressly confirm it, notify you of dispatch, or otherwise accept it in writing.\n\nBefore acceptance, we may reject or cancel an order due to unavailability, an obvious price or product error, failed payment, suspected fraud, delivery restrictions, suspected unauthorised resale, or legal requirements. Payments received for a cancelled order will be refunded using the original method unless otherwise agreed.",
  },
  {
    title: "9. Prices and Promotions",
    content:
      "Unless stated otherwise, prices are in Singapore dollars. Prices may change without notice but ordinarily will not affect accepted orders. Delivery, customs duties, import taxes, and other fees may be shown separately. We may correct obvious pricing errors. Promotions may be time-limited, subject to additional conditions, non-transferable, non-redeemable for cash, and withdrawn or corrected if published in error.",
  },
  {
    title: "10. Payment",
    content:
      "Payment must be made using an available payment method and may be processed by a third party under its own terms and privacy policy. By submitting payment information, you confirm it is accurate and that you are authorised to use it. ZA Cricket is not responsible for declines caused by insufficient funds, invalid details, bank limits, or provider security checks.",
  },
  {
    title: "11. Delivery",
    content:
      "Delivery times are estimates unless agreed otherwise in writing and may be affected by courier delays, customs, weather, public holidays, transport disruption, or incomplete information. You must provide a complete address and may be charged reasonable additional costs caused by an incorrect address, failed delivery, or refused delivery. International recipients are responsible for import legality, duties, taxes, and handling fees. See our Shipping and Delivery Policy.",
  },
  {
    title: "12. Ownership and Risk",
    content:
      "Risk of loss or damage passes to you when the product is delivered to you or your authorised recipient. Ownership passes after full payment and delivery, subject to applicable law. Inspect orders promptly and report missing, damaged, or incorrect items within the time stated in our Exchange, Refund and Cancellation Policy.",
  },
  {
    title: "13. Returns, Exchanges and Refunds",
    content:
      "Returns, exchanges, cancellations, and refunds are governed by our Exchange, Refund and Cancellation Policy. Products generally must be unused, unaltered, and in original condition and packaging. Personalised, customised, altered, used, damaged, improperly cared-for, clearance, or final-sale items may be ineligible except where defective, incorrectly supplied, or a remedy is required by law.",
  },
  {
    title: "14. Cricket Bat Care and Natural Variations",
    content:
      "Natural willow bats require correct preparation, maintenance, and use. Unless sold as fully prepared, customers are responsible for recommended oiling, knocking-in, and protective treatment.\n\nNatural characteristics can include differences in grain count or width, knots, blemishes, colour, minor surface imperfections, balance, pick-up, and weight distribution. These do not automatically constitute defects. Damage caused by improper preparation, unsuitable balls, moisture, poor storage, unauthorised alteration, accidental impact, or ordinary wear may not qualify for replacement or refund.",
  },
  {
    title: "15. Intellectual Property",
    content:
      "The ZA Cricket name, logo, trademarks, product names, designs, photographs, graphics, videos, text, layouts, artwork, software, and other Site content are owned by or licensed to ZA Cricket and protected by law. Site content may be used only for personal, non-commercial purposes. No ownership or trademark licence is granted.",
  },
  {
    title: "16. Third-Party Links and Services",
    content:
      "The Site may link to third-party websites, platforms, payment services, social media, or other services for convenience. ZA Cricket does not necessarily endorse or control them and is not responsible for their availability, security, content, products, representations, privacy practices, or terms.",
  },
  {
    title: "17. Reviews and User Submissions",
    content:
      "Submissions must not infringe rights, be unlawful or abusive, contain malware or undisclosed advertising, or misrepresent identity. You retain ownership of your content but grant ZA Cricket a non-exclusive, worldwide, royalty-free licence to store, reproduce, publish, adapt, and display it for business, marketing, and promotional purposes, subject to applicable law. We may remove inappropriate content.",
  },
  {
    title: "18. Site Availability",
    content:
      "We aim to maintain a reliable Site but do not guarantee uninterrupted, secure, or error-free access. We may suspend access for maintenance, security, updates, or circumstances outside our control, and may modify or discontinue features without affecting accepted orders.",
  },
  {
    title: "19. Disclaimers",
    content:
      'To the fullest extent permitted by law, the Site and its general content are provided on an "as available" basis. We do not guarantee continuous access, complete or current content, or that a product will improve individual performance. Site content is not professional coaching, medical, or safety advice. Customers are responsible for appropriate product selection and use.',
  },
  {
    title: "20. Limitation of Liability",
    content:
      "Nothing excludes liability that cannot lawfully be excluded. To the fullest extent permitted by law, ZA Cricket is not liable for indirect, incidental, special, or consequential loss, including loss of profit, revenue, opportunity, goodwill, or data. Where liable for loss connected with an order, our total liability will not exceed the amount paid for the relevant product unless the law requires another remedy.\n\nWe are not responsible for loss caused by misuse, alteration, poor maintenance, failure to follow instructions, inaccurate customer information, third-party providers where we are not legally responsible, or circumstances outside our reasonable control.",
  },
  {
    title: "21. Indemnity",
    content:
      "To the extent permitted by law, you agree to compensate ZA Cricket for reasonable losses and expenses arising directly from unlawful Site use, a material breach of these Terms, infringement of another person's rights, or fraudulent information. This does not cover loss caused by ZA Cricket's own negligence, breach, or unlawful conduct.",
  },
  {
    title: "22. Force Majeure",
    content:
      "ZA Cricket is not responsible for delay or failure caused by events outside reasonable control, including natural disasters, fire, flood, epidemic, war, civil unrest, government restrictions, strikes, transport or customs disruption, utility or communications failures, cyber incidents, and supply-chain delays. We may suspend performance, arrange an alternative, or cancel the affected part of an order and provide an appropriate refund.",
  },
  {
    title: "23. Suspension and Termination",
    content:
      "We may suspend or terminate access or an account for a material breach, suspected fraud or unlawful conduct, threats to Site security, or legal requirements. You may stop using the Site and request account closure. Termination does not affect rights or liabilities that arose beforehand.",
  },
  {
    title: "24. Privacy and Personal Data",
    content:
      "ZA Cricket handles personal data under its Privacy Policy and applicable Singapore data-protection requirements. The Privacy Policy explains what data we collect, why and how it is used, when it may be disclosed, how it is protected and retained, and how to contact us about personal data.",
  },
  {
    title: "25. Changes to These Terms",
    content:
      "We may update these Terms for changes to products, services, practices, or legal obligations. The latest version and effective date will be published on the Site. Changes apply from publication and ordinarily do not alter an order already accepted. Continued Site use constitutes acceptance of updated Terms.",
  },
  {
    title: "26. Severability",
    content:
      "If a provision is unlawful, invalid, or unenforceable, it will be limited or severed only as necessary. The remaining provisions continue in effect.",
  },
  {
    title: "27. No Waiver",
    content:
      "A delay or failure by ZA Cricket to enforce a provision does not waive the right to enforce it or another provision later.",
  },
  {
    title: "28. Entire Agreement",
    content:
      "These Terms and incorporated policies form the entire agreement regarding Site use and product purchases. A specific written term for an order prevails over an inconsistent general term.",
  },
  {
    title: "29. Governing Law and Jurisdiction",
    content:
      "These Terms and connected disputes are governed by Singapore law. Subject to legally available consumer forums, Singapore courts have jurisdiction. The parties are encouraged to try to resolve disputes in good faith before proceedings.",
  },
  {
    title: "30. Contact Us",
    content:
      "Questions about these Terms, an order, or the Site may be sent to:\n\nZA Cricket Pte. Ltd.\nEmail: zacricket26@gmail.com",
  },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms and Conditions"
      sections={sections}
      lastUpdated="15 July 2026"
    />
  );
}
