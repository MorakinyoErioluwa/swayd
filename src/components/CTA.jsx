import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function CTA() {
  return (
    <section className="bg-[var(--color-camel)] px-6 py-24 md:py-28">
      <div className="mx-auto max-w-3xl text-center">

        {/* Small label */}
        <ScrollReveal delay={100}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-deep-brown)]/65 md:text-xs">
            Find your everyday piece
          </p>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={200}>
          <h2 className="mt-4 font-display text-4xl font-medium leading-none tracking-tight text-[var(--color-deep-brown)] md:text-6xl">
            Something worth carrying.
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={300}>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[var(--color-coffee)] md:text-base">
            Explore the SwayD collection and find a piece made to fit your
            everyday rhythm.
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <Link
            to="/shop"
            className="
              mt-8
              inline-flex
              items-center
              gap-4
              rounded-md
              bg-[var(--color-deep-brown)]
              px-6
              py-3.5
              text-xs
              font-medium
              uppercase
              tracking-[0.14em]
              text-[var(--color-cream)]
              transition-all
              duration-300
              hover:gap-5
              hover:bg-[var(--color-coffee)]
            "
          >
            Shop the collection
            <span className="text-base">→</span>
          </Link>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default CTA;