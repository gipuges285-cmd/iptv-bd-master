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
    <section className="py-16 bg-background" id="reviews">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary mb-2 block">See Our Reviews</span>
          <h2 className="section-title mb-4">Check what customers say About us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read honest reviews and opinions from customers of IPTV BD facebook page and group. 
            Discover what others have to say about our subscription service and make an informed decision.
          </p>
        </div>

        {/* Review Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border">
            <Facebook className="w-10 h-10 text-blue-600" />
            <div>
              <p className="font-semibold text-foreground">Facebook Group</p>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">Excellent</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">242 Reviews</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground">Trustpilot</p>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">All Positive</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">30 Reviews</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border">
            <Facebook className="w-10 h-10 text-blue-600" />
            <div>
              <p className="font-semibold text-foreground">Facebook Page</p>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">Excellent</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">189 Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.time}</p>
                  </div>
                </div>
                <Facebook className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <ThumbsUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Recommended</span>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-3">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
