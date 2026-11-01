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
      <main className="min-h-screen bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
            SwayD Collection
          </p>

          <h1 className="mt-3 font-display text-5xl font-medium leading-none tracking-tight text-deep-brown md:text-6xl">
            Shop the collection
          </h1>

          <p className="mt-5 text-sm leading-6 text-coffee">
            Loading collection...
          </p>

        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
            SwayD Collection
          </p>

          <h1 className="mt-3 font-display text-5xl font-medium leading-none tracking-tight text-deep-brown md:text-6xl">
            Shop the collection
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-coffee">
            {error}
          </p>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page heading */}
        <div className="max-w-2xl">

          <ScrollReveal delay={100}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
              SwayD Collection
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="mt-3 font-display text-5xl font-medium leading-none tracking-tight text-deep-brown md:text-6xl">
              Shop the collection
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-5 max-w-xl text-sm leading-6 text-coffee md:text-base">
              Explore pieces designed to move with you, from everyday
              essentials to statement bags.
            </p>
          </ScrollReveal>

        </div>

        {/* Filters */}
        <ScrollReveal delay={400}>
          <div className="mt-10 grid gap-3 md:grid-cols-[1.5fr_1fr_1fr]">

            {/* Search */}
            <input
              type="text"
              placeholder="Search bags..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-md border border-beige bg-transparent px-4 py-3 text-sm text-deep-brown outline-none transition-colors placeholder:text-coffee/50 focus:border-camel"
            />

            {/* Category */}
            <select
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
              className="w-full rounded-md border border-beige bg-cream px-4 py-3 text-sm text-deep-brown outline-none transition-colors focus:border-camel"
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
              className="w-full rounded-md border border-beige bg-cream px-4 py-3 text-sm text-deep-brown outline-none transition-colors focus:border-camel"
            >
              <option value="">Sort by</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-az">Name: A to Z</option>
              <option value="name-za">Name: Z to A</option>
            </select>

          </div>
        </ScrollReveal>

        {/* Product count */}
        <ScrollReveal delay={500}>
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.15em] text-coffee/70">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "piece" : "pieces"}
            </p>
          </div>
        </ScrollReveal>

        {/* Products */}
        <div className="mt-6">
          {filteredProducts.length === 0 ? (
            <ScrollReveal delay={600}>
              <div className="py-20 text-center">

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
                  No matches
                </p>

                <h2 className="mt-3 font-display text-3xl font-medium leading-none tracking-tight text-deep-brown md:text-4xl">
                  Nothing found
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-coffee">
                  Try adjusting your search or category filter.
                </p>

              </div>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6 md:gap-y-16">
              {filteredProducts.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  delay={100 + index * 80}
                >
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>

      </div>
    </main>
  );
}

export default Shop;
