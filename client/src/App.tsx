/* Design Philosophy: Editorial Futuristic Dark Theme
 * Premium digital studio positioning with confident, minimal aesthetic
 * Design + Technology + Systems Thinking
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CaseStudy from "@/pages/CaseStudy";
import Services from "@/pages/Services";
import { Route, Switch } from "wouter";
import { AnimatePresence } from "framer-motion";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CookieConsent from "./components/CookieConsent";
import CustomCursor from "./components/CustomCursor";
import { useLenis } from "./hooks/useLenis";
import { useEffect, useState } from "react";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/terms"} component={Terms} />
        <Route path="/services" component={Services} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/case-study/:slug" component={CaseStudy} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  useLenis();
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    setHasFinePointer(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          {hasFinePointer && <CustomCursor />}
          <div className={hasFinePointer ? "cursor-none-global" : ""}>
            <Toaster />
            <CookieConsent />
            <Router />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
