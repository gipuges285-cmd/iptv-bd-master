import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does IPTV BD offer AI tools?",
    answer: "Yes, IPTV BD offers AI tools, including Chat GPT Plus. Our advanced AI solutions can enhance customer interactions, streamline business processes, and provide valuable insights to drive your business forward."
  },
  {
    question: "Can you provide a Microsoft Office solution for my business?",
    answer: "Yes, we can provide a Microsoft Office 365 solution for your business. Microsoft Office offers Word, Excel, PowerPoint, Outlook, and Teams. These tools can enhance productivity, streamline communication, and support various business operations."
  },
  {
    question: "Can I increase my Google Drive space?",
    answer: "IPTV BD offers an affordable solution to increasing Google Drive space. We can help you upgrade your Google Drive storage, providing expert guidance and support."
  },
  {
    question: "Which is the best video streaming platform?",
    answer: "YouTube is the best platform for streaming videos. YouTube Premium offers an ad-free experience, offline downloads, and access to YouTube Originals, making it an excellent video streaming platform."
  },
  {
    question: "Is it easy to find the right subscription on the IPTV BD platform?",
    answer: "Yes, it is easy to find the right subscription on the IPTV BD platform, as it offers a user-friendly interface and diverse options to meet various needs and preferences."
  },
  {
    question: "Can I purchase subscriptions within my budget through IPTV BD?",
    answer: "Yes, IPTV BD aims to make it easy for users to purchase subscriptions that fit their budget."
  },
  {
    question: "What types of subscriptions are available through IPTV BD?",
    answer: "IPTV BD offers streaming services, educational tools, software, digital products, license keys among others."
  },
  {
    question: "What is IPTV BD?",
    answer: "IPTV BD typically refers to a subscription-based business platform in Bangladesh. This model involves a recurring payment system where customers subscribe to a product or service and pay regularly to access it. Subscriptions can be applied to various industries, including digital services, software, educational tools, entertainment, and key products."
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-section-light">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary mb-2 block">FAQs</span>
          <h2 className="section-title mb-4">Find Answers to your Questions</h2>
          <p className="text-muted-foreground">Welcome to FAQ section</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Most Frequently Searched Term</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.slice(0, 4).map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Why IPTV BD Best For You</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.slice(4).map((faq, index) => (
                <AccordionItem key={index + 4} value={`item-${index + 4}`} className="bg-card rounded-xl border border-border px-4">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
