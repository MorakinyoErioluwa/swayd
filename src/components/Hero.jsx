import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Hero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const raf = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative flex min-h-[600px] flex-col items-center py-16 md:min-h-[640px] md:justify-center">

      {/* Image wrapper — the only place overflow is contained */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/brand-hero.jpg"
          alt="Camel suede SwayD hobo bag on cream linen beside an espresso cup"
          className="h-full w-full object-cover object-[35%_50%] sm:object-[center_85%]"
        />
      </div>

      {/* Guaranteed dark base + stronger wash where the text sits */}
      <div className="absolute inset-0 bg-deep-brown/55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-deep-brown/70 via-deep-brown/30 to-transparent" />

      {/* Copy block */}
      <div
        className={`relative z-10 w-full max-w-2xl px-6 text-center transition-all duration-700 ease-out motion-reduce:transition-none ${
          revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
      >
        {/* Eyebrow */}
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cream drop-shadow-[0_2px_8px_rgba(36,25,20,0.5)]">
          The SwayD collection
        </p>
        <div className="mx-auto mt-3 h-px w-10 bg-camel" />

        {/* Headline */}
        <h1 className="mt-4 text-balance font-display text-5xl font-medium leading-[0.95] tracking-tight text-cream drop-shadow-[0_2px_8px_rgba(36,25,20,0.5)] sm:text-6xl md:text-7xl">
          Bags made to move with you.
        </h1>

        {/* Copy */}
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-cream drop-shadow-[0_2px_8px_rgba(36,25,20,0.5)] md:text-lg">
          Contemporary bags designed for everyday movement, effortless
          style, and everything you carry along the way.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/shop"
            className="inline-flex w-full items-center justify-center rounded-md bg-cream px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-coffee transition-colors duration-300 hover:bg-beige focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-camel focus-visible:ring-offset-2 focus-visible:ring-offset-deep-brown sm:w-auto"
          >
            Shop the collection
          </Link>
          <a
            href="#story"
            className="inline-flex w-full items-center justify-center rounded-md border border-cream bg-deep-brown/60 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-cream backdrop-blur-sm transition-colors duration-300 hover:bg-cream hover:text-coffee focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-camel focus-visible:ring-offset-2 focus-visible:ring-offset-deep-brown sm:w-auto"
          >
            Our story
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
