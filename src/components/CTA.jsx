import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function CTA() {
  return (
    <section className="bg-coffee px-6 py-24 md:py-28">
      <div className="mx-auto max-w-3xl text-center">

        {/* Small label */}
        <ScrollReveal delay={100}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
            Find your everyday piece
          </p>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={200}>
          <h2 className="mt-4 font-display text-4xl font-medium leading-none tracking-tight text-cream md:text-6xl">
            Something worth carrying.
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={300}>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-cream md:text-base">
            Explore the SwayD collection and find a piece made to fit your
            everyday rhythm.
          </p>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-camel px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-deep-brown transition-colors duration-300 hover:bg-cream"
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
