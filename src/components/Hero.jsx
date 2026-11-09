import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="lg:grid lg:h-[620px] lg:max-h-[640px] lg:grid-cols-[1.1fr_0.9fr]">

      {/* Photo — top on phones/tablets, right pane from lg up */}
      <img
        src="/brand-hero.jpg"
        alt="Camel suede SwayD hobo bag on cream linen beside an espresso cup"
        className="order-1 h-[360px] w-full object-cover object-[35%_50%] sm:h-[440px] sm:object-[center_85%] lg:order-2 lg:h-full lg:object-[center_bottom]"
      />

      {/* Text panel — below the photo on phones/tablets, left pane from lg up */}
      <div className="order-2 bg-cream px-6 py-14 text-center lg:order-1 lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-12 lg:text-left">
        <div className="w-full max-w-xl">

          {/* Eyebrow */}
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-coffee md:text-xs">
            The SwayD collection
          </p>

          {/* Heading */}
          <h1 className="mt-4 font-display text-4xl font-medium leading-[0.92] tracking-tight text-coffee sm:text-5xl lg:text-6xl xl:text-7xl">
            Bags made to move with you.
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-coffee/90 lg:mt-6 lg:mx-0 md:max-w-lg md:text-base md:leading-7">
            Contemporary bags designed for everyday movement, effortless
            style, and everything you carry along the way.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 lg:mt-10 lg:w-auto lg:flex-row">
            <Link
              to="/shop"
              className="inline-flex w-full items-center justify-center rounded-md bg-coffee px-6 py-3.5 text-xs font-medium text-cream transition-colors hover:bg-deep-brown lg:w-auto lg:px-7 lg:py-4 md:text-sm"
            >
              Shop the collection
            </Link>

            <a
              href="#story"
              className="inline-flex w-full items-center justify-center rounded-md border border-coffee/80 px-6 py-3.5 text-xs font-medium text-coffee transition-colors hover:bg-coffee/10 lg:w-auto lg:px-7 lg:py-4 md:text-sm"
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
