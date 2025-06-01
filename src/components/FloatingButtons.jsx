// Floating Action Buttons
import { useEffect, useState } from "react";
import { ChevronUp, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-10 flex flex-col items-center gap-4 z-50">
      {/* Chat Button */}
      <a
        href="https://wa.me/628xxxxxxxxxx"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] hover:bg-blue-900 text-white rounded-full flex items-center justify-center shadow-md"
        aria-label="Live Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] hover:bg-blue-900 text-white rounded-full flex items-center justify-center shadow-md"
          aria-label="Scroll to Top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}


