import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function Hero() {
  return (
    <section
      className="relative min-h-[74vh] overflow-hidden bg-cover bg-[center_45%] bg-no-repeat
        md:min-h-[92vh] md:bg-center
      "
      style={{
        backgroundImage: "url('/hero.png')",
      }}
    >
      {/* Soft overlay */}
      <div className="absolute inset-0 bg-deep-brown/30 md:bg-deep-brown/25"></div>

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
          <ScrollReveal delay={100}>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-cream/90 md:mb-5 md:text-xs">
              The SwayD collection
            </p>
          </ScrollReveal>

          {/* Main heading */}
          <ScrollReveal delay={200}>
            <h1 className="font-display text-5xl font-medium leading-[0.92] tracking-tight md:text-8xl">
              Bags made to move with you.
            </h1>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={300}>
            <p className="mx-auto mt-5 max-w-md text-xs leading-6 text-cream/90 md:mt-7 md:max-w-lg md:text-base md:leading-7">
              Contemporary bags designed for everyday movement, effortless
              style, and everything you carry along the way.
            </p>
          </ScrollReveal>

          {/* Buttons */}
          <ScrollReveal delay={400}>
            <div className="mt-7 flex flex-wrap justify-center gap-3 md:mt-9">

              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-md bg-cream px-6 py-3 text-xs font-medium text-deep-brown transition-colors hover:bg-beige md:px-7 md:py-3.5 md:text-sm"
              >
                Shop the collection
              </Link>

              <a
                href="#story"
                className="inline-flex items-center justify-center rounded-md border border-cream/80 px-6 py-3 text-xs font-medium text-cream transition-colors hover:bg-cream/10 md:px-7 md:py-3.5 md:text-sm"
              >
                Our story
              </a>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

export default Hero;
