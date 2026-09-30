import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

function FeaturedProducts({ products }) {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="px-6 py-24 md:px-10 md:py-28 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <ScrollReveal delay={100}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-camel)] md:text-xs">
              Featured collection
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="mt-3 font-display text-4xl font-medium leading-none tracking-tight text-[var(--color-deep-brown)] md:text-5xl">
              Pieces worth carrying
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[var(--color-coffee)]/80">
              A few of our pieces designed for everyday movement, effortless
              style, and everything you carry along the way.
            </p>
          </ScrollReveal>

        </div>

        {/* Featured products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6 md:gap-y-16">
          {featuredProducts.map((product, index) => (
            <ScrollReveal
              key={product.id}
              delay={100 + index * 100}
            >
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>

        {/* View all */}
        <ScrollReveal delay={500}>
          <div className="mt-14 text-center">
            <Link
              to="/shop"
              className="
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
              View all pieces
              <span>→</span>
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

export default FeaturedProducts;