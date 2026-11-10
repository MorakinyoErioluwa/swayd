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
    <section className="relative h-[60vh] min-h-[420px] md:h-[560px] md:min-h-0 md:max-h-[640px] lg:h-[620px]">

      {/* Hero image */}
      <img
        src="/brand-hero.jpg"
        alt="Camel suede SwayD hobo bag on cream linen beside an espresso cup"
        className="absolute inset-0 h-full w-full object-cover object-[35%_50%] sm:object-[center_85%]"
      />

      {/* Soft light veil where the text sits — fades out before the bag body */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[75%] bg-gradient-to-b from-cream/70 via-cream/30 to-transparent" />

      {/* Copy block — top on phones, upper-middle from md */}
      <div className="relative z-10 flex h-full w-full items-start justify-center pt-14 md:items-center md:pt-0">
        <div
          className={`mx-auto w-full max-w-2xl px-6 text-center transition-all duration-700 ease-out motion-reduce:transition-none ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          } motion-reduce:translate-y-0 motion-reduce:opacity-100`}
        >
          {/* Eyebrow */}
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-coffee">
            The SwayD collection
          </p>
          <div className="mx-auto mt-3 h-px w-10 bg-camel" />

          {/* Headline */}
          <h1 className="mt-4 text-balance font-display text-5xl font-medium leading-[0.95] tracking-tight text-coffee sm:text-6xl md:text-7xl">
            Bags made to move with you.
          </h1>

          {/* Copy */}
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-coffee md:text-lg">
            Contemporary bags designed for everyday movement, effortless
            style, and everything you carry along the way.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/shop"
              className="inline-flex w-full items-center justify-center rounded-md bg-coffee px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-cream transition-colors duration-300 hover:bg-deep-brown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-camel focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
            >
              Shop the collection
            </Link>
            <a
              href="#story"
              className="inline-flex w-full items-center justify-center rounded-md border border-coffee px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-coffee transition-colors duration-300 hover:bg-coffee hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-camel focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:w-auto"
            >
              Our story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
