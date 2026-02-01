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
    <section className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/20">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Answers to your Questions
          </h2>
          <p className="text-muted-foreground text-lg">Welcome to FAQ section</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
              Most Frequently Searched Term
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-foreground [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-6">
              Why IPTV BD Best For You
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(4).map((faq, index) => (
                <AccordionItem 
                  key={index + 4} 
                  value={`item-${index + 4}`} 
                  className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5 text-foreground [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
