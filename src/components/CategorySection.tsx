import { Headphones, Apple, Shield, Key, Tv, Wrench, GraduationCap, Bot } from "lucide-react";

const categories = [
  { name: "Audio Streaming", icon: Headphones, color: "bg-pink-100 text-pink-600" },
  { name: "Apple Products", icon: Apple, color: "bg-gray-100 text-gray-600" },
  { name: "VPN", icon: Shield, color: "bg-blue-100 text-blue-600" },
  { name: "Key", icon: Key, color: "bg-yellow-100 text-yellow-600" },
  { name: "Video Streaming", icon: Tv, color: "bg-red-100 text-red-600" },
  { name: "Utilities", icon: Wrench, color: "bg-green-100 text-green-600" },
  { name: "Educational Tools", icon: GraduationCap, color: "bg-purple-100 text-purple-600" },
  { name: "AI, Grammar and Writing Products", icon: Bot, color: "bg-teal-100 text-teal-600" },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-section-light">
      <div className="section-container">
        <h2 className="section-title mb-8">Find by categories</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="https://wa.me/8801767046095"
              target="_blank"
              rel="noopener noreferrer"
              className="category-card group"
            >
              <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-7 h-7" />
              </div>
              <span className="text-sm font-medium text-foreground text-center line-clamp-2">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
