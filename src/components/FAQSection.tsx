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
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Find Answers to your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Welcome to FAQ section</p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
              <h3 className="text-2xl font-bold text-foreground">
                Most Frequently Searched Term
              </h3>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-transparent px-6 shadow-lg hover:shadow-xl hover:border-primary/30 hover:bg-card transition-all duration-300 group"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-foreground [&[data-state=open]]:text-primary group-hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 bg-gradient-to-b from-secondary to-primary rounded-full" />
              <h3 className="text-2xl font-bold text-foreground">
                Why IPTV BD Best For You
              </h3>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(4).map((faq, index) => (
                <AccordionItem 
                  key={index + 4} 
                  value={`item-${index + 4}`} 
                  className="bg-card/80 backdrop-blur-sm rounded-2xl border-2 border-transparent px-6 shadow-lg hover:shadow-xl hover:border-secondary/30 hover:bg-card transition-all duration-300 group"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6 text-foreground [&[data-state=open]]:text-secondary group-hover:text-secondary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
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
