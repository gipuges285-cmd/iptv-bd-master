import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const agents = [
  {
    name: "Rahat Hossain",
    role: "Customer Support",
    status: "online",
    phone: "8801767046095",
    avatar: "RH"
  },
  {
    name: "Sakib Ahmed",
    role: "Sales Executive", 
    status: "online",
    phone: "8801767046095",
    avatar: "SA"
  },
  {
    name: "Fahim Rahman",
    role: "Technical Support",
    status: "offline",
    phone: "8801767046095",
    avatar: "FR"
  }
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp chat"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 group"
      >
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25" />
          
          {/* Main button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MessageCircle className="w-7 h-7 text-white" fill="white" />
            )}
          </div>
          
          {/* Notification badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-md border-2 border-white">
              <span className="text-white text-[10px] font-bold">2</span>
            </div>
          )}
        </div>
      </button>

      {/* Chat Widget Popup */}
      {isOpen && (
        <div className="fixed bottom-36 md:bottom-24 right-4 md:right-6 z-50 w-80 animate-scale-in">
          <div className="bg-white dark:bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 relative">
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 w-7 h-7 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <p className="text-white text-sm font-medium pr-8">
                Click one of the agents below to chat on WhatsApp
              </p>
            </div>
            
            {/* Agents List */}
            <div className="p-3 max-h-72 overflow-y-auto">
              {agents.map((agent, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${agent.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                >
                  {/* Avatar */}
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                      idx === 0 ? 'bg-gradient-to-br from-teal-400 to-teal-600' :
                      idx === 1 ? 'bg-gradient-to-br from-amber-400 to-amber-600' :
                      'bg-gradient-to-br from-blue-400 to-blue-600'
                    }`}>
                      {agent.avatar}
                    </div>
                    {/* Status dot */}
                    <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white ${
                      agent.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-green-600 transition-colors">
                      {agent.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{agent.role}</p>
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      agent.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                    <span className={`text-xs font-medium capitalize ${
                      agent.status === 'online' ? 'text-green-600' : 'text-muted-foreground'
                    }`}>
                      {agent.status}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Footer */}
            <div className="px-4 py-3 border-t border-border bg-muted/30">
              <p className="text-xs text-muted-foreground text-center">
                Typically replies in a few minutes
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;