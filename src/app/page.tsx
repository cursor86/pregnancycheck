import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UtilityHub from "@/components/UtilityHub";
import ValueGrid from "@/components/ValueGrid";
import NewsletterSignup from "@/components/NewsletterSignup";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How is my due date calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your estimated due date is calculated using Naegele's rule: adding 280 days (40 weeks) to the first day of your last menstrual period, adjusted for your average cycle length.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the symptom checker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The symptom checker gives an informational likelihood estimate based on commonly self-reported early pregnancy symptoms. It is not a medical diagnosis — a home pregnancy test or a visit to a healthcare provider is the only reliable way to confirm pregnancy.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start counting kicks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many healthcare providers suggest starting daily kick counts around week 28 of pregnancy. The Kick Counter tool times your session and logs your history.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All calculations run locally in your browser. No account is required and no personal health data is sent to a server.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main id="top" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <Hero />
      <UtilityHub />
      <ValueGrid />
      <NewsletterSignup />
      <Chatbot />
      <Footer />
    </main>
  );
}
