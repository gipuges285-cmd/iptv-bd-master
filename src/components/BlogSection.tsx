import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "ChatGPT Vs Gemini: Unleashing the Power of AI Language Models",
    excerpt: "In the ever-evolving world of artificial intelligence, AI language models have become pivotal tools, shaping our interactions with technology...",
    date: "June 05, 2024",
    image: "https://subscriptionsbd.net/uploads/blog/2025-01-20-mygrdgmppyzh-original.jpg"
  },
  {
    id: 2,
    title: "Digital Education Tools For Teachers And Students",
    excerpt: "Digital education tools play a crucial role in modern educational settings, providing numerous benefits for both teachers and students...",
    date: "December 09, 2023",
    image: "https://subscriptionsbd.net/uploads/blog/2025-01-21-4hfuvrrfopjt-original.png"
  },
  {
    id: 3,
    title: "Best online shopping sites in Bangladesh",
    excerpt: "In an era of faster internet and affordable 4G connections, Bangladesh is embracing a culture where the internet seamlessly integrates into daily life...",
    date: "November 29, 2023",
    image: "https://subscriptionsbd.net/uploads/blog/2025-07-05-wzwitanmbkrm-original.jpg"
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="blogs">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      <div className="absolute top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-sm font-bold text-secondary uppercase tracking-wider">Read From Our blogs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Read From Our <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">blogs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Here are some exclusive discussion written by our expert from customer point of view. 
            Read the things and grab your best packages from us
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <article 
              key={blog.id} 
              className="bg-card/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-transparent hover:border-primary/20 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group cursor-pointer"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="font-bold text-xl text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all duration-300">
                  <span>Continue Reading</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-14">
          <Button 
            variant="outline" 
            className="rounded-full border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-transparent px-10 py-4 font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105"
          >
            Load More Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
