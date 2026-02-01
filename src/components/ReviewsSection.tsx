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
    <section className="py-24 relative overflow-hidden" id="reviews">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-bold text-primary uppercase tracking-wider">See Our Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-5">
            Check what customers say <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">About us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Read honest reviews and opinions from customers of IPTV BD facebook page and group. 
            Discover what others have to say about our subscription service.
          </p>
        </div>

        {/* Review Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {[
            { name: "Facebook Group", reviews: "242", color: "blue" },
            { name: "Trustpilot", reviews: "30", color: "green" },
            { name: "Facebook Page", reviews: "189", color: "blue" },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-transparent hover:border-primary/20 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 ${stat.color === 'blue' ? 'bg-blue-500/10' : 'bg-green-500/10'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {stat.color === 'green' ? (
                  <Star className="w-7 h-7 text-green-500" />
                ) : (
                  <Facebook className="w-7 h-7 text-blue-500" />
                )}
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">{stat.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Excellent</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-primary">{stat.reviews} Reviews</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div 
              key={review.id} 
              className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary via-violet-500 to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/30 transition-shadow">
                    <span className="text-white font-bold text-xl">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.time}</p>
                  </div>
                </div>
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Facebook className="w-5 h-5 text-blue-500" />
                </div>
              </div>

              {/* Recommended Badge */}
              <div className="flex items-center gap-2 mb-5">
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20">
                  <ThumbsUp className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary">Recommended</span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed text-base">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
