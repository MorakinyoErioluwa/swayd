import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function BrandStory() {
  return (
    <section
      id="story"
      className="px-6 py-24 md:px-10 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-16 lg:gap-24">

          {/* Story content */}
          <div className="max-w-xl">

            <ScrollReveal delay={100}>
              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-camel)] md:text-xs">
                Our story
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="mt-4 font-display text-4xl font-medium leading-[0.95] tracking-tight text-[var(--color-deep-brown)] md:text-5xl lg:text-6xl">
                Made with intention.
                <br />
                Designed for everyday life.
              </h2>
            </ScrollReveal>

            <div className="mt-7 space-y-4 text-sm leading-7 text-[var(--color-coffee)] md:text-base">

              <ScrollReveal delay={300}>
                <p>
                  SwayD is built around the idea that the bags we carry should
                  feel as good as the lives we carry them through.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <p>
                  We believe in thoughtful shapes, useful details, and pieces
                  that can become part of your everyday rhythm.
                </p>
              </ScrollReveal>

            </div>

            <ScrollReveal delay={500}>
              <Link
                to="/shop"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[var(--color-deep-brown)]
                  transition-all
                  duration-300
                  hover:gap-3
                  hover:opacity-60
                "
              >
                Explore the collection
                <span>→</span>
              </Link>
            </ScrollReveal>

          </div>

          {/* Brand visual */}
          <ScrollReveal delay={200}>
            <div className="relative min-h-[420px] overflow-hidden bg-[var(--color-biege)] md:min-h-[520px]">

              
              <div className="relative z-10 flex min-h-[420px] items-center justify-center p-10 text-center md:min-h-[520px] md:p-16">

                <div>

                  <ScrollReveal delay={350}>
                    <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[var(--color-coffee)]">
                      SwayD
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={450}>
                    <p className="mt-5 font-display text-4xl leading-tight text-[var(--color-deep-brown)] md:text-5xl">
                      Bags made
                      <br />
                      to move with you.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={550}>
                    <p className="mx-auto mt-6 max-w-xs text-xs leading-6 text-[var(--color-coffee)]/70">
                      Thoughtful pieces for the rhythm of everyday life.
                    </p>
                  </ScrollReveal>

                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

export default BrandStory;