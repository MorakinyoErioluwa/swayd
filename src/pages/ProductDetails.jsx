
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { CartContext } from "../context/CartContext";
import ScrollReveal from "../components/ScrollReveal";

function ProductDetails() {
    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        async function loadProduct() {
            const data = await getProductById(id);

            setProduct(data);
        }

        loadProduct();
    }, [id]);

    function handleAddToCart() {
        addToCart(product, quantity);
        setAddedToCart(true);

        setTimeout(() => {
            setAddedToCart(false);
        }, 2000);
    }

    if (!product) {
        return (
            <main className="min-h-screen bg-[var(--color-cream)] px-6 py-20 md:px-10">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm text-[var(--color-coffee)]">
                        Loading product...
                    </p>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[var(--color-cream)] px-6 py-12 md:px-10 md:py-16 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* Breadcrumb */}
                <ScrollReveal delay={100}>
                    <nav className="mb-8 text-xs text-[var(--color-coffee)]/70">
                        <Link
                            to="/"
                            className="transition-opacity hover:opacity-60"
                        >
                            Home
                        </Link>

                        <span className="mx-2">/</span>

                        <Link
                            to="/shop"
                            className="transition-opacity hover:opacity-60"
                        >
                            Shop
                        </Link>

                        <span className="mx-2">/</span>

                        <span className="text-[var(--color-deep-brown)]">
                            {product.title}
                        </span>
                    </nav>
                </ScrollReveal>

                {/* Product */}
                <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">

                    {/* Product image */}
                    <ScrollReveal delay={200}>
                        <div className="aspect-[4/5] overflow-hidden rounded-sm bg-[var(--color-biege)]">
                            <img
                                src={product.images[0]}
                                alt={product.title}
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105
                                "
                            />
                        </div>
                    </ScrollReveal>

                    {/* Product information */}
                    <div className="flex flex-col justify-center">

                        <ScrollReveal delay={300}>
                            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-camel)]">
                                SwayD Collection
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={400}>
                            <h1 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight text-[var(--color-deep-brown)] md:text-5xl lg:text-6xl">
                                {product.title}
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={500}>
                            <p className="mt-5 text-lg text-[var(--color-coffee)]">
                                ${product.price}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={600}>
                            <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--color-coffee)]/85 md:text-base">
                                {product.description}
                            </p>
                        </ScrollReveal>

                        {/* Product details */}
                        <ScrollReveal delay={700}>
                            <div className="mt-7 space-y-2 text-xs text-[var(--color-coffee)]/75">
                                <p>
                                    Rating: {product.rating}
                                </p>

                                <p>
                                    {product.stock > 0
                                        ? `${product.stock} available`
                                        : "Out of stock"}
                                </p>
                            </div>
                        </ScrollReveal>

                        {/* Quantity */}
                        <ScrollReveal delay={800}>
                            <div className="mt-8">

                                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-coffee)]">
                                    Quantity
                                </p>

                                <div className="flex w-fit items-center rounded-md border border-[var(--color-biege)] bg-[var(--color-cream)]">

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity(
                                                Math.max(1, quantity - 1)
                                            )
                                        }
                                        className="flex h-11 w-11 items-center justify-center text-lg text-[var(--color-deep-brown)] transition-colors hover:bg-[var(--color-biege)]/40"
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>

                                    <span className="flex h-11 min-w-10 items-center justify-center text-sm">
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                        className="flex h-11 w-11 items-center justify-center text-lg text-[var(--color-deep-brown)] transition-colors hover:bg-[var(--color-biege)]/40"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>

                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Add to cart */}
                        <ScrollReveal delay={900}>
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="
                                    mt-6 flex  w-full items-center justify-between rounded-md  bg-[var(--color-coffee)]
                                    px-5 py-4 text-xs font-medium uppercase  tracking-[0.14em] text-[var(--color-cream)]
                                    transition-all duration-300 hover:bg-[var(--color-deep-brown)]
                                "
                            >
                                <span>
                                    {addedToCart
                                        ? "✓ Added to bag"
                                        : "Add to bag"}
                                </span>

                                <span className="text-base">
                                    →
                                </span>
                            </button>
                        </ScrollReveal>

                    </div>
                </div>

                {/* Product information */}
                <div className="mt-24 grid gap-10 md:grid-cols-3 md:gap-12">

                    <ScrollReveal delay={100}>
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--color-camel)]">
                                Materials
                            </p>

                            <p className="mt-4 text-sm leading-6 text-[var(--color-coffee)]">
                                Thoughtfully designed pieces made for everyday
                                use and effortless style.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--color-camel)]">
                                Care
                            </p>

                            <p className="mt-4 text-sm leading-6 text-[var(--color-coffee)]">
                                Store your bag in a cool, dry place and avoid
                                prolonged exposure to moisture.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div>
                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--color-camel)]">
                                Shipping & Returns
                            </p>

                            <p className="mt-4 text-sm leading-6 text-[var(--color-coffee)]">
                                Shipping details and return information will be
                                provided during checkout.
                            </p>
                        </div>
                    </ScrollReveal>

                </div>

            </div>
        </main>
    );
}

export default ProductDetails;
