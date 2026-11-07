import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[74vh] overflow-hidden md:min-h-[92vh]">

      {/* Hero image */}
      <img
        src="/hero.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%] md:object-center"
      />

      {/* Scrim */}
      <div className="absolute inset-0 bg-deep-brown/40 md:bg-deep-brown/35"></div>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-brown/60 via-deep-brown/10 to-deep-brown/60"></div>

      {/* Hero content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[74vh]
          items-center
          justify-center
          px-6
          py-16
          text-center
          md:min-h-[92vh]
          md:px-10
          md:py-24
        "
      >
        <div className="max-w-3xl text-cream">

          {/* Eyebrow */}
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-cream md:mb-6 md:text-xs">
            The SwayD collection
          </p>

          {/* Main heading */}
          <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">
            Bags made to move with you.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-md text-xs leading-6 text-cream md:mt-8 md:max-w-lg md:text-base md:leading-7">
            Contemporary bags designed for everyday movement, effortless
            style, and everything you carry along the way.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10">

            <Link
              to="/shop"
              className="inline-flex items-center justify-center rounded-md bg-cream px-6 py-3.5 text-xs font-medium text-deep-brown transition-colors hover:bg-beige md:px-7 md:py-4 md:text-sm"
            >
              Shop the collection
            </Link>

            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-md border border-cream/80 px-6 py-3.5 text-xs font-medium text-cream transition-colors hover:bg-cream/10 md:px-7 md:py-4 md:text-sm"
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
