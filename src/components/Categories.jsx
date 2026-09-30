import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function Categories({ products }) {
  const categories = [
    {
      name: "Shoulder Bags",
      description: "Easy silhouettes for everyday movement.",
      image: products[0]?.images[0],
    },
    {
      name: "Tote Bags",
      description: "Roomy pieces for everything you carry.",
      image: products[1]?.images[0],
    },
    {
      name: "Crossbody Bags",
      description: "Hands-free shapes made to move with you.",
      image: products[2]?.images[0],
    },
    {
      name: "Mini Bags",
      description: "Small pieces with just enough room.",
      image: products[3]?.images[0],
    },
  ];

  return (
    <section className="bg-[var(--color-deep-brown)] px-6 py-24 text-[var(--color-cream)] md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <ScrollReveal delay={100}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-camel)] md:text-xs">
              Explore the collection
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="mt-3 font-display text-4xl font-medium leading-none md:text-5xl">
              Find your everyday shape
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--color-cream)]/70">
              From roomy totes to smaller everyday pieces, find a shape that
              fits the way you move.
            </p>
          </ScrollReveal>

        </div>

        {/* Category cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category, index) => (
            <ScrollReveal
              key={category.name}
              delay={100 + index * 100}
            >
              <Link
                to="/shop"
                className="group block"
              >
                <div className="relative min-h-[280px] overflow-hidden rounded-sm bg-[var(--color-biege)] md:min-h-[360px]">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[var(--color-deep-brown)]/35 transition-colors duration-500 group-hover:bg-[var(--color-deep-brown)]/45" />

                  {/* Content */}
                  <div className="relative z-10 flex min-h-[280px] flex-col justify-between p-6 md:min-h-[360px] md:p-8">

                    <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-cream)]/70">
                      0{index + 1}
                    </span>

                    <div>
                      <h3 className="font-display text-3xl font-medium md:text-4xl">
                        {category.name}
                      </h3>

                      <div className="mt-3 flex items-end justify-between gap-5">
                        <p className="max-w-xs text-xs leading-5 text-[var(--color-cream)]/80 md:text-sm">
                          {category.description}
                        </p>

                        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;