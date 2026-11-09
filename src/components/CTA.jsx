import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function CTA() {
  return (
    <section className="bg-beige px-6 py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">

        {/* Copy */}
        <ScrollReveal delay={100}>
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-coffee md:text-xs">
            Find your everyday piece
          </p>
          <div className="mt-3 w-10 border-t-2 border-camel"></div>
          <h2 className="mt-5 font-display text-4xl font-medium leading-none tracking-tight text-coffee md:text-5xl">
            Something worth carrying.
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-6 text-coffee md:text-base">
            Explore the SwayD collection and find a piece made to fit your
            everyday rhythm.
          </p>
          <Link
            to="/shop"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-coffee px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-deep-brown"
          >
            Shop the collection
            <span className="text-base">→</span>
          </Link>
        </ScrollReveal>

        {/* Image diptych */}
        <div className="grid grid-cols-2 items-start gap-3 md:gap-4">
          <ScrollReveal delay={200}>
            <img
              src="/images/products/temi-slouch-hobo.jpg"
              alt="Camel suede SwayD slouch hobo bag"
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <img
              src="/images/products/kemi-hobo-bag.jpg"
              alt="Espresso suede SwayD bag with brass buckle"
              className="aspect-[4/5] w-full rounded-md object-cover lg:mt-16"
            />
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}

export default CTA;
