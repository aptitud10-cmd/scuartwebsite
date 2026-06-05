/* Cookie Consent Banner Component
 * GDPR-compliant cookie consent banner
 */

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show banner after 1 second delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
    
    // Initialize analytics after consent
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
    
    // Disable analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="container max-w-6xl">
        <div className="glass-card p-6 md:p-8 border-2 border-cyan/30 relative">
          <button
            onClick={rejectCookies}
            className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="flex-1 pr-8">
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                Cookie Preferences
              </h3>
              <p className="font-body font-light text-sm text-foreground/80 leading-relaxed">
                We use cookies to enhance your experience. Please review our{" "}
                <Link href="/privacy">
                  <a className="text-cyan hover:underline">Privacy Policy</a>
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                onClick={rejectCookies}
                variant="outline"
                className="bg-transparent border-2 border-foreground/20 text-foreground hover:bg-foreground/5 whitespace-nowrap"
              >
                Reject
              </Button>
              <Button
                onClick={acceptCookies}
                className="bg-gradient-to-r from-cyan to-magenta text-background hover:shadow-2xl hover:shadow-cyan/50 whitespace-nowrap"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
