import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import ProductSection from "@/components/ProductSection";
import StreamingSection from "@/components/StreamingSection";
import UtilitiesSection from "@/components/UtilitiesSection";
import CareerBanner from "@/components/CareerBanner";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

// Best Selling Products
const bestSellingProducts = [
  { id: 1, title: "Telegram Premium", price: "1,999.00 ৳ - 4,850.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-06-29-dwkg1urbu7dv-1.webp" },
  { id: 2, title: "Grok AI Subscription(Super Grok)", price: "599.00 ৳ - 2,299.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-5qu9j8ybyntj-1.webp" },
  { id: 3, title: "Google AI Pro / Ultra | Gemini", price: "599.00 ৳ - 2,999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-gxazqf7yfrty-1.webp", outOfStock: true },
  { id: 4, title: "Google Drive Storage Upgrade", price: "1,899.00 ৳ - 2,999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-injq2hszuqmw-1.webp" },
];

// AI & Writing Tools
const aiProducts = [
  { id: 1, title: "Paperpal Prime Subscription", price: "699.00 ৳ - 2,399.00 ৳", image: "https://subscriptionsbd.net/uploads/products/2025-11-22-iinud0hnsz0b-small.webp" },
  { id: 2, title: "Gamma AI Personal Subscription", price: "1,500.00 ৳", image: "https://subscriptionsbd.net/uploads/products/2025-08-20-yuicsxhksp1a-small.webp" },
  { id: 3, title: "Beautiful AI Pro Plan- Shared Account", price: "399.00 ৳", image: "https://subscriptionsbd.net/uploads/products/2025-08-20-b70smaskluxu-small.webp" },
  { id: 4, title: "iAsk Pro Plan- Shared Account", price: "399.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-9qjxzxib5i4o-1.webp" },
  { id: 5, title: "StealthGPT Subscription", price: "1,700.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-lrdyobblobay-1.webp" },
  { id: 6, title: "Claude AI Personal subscription", price: "2,350.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-04-20-eelb1nfuway5-1.webp" },
  { id: 7, title: "Grok AI Subscription(Super Grok)", price: "599.00 ৳ - 2,299.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-5qu9j8ybyntj-1.webp" },
  { id: 8, title: "Jenni AI Subscription", price: "700.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-bvnyswsw8uuk-1.webp" },
  { id: 9, title: "Quillbot Premium - 1 Month", price: "200.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-28-ezqgw0zzrksq-1.webp" },
  { id: 10, title: "Perplexity Ai Subscription", price: "499.00 ৳ - 2,999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-28-qyatjmtvtvwm-1.webp" },
];

// Google Products
const googleProducts = [
  { id: 1, title: "Google meet Premium", price: "400.00 ৳ - 1,899.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-m93ieinc7dxa-1.webp" },
  { id: 2, title: "Google AI Pro / Ultra | Gemini", price: "599.00 ৳ - 2,999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-gxazqf7yfrty-1.webp", outOfStock: true },
  { id: 3, title: "Google Drive Storage Upgrade", price: "1,899.00 ৳ - 2,999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-injq2hszuqmw-1.webp" },
  { id: 4, title: "Youtube Premium Subscription", price: "1,150.00 ৳ - 1,899.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-iuhjgy2ntpbs-1.webp" },
];

// Microsoft Products
const microsoftProducts = [
  { id: 1, title: "Microsoft Power BI", price: "1,300.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-0ztkktdxorpb-1.webp" },
  { id: 2, title: "Microsoft Office Professional Plus - 2019/2021/2024", price: "550.00 ৳ - 799.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-xy8ddqwwrptj-1.webp" },
  { id: 3, title: "MS Project Professional License Key", price: "650.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-8ltkcrmacojw-1.webp" },
  { id: 4, title: "Microsoft Visio Pro License Key", price: "650.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-0uqaxcl01g2g-1.webp" },
  { id: 5, title: "Windows 11 Pro License Key - 1PC Lifetime", price: "600.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-flptsul1fm7n-1.webp" },
  { id: 6, title: "Office 365 1 Year Personal (OWN) Email", price: "1,999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-amgynp6pel3g-1.webp" },
  { id: 7, title: "Windows 10 Pro License Key - 1PC Lifetime", price: "500.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-geni6zut2sip-1.webp" },
  { id: 8, title: "Microsoft Office 365 Licensed Account", price: "450.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-xyw5eq9xksyw-1.webp" },
];

// Edu-Tech Tools
const eduProducts = [
  { id: 1, title: "StealthGPT Subscription", price: "1,700.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-07-05-lrdyobblobay-1.webp" },
  { id: 2, title: "Brilliant.org Subscription", price: "999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-04-19-creniinzemzl-1.webp", outOfStock: true },
  { id: 3, title: "Coursera Personal Subscription", price: "1,399.00 ৳ - 6,500.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-04-09-auikk6znas1c-1.webp" },
  { id: 4, title: "BLINKIST Premium Subscription", price: "200.00 ৳ - 950.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-prvprocvudcr-1.webp" },
  { id: 5, title: "Duolingo Super Subscription", price: "1,050.00 ৳ - 1,699.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-zec0qvrou1ye-1.webp" },
  { id: 6, title: "Bartleby Learn Subscription", price: "1,199.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-tjuaiumdajgr-1.webp" },
  { id: 7, title: "Datacamp Personal Subscription", price: "750.00 ৳ - 2,250.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-ew19kayyjwkl-1.webp" },
  { id: 8, title: "Academia Edu Premium - 1 Year", price: "1,499.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-c1fpmoisxk2h-1.webp" },
  { id: 9, title: "TryHackMe 1 Year Subscription", price: "4,999.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-22-v6nfutcgzvzl-1.webp", outOfStock: true },
  { id: 10, title: "StuDocu subscription- 6 Months", price: "400.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-01-25-akxhv4bgblh7-1.webp" },
];

// Career Hacker Tools
const careerProducts = [
  { id: 1, title: "Gamma AI Personal Subscription", price: "1,500.00 ৳", image: "https://subscriptionsbd.net/uploads/products/2025-08-20-yuicsxhksp1a-small.webp" },
  { id: 2, title: "Beautiful AI Pro Plan- Shared Account", price: "399.00 ৳", image: "https://subscriptionsbd.net/uploads/products/2025-08-20-b70smaskluxu-small.webp" },
  { id: 3, title: "Rezi Pro Plan- 1 Month", price: "249.00 ৳", image: "https://subscriptionsbd.net/uploads/product/2025-05-25-wnlljdwjymu9-1.webp" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        
        <ProductSection 
          title="Best Selling Products" 
          products={bestSellingProducts} 
        />
        
        <CategorySection />
        
        <ProductSection 
          title="AI, Grammar and Writing Tools" 
          products={aiProducts}
          bgClass="bg-section-purple"
        />
        
        <StreamingSection />
        
        <ProductSection 
          title="Google Products" 
          products={googleProducts}
        />
        
        <ProductSection 
          title="All Microsoft Products" 
          products={microsoftProducts}
          bgClass="bg-section-light"
        />
        
        <ProductSection 
          title="Edu-Tech Tools" 
          products={eduProducts}
        />
        
        <UtilitiesSection />
        
        <CareerBanner />
        
        <ProductSection 
          title="Career Hacker Tools" 
          products={careerProducts}
          bgClass="bg-section-light"
        />
        
        <FAQSection />
        
        <ReviewsSection />
        
        <BlogSection />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default Index;
