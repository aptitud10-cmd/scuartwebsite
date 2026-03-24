import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Ambient orbs */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center space-y-6 max-w-lg">
        <div className="text-8xl font-bold gradient-text">404</div>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-foreground/60 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => setLocation('/')}
            className="btn-primary flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
          <a href="#contact" onClick={() => setLocation('/')} className="btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
