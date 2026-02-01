import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const agents = [
  {
    name: "Ryan Adam",
    role: "Customer Support",
    status: "online",
    phone: "8801767046095",
    bgColor: "bg-gradient-to-br from-cyan-400 to-teal-500"
  },
  {
    name: "Zayd Burhan",
    role: "Sales Executive", 
    status: "online",
    phone: "8801767046095",
    bgColor: "bg-gradient-to-br from-amber-400 to-orange-500"
  },
  {
    name: "Varun Yash",
    role: "Technical Support",
    status: "offline",
    phone: "8801767046095",
    bgColor: "bg-gradient-to-br from-blue-400 to-indigo-500"
  }
];

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Chat Widget Popup */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] mb-2 animate-fade-in">
          <div className="bg-white dark:bg-card rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-border">
            {/* Header with curved bottom */}
            <div className="relative">
              <div className="bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-500 pt-5 pb-10 px-5 relative">
                {/* Close button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-slate-700/60 hover:bg-slate-700/80 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
                
                {/* Header text */}
                <p className="text-white text-sm font-medium pr-10 leading-relaxed">
                  Click one of the agents below to chat on WhatsApp
                </p>
              </div>
              
              {/* Curved bottom shape */}
              <div className="absolute -bottom-1 left-0 right-0">
                <svg viewBox="0 0 320 20" className="w-full h-5 fill-white dark:fill-card">
                  <path d="M0,20 L0,0 Q160,40 320,0 L320,20 Z" />
                </svg>
              </div>
            </div>
            
            {/* Agents List */}
            <div className="p-2 pt-0">
              {agents.map((agent, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${agent.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-muted transition-colors group"
                >
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full ${agent.bgColor} flex items-center justify-center shadow-md`}>
                      <span className="text-white font-semibold text-sm">
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-emerald-600 transition-colors">
                      {agent.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{agent.role}</p>
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className={`w-2 h-2 rounded-full ${
                      agent.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                    <span className={`text-xs font-medium ${
                      agent.status === 'online' ? 'text-green-600' : 'text-gray-500'
                    }`}>
                      {agent.status === 'online' ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Footer */}
            <div className="px-4 py-3 border-t border-gray-100 dark:border-border">
              <p className="text-xs text-gray-400 text-center">
                Typically replies in a few minutes
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp chat"
        className="relative group"
      >
        {/* Pulse ring */}
        {!isOpen && (
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        )}
        
        {/* Main button */}
        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 hover:scale-110'
        }`}>
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageCircle className="w-8 h-8 text-white" fill="white" />
          )}
        </div>
        
        {/* Notification badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
            <span className="text-white text-xs font-bold">2</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;