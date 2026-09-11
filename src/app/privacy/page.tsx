import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Privacy | Cityview Pest Control", "How contact requests and browsing information are handled on the Cityview Pest Control website.", "/privacy");
export default function PrivacyPage() {
  return <article className="mx-auto max-w-3xl space-y-6 px-4 py-12 leading-relaxed md:px-6">
    <h1 className="font-display text-4xl font-semibold uppercase">Privacy Information</h1>
    <p>Cityview Pest Control uses the details you choose to share to respond to your enquiry, discuss your pest issue and arrange service.</p>
    <h2 className="font-display text-2xl uppercase">Contact requests</h2>
    <p>The website forms send the details you enter to Cityview Pest Control by email so our team can respond to your enquiry. The callback form also lets you prepare the same request in WhatsApp. Form submissions are not stored in a website database. Calling, emailing, or using WhatsApp uses your phone or messaging provider.</p>
    <p>Share only what is needed for your request, such as your name, phone number, city and a description of the issue. Do not include payment card details or other sensitive information.</p>
    <h2 className="font-display text-2xl uppercase">Browsing and device storage</h2>
    <p>This website does not include advertising trackers or analytics scripts. It uses browser storage to remember whether the introductory bug animation has already played. Your hosting connection may generate technical logs such as IP address, request time and page requested, used to operate and protect the website.</p>
    <h2 className="font-display text-2xl uppercase">Questions about your information</h2>
    <p>For questions about information you have shared, or to request access, correction or deletion, email <a className="underline" href="mailto:info@cityviewpestcontrol.ca">info@cityviewpestcontrol.ca</a>. We will discuss your request and any records needed to provide service or meet applicable obligations.</p>
  </article>;
}
