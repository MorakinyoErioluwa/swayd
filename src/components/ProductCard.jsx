
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/format";
import { handleImageError } from "../utils/images";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="group flex h-full flex-col">
      {/* Product image */}
      <Link
        to={`/product/${product.id}`}
        className="block"
      >
        <div className="relative aspect-square overflow-hidden rounded-sm bg-beige md:aspect-[4/5]">
          <img
            src={product.images[0]}
            alt={product.title}
            onError={handleImageError}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Appears when the product image is hovered */}
          <span
            className="absolute bottom-4 left-4 bg-cream/95 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-deep-brown opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            View piece
          </span>
        </div>
      </Link>

      {/* Product information */}
      <div className="flex flex-1 flex-col pt-4">
        <div className="flex min-h-10 items-start justify-between gap-3">
          <Link
            to={`/product/${product.id}`}
            className="min-w-0"
          >
            <h3 className="text-sm font-medium leading-5 text-deep-brown transition-opacity hover:opacity-60 md:text-base">
              {product.title}
            </h3>
          </Link>

          <p className="shrink-0 text-sm text-coffee">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Add to cart */}
        <button
          onClick={() => addToCart(product, 1)}
          className="group/btn mt-auto flex w-full items-center justify-between rounded-md bg-coffee px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] text-cream transition-colors duration-300 hover:bg-deep-brown md:px-6 md:py-3"
        >
          <span>Add to cart</span>

          <span className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1">
           →
          </span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
