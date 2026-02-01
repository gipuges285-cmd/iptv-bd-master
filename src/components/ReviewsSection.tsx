import { Star, Facebook, ThumbsUp } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "MD Tusar Khan",
    review: "কোনো টুলসের সাবস্ক্রিপশন প্রয়োজন পরলে IPTV BD থেকে যেকোনো সময় নিতে পারি! ওয়েবসাইট ডেলিভারি সিস্টেম অনেক জোস, দ্রুত সেবা দেয়, ধন্যবাদ!",
    time: "10 months ago",
    platform: "Facebook"
  },
  {
    id: 2,
    name: "Sk Sawon",
    review: "সার্ভিস খুব দ্রুত দেয় এবং নির্ভরযোগ্য। অর্ডার দেয়ার পরপরই অনেক ফাস্ট ডেলিভারি পেয়ে গেলাম",
    time: "10 months ago",
    platform: "Facebook"
  },
  {
    id: 3,
    name: "Luck Chowdhury",
    review: "100% trusted service. I have used their product multiple times with no issues. absolutely recommended!",
    time: "10 months ago",
    platform: "Facebook"
  },
  {
    id: 4,
    name: "Tapas Saha",
    review: "ওয়েবসাইট সিস্টেম খুবই সহজ, যথেষ্ট সুন্দর ভাবে প্রডাক্ট ডিটেইলস দেওয়া। ইনস্ট্যান্ট ডেলিভারি পেয়েছি/ কোনো ঝামেলা পোহাতে হয়নি।",
    time: "10 months ago",
    platform: "Facebook"
  },
  {
    id: 5,
    name: "Ebrahim Md Kamal",
    review: "Highly Recommend! Using IPTV BD since 2021. Top notch services.",
    time: "8 months ago",
    platform: "Facebook"
  },
  {
    id: 6,
    name: "Mahbuba Afshari Misty",
    review: "Using Canva & other services. Highly recommended!",
    time: "8 months ago",
    platform: "Facebook"
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/20 to-background" id="reviews">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">See Our Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Check what customers say About us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Read honest reviews and opinions from customers of IPTV BD facebook page and group. 
            Discover what others have to say about our subscription service.
          </p>
        </div>

        {/* Review Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-md border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Facebook className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-foreground">Facebook Group</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Excellent</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-primary">242 Reviews</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-md border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Star className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <p className="font-bold text-foreground">Trustpilot</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">All Positive</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-primary">30 Reviews</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-md border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Facebook className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-foreground">Facebook Page</p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Excellent</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-primary">189 Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-lg">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.time}</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-blue-600" />
                </div>
              </div>

              {/* Recommended Badge */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                  <ThumbsUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Recommended</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
