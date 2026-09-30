import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Categories from "../components/Categories";
import BrandStory from "../components/BrandStory";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    if (window.location.hash === "#story") {
      const storySection = document.getElementById("story");

      if (storySection) {
        storySection.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />

      <FeaturedProducts products={products} />
      <Categories products={products} />
      <BrandStory />
      <CTA />
      <Footer />
    </main>
  );
}

export default Home;