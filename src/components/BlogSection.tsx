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
    <section className="py-16 bg-section-light" id="blogs">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary mb-2 block">Read From Our blogs</span>
          <h2 className="section-title mb-4">Read From Our blogs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some exclusive discussion written by our expert from customer point of view. 
            Read the things and grab your best packages from us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group cursor-pointer">
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {blog.excerpt}
                </p>
                <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Continue Reading
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Load More Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
