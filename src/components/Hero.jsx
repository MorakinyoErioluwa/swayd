import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] max-h-[560px] overflow-hidden md:h-[560px] md:min-h-0 md:max-h-[640px] lg:h-[620px]">

      {/* Hero image */}
      <img
        src="brandbrand.png"
        alt="Woman carrying a camel suede SwayD satchel"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%] md:object-center"
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-brown/80"></div>

      {/* Hero content */}
      <div
        className="
          relative
          z-10
          flex
          h-[60vh]
          min-h-[420px]
          max-h-[560px]
          flex-col
          items-center
          justify-end
          px-6
          pb-10
          text-center
          text-shadow-[0_1px_3px_rgba(36,25,20,0.45)]
          md:h-[560px]
          md:min-h-0
          md:max-h-[640px]
          md:flex-row
          md:justify-center
          md:pb-24
          lg:h-[620px]
        "
      >
        <div className="max-w-3xl w-full text-cream">

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
          <div className="mt-8 flex flex-col gap-3 md:mt-10 md:flex-row md:justify-center">

            <Link
              to="/shop"
              className="inline-flex w-full items-center justify-center rounded-md bg-cream px-6 py-3.5 text-xs font-medium text-deep-brown transition-colors hover:bg-beige md:w-auto md:px-7 md:py-4 md:text-sm"
            >
              Shop the collection
            </Link>

            <a
              href="#story"
              className="inline-flex w-full items-center justify-center rounded-md border border-cream/80 px-6 py-3.5 text-xs font-medium text-cream transition-colors hover:bg-cream/10 md:w-auto md:px-7 md:py-4 md:text-sm"
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
