import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";

function Shop() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError("Something went wrong while loading products.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const categories = [
    ...new Set(products.map((product) => product.category)),
  ];

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sortOption === "price-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === "price-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortOption === "name-az") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.title.localeCompare(b.title)
    );
  }

  if (sortOption === "name-za") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.title.localeCompare(a.title)
    );
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm text-[var(--color-coffee)]">
            Loading collection...
          </p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal delay={100}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-camel)]">
              SwayD Collection
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="mt-3 font-display text-5xl text-[var(--color-deep-brown)]">
              Shop
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-6 text-sm text-[var(--color-coffee)]">
              {error}
            </p>
          </ScrollReveal>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page heading */}
        <div className="max-w-2xl">

          <ScrollReveal delay={100}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-camel)] md:text-xs">
              SwayD Collection
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="mt-3 font-display text-5xl font-medium leading-none text-[var(--color-deep-brown)] md:text-6xl">
              Shop the collection
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--color-coffee)] md:text-base">
              Explore pieces designed to move with you, from everyday
              essentials to statement bags.
            </p>
          </ScrollReveal>

        </div>

        {/* Filters */}
        <ScrollReveal delay={400}>
          <div className="mt-12 py-5">
            <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr]">

              {/* Search */}
              <input
                type="text"
                placeholder="Search bags..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-md border border-[var(--color-biege)] bg-transparent px-4 py-3
                  text-sm text-[var(--color-deep-brown)] outline-none transition placeholder:text-[var(--color-coffee)]/50
                  focus:border-[var(--color-camel)]
                "
              />

              {/* Category */}
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="
                  w-full
                  rounded-md
                  border
                  border-[var(--color-biege)]
                  bg-[var(--color-cream)]
                  px-4
                  py-3
                  text-sm
                  text-[var(--color-deep-brown)]
                  outline-none
                  focus:border-[var(--color-camel)]
                "
              >
                <option value="">All categories</option>

                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
                className="
                  w-full
                  rounded-md
                  border
                  border-[var(--color-biege)]
                  bg-[var(--color-cream)]
                  px-4
                  py-3
                  text-sm
                  text-[var(--color-deep-brown)]
                  outline-none
                  focus:border-[var(--color-camel)]
                "
              >
                <option value="">Sort by</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-az">Name: A to Z</option>
                <option value="name-za">Name: Z to A</option>
              </select>

            </div>
          </div>
        </ScrollReveal>

        {/* Product count */}
        <ScrollReveal delay={500}>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-coffee)]/70">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </ScrollReveal>

        {/* Products */}
        <div className="mt-6">
          {filteredProducts.length === 0 ? (
            <ScrollReveal delay={600}>
              <div className="px-6 py-20 text-center">
                <h2 className="font-display text-3xl text-[var(--color-deep-brown)]">
                  Nothing found
                </h2>

                <p className="mt-3 text-sm text-[var(--color-coffee)]">
                  Try adjusting your search or category filter.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 md:gap-x-6 md:gap-y-16">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1.125rem)]"
                >
                  <ScrollReveal delay={100 + index * 80}>
                    <ProductCard product={product} />
                  </ScrollReveal>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}

export default Shop;