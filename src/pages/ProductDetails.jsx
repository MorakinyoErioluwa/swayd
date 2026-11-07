
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { CartContext } from "../context/CartContext";
import ScrollReveal from "../components/ScrollReveal";
import { formatPrice } from "../utils/format";
import { handleImageError } from "../utils/images";

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
            <main className="min-h-screen bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
                        SwayD Collection
                    </p>

                    <h1 className="mt-3 font-display text-5xl font-medium leading-none tracking-tight text-deep-brown md:text-6xl">
                        {`Loading product...`}
                    </h1>

                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-12">
            <div className="mx-auto max-w-7xl">

                {/* Breadcrumb */}
                <nav className="mb-8 text-xs text-coffee/70">
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

                    <span className="text-deep-brown">
                        {product.title}
                    </span>
                </nav>

                {/* Product */}
                <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">

                    {/* Product image */}
                    <div className="group aspect-[4/5] overflow-hidden rounded-sm bg-beige">
                        <img
                            src={product.images[0]}
                            alt={product.title}
                            onError={handleImageError}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Product information */}
                    <div className="flex flex-col justify-center">

                        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel">
                            SwayD Collection
                        </p>

                        <h1 className="mt-3 font-display text-4xl font-medium leading-none tracking-tight text-deep-brown md:text-5xl lg:text-6xl">
                            {product.title}
                        </h1>

                        <p className="mt-5 text-lg text-coffee">
                            {formatPrice(product.price)}
                        </p>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-coffee/85 md:text-base">
                            {product.description}
                        </p>

                        {/* Product details */}
                        <div className="mt-7 space-y-2 text-xs text-coffee/75">
                            <p>
                                Rating: {product.rating}
                            </p>

                            <p>
                                {product.stock > 0
                                    ? `${product.stock} available`
                                    : "Out of stock"}
                            </p>
                        </div>

                        {/* Quantity */}
                        <div className="mt-8">

                            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-coffee">
                                Quantity
                            </p>

                            <div className="flex w-fit items-center rounded-md border border-beige bg-cream">

                                <button
                                    type="button"
                                    onClick={() =>
                                        setQuantity(
                                            Math.max(1, quantity - 1)
                                        )
                                    }
                                    className="flex h-11 w-11 items-center justify-center text-lg text-deep-brown transition-colors hover:bg-beige/40"
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
                                    className="flex h-11 w-11 items-center justify-center text-lg text-deep-brown transition-colors hover:bg-beige/40"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>

                            </div>
                        </div>

                        {/* Add to cart */}
                        <button
                            type="button"
                            onClick={handleAddToCart}
                            className="mt-6 flex w-full items-center justify-between rounded-md bg-coffee px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-deep-brown"
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

                    </div>
                </div>

                {/* Product information */}
                <div className="mt-24 grid gap-10 md:grid-cols-3 md:gap-12">

                    <ScrollReveal delay={100}>
                        <div className="border-t border-beige pt-6">
                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-camel">
                                Materials
                            </p>

                            <p className="mt-4 text-sm leading-6 text-coffee">
                                Thoughtfully designed pieces made for everyday
                                use and effortless style.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="border-t border-beige pt-6">
                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-camel">
                                Care
                            </p>

                            <p className="mt-4 text-sm leading-6 text-coffee">
                                Store your bag in a cool, dry place and avoid
                                prolonged exposure to moisture.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="border-t border-beige pt-6">
                            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-camel">
                                Shipping & Returns
                            </p>

                            <p className="mt-4 text-sm leading-6 text-coffee">
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
