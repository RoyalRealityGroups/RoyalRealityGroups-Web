import { useState, useEffect, useCallback } from "react";

const LAUNCH_KEY = "royal-reality-launched";

function Particle({ delay, size, x, duration }: { delay: number; size: number; x: number; duration: number }) {
  return (
    <div
      className="absolute bottom-0 rounded-full bg-[#D4AF37]"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        opacity: 0,
        animation: `floatUp ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

function LaunchScreen({ onLaunch }: { onLaunch: () => void }) {
  const [countdown, setCountdown] = useState<number | null>(null);
  const [launching, setLaunching] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scrolling on body while launch screen is visible
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      clearTimeout(timer);
    };
  }, []);

  const handleClick = useCallback(() => {
    setCountdown(3);
  }, []);

  useEffect(() => {
    if (countdown === null) return;
    if (countdown === 0) {
      setLaunching(true);
      setTimeout(() => onLaunch(), 1500);
      return;
    }
    const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, onLaunch]);

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    delay: Math.random() * 5,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    duration: Math.random() * 4 + 4,
  }));

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ${launching ? "scale-110 opacity-0" : "scale-100 opacity-100"}`}
      style={{ background: "radial-gradient(ellipse at center, #1a4a7a 0%, #14345A 40%, #0a1f35 100%)", width: "100vw", height: "100vh", top: 0, left: 0 }}
    >
      {/* CSS Animations */}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) scale(1); opacity: 0; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Rotating ring decoration */}
      <div className="absolute h-[80vh] w-[80vh] max-h-[700px] max-w-[700px] rounded-full border border-[#D4AF37]/10" style={{ animation: "spin-slow 30s linear infinite" }}>
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#D4AF37]/60" />
        <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#D4AF37]/40" />
      </div>
      <div className="absolute h-[60vh] w-[60vh] max-h-[550px] max-w-[550px] rounded-full border border-white/5" style={{ animation: "spin-slow 20s linear infinite reverse" }}>
        <div className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white/40" />
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center transition-all duration-1000 ${showContent ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        
        {/* Logo */}
        <div style={{ animation: "fadeInUp 1s ease-out 0.5s both" }}>
          <img
            src="/og.png"
            alt="Royal Reality Groups"
            className="h-40 w-auto drop-shadow-2xl md:h-52"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        {/* Brand name with shimmer */}
        <div style={{ animation: "fadeInUp 1s ease-out 0.8s both" }}>
          <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
            Royal Reality
          </h1>
          <h2
            className="mt-1 font-serif text-2xl font-bold md:text-4xl"
            style={{
              background: "linear-gradient(90deg, #D4AF37, #f5e6a3, #D4AF37, #b8960c, #D4AF37)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
            }}
          >
            Groups
          </h2>
        </div>

        {/* Tagline */}
        <p
          className="max-w-lg text-base text-white/60 md:text-lg"
          style={{ animation: "fadeInUp 1s ease-out 1.1s both" }}
        >
          Building Dreams. Delivering Excellence.
        </p>

        {/* Decorative line */}
        <div
          className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          style={{ animation: "fadeInUp 1s ease-out 1.3s both" }}
        />

        {/* Launch button or countdown */}
        <div className="mt-4" style={{ animation: "fadeInUp 1s ease-out 1.5s both" }}>
          {countdown === null ? (
            <button
              onClick={handleClick}
              className="group relative cursor-pointer overflow-hidden rounded-full border-2 border-[#D4AF37] bg-transparent px-14 py-5 text-lg font-bold uppercase tracking-[0.2em] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.2)] transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#14345A] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] hover:tracking-[0.3em]"
              style={{ animation: "breathe 2s ease-in-out infinite" }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
                Launch Website
              </span>
              {/* Ripple rings on hover */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-full rounded-full border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
              </div>
            </button>
          ) : countdown > 0 ? (
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#D4AF37] bg-[#D4AF37]/10 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
                <span className="font-serif text-6xl font-bold text-[#D4AF37]" style={{ animation: "breathe 0.5s ease-in-out infinite" }}>
                  {countdown}
                </span>
              </div>
              <p className="text-lg uppercase tracking-widest text-white/70">Launching...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#D4AF37] bg-[#D4AF37] shadow-[0_0_80px_rgba(212,175,55,0.6)]">
                <span className="text-4xl">🚀</span>
              </div>
              <p className="text-xl font-bold uppercase tracking-widest text-[#D4AF37]">Welcome!</p>
            </div>
          )}
        </div>

        {/* Stats teaser */}
        <div
          className="mt-6 grid grid-cols-3 gap-8 md:gap-16"
          style={{ animation: "fadeInUp 1s ease-out 1.8s both" }}
        >
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-[#D4AF37] md:text-3xl">50+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/40">Projects</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-[#D4AF37] md:text-3xl">500+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/40">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-2xl font-bold text-[#D4AF37] md:text-3xl">10+</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-white/40">Years</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LaunchGate({ children }: { children: React.ReactNode }) {
  const [launched, setLaunched] = useState<boolean | null>(null);

  useEffect(() => {
    const isLaunched = localStorage.getItem(LAUNCH_KEY);
    setLaunched(isLaunched === "true");
  }, []);

  const handleLaunch = useCallback(() => {
    localStorage.setItem(LAUNCH_KEY, "true");
    setLaunched(true);
  }, []);

  // Still checking localStorage
  if (launched === null) {
    return null;
  }

  // Already launched — show website directly
  if (launched) {
    return <>{children}</>;
  }

  // Launch screen
  return <LaunchScreen onLaunch={handleLaunch} />;
}
