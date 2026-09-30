import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ScrollReveal from "../components/ScrollReveal";

function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[var(--color-cream)] px-6 py-24 md:px-10">
        <div className="mx-auto max-w-xl text-center">

          <ScrollReveal delay={100}>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-camel)]">
              Your SwayD bag
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="mt-4 font-display text-5xl text-[var(--color-deep-brown)]">
              Your bag is empty
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-5 text-sm leading-6 text-[var(--color-coffee)]">
              Looks like you haven't added anything yet. Find something worth
              carrying.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Link
              to="/shop"
              className="mt-8 inline-flex  items-center gap-4 rounded-md bg-[var(--color-coffee)] px-6 py-3.5 text-xs font-medium
                uppercase  tracking-[0.14em] text-[var(--color-cream)] transition-all duration-300 hover:gap-5 hover:bg-[var(--color-deep-brown)]
              "
            >
              Explore bags
              <span className="text-base">→</span>
            </Link>
          </ScrollReveal>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-cream)] px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Page heading */}
        <div>
          <ScrollReveal delay={100}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--color-camel)] md:text-xs">
              Your SwayD bag
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="mt-3 font-display text-5xl text-[var(--color-deep-brown)] md:text-6xl">
              Your bag
            </h1>
          </ScrollReveal>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px] lg:items-start">

          {/* Cart items */}
          <div className="space-y-4">
            {cart.map((item, index) => (
              <ScrollReveal
                key={item.id}
                delay={300 + index * 100}
              >
                <div className="flex gap-4 rounded-sm bg-[var(--color-biege)]/25 p-4 md:gap-6 md:p-5">

                  {/* Product image */}
                  <Link
                    to={`/product/${item.id}`}
                    className="h-32 w-24 shrink-0 overflow-hidden rounded-sm bg-[var(--color-biege)] md:h-40 md:w-32"
                  >
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>

                  {/* Product information */}
                  <div className="flex min-w-0 flex-1 flex-col justify-between">

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <Link to={`/product/${item.id}`}>
                          <h2 className="text-sm font-medium text-[var(--color-deep-brown)] md:text-base">
                            {item.title}
                          </h2>
                        </Link>

                        <p className="mt-1 text-sm text-[var(--color-coffee)]">
                          ${item.price}
                        </p>
                      </div>

                      <p className="text-sm font-medium text-[var(--color-deep-brown)]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity + remove */}
                    <div className="mt-5 flex items-center justify-between gap-4">

                      <div className="flex items-center rounded-md border border-[var(--color-biege)] bg-[var(--color-cream)]/50">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="px-3 py-2 text-sm text-[var(--color-deep-brown)] transition-colors hover:bg-[var(--color-biege)]/40"
                        >
                          −
                        </button>

                        <span className="min-w-8 text-center text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="px-3 py-2 text-sm text-[var(--color-deep-brown)] transition-colors hover:bg-[var(--color-biege)]/40"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs uppercase tracking-[0.12em] text-[var(--color-coffee)]/70 transition-colors hover:text-[var(--color-deep-brown)]"
                      >
                        Remove
                      </button>

                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Order summary */}
          <ScrollReveal delay={400}>
            <aside className="bg-[var(--color-biege)]/40 p-6 md:p-8">

              <h2 className="font-display text-3xl text-[var(--color-deep-brown)]">
                Summary
              </h2>

              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="text-[var(--color-coffee)]">
                  Subtotal
                </span>

                <span className="font-medium text-[var(--color-deep-brown)]">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <p className="mt-5 text-xs leading-5 text-[var(--color-coffee)]/70">
                Shipping and taxes will be calculated at checkout.
              </p>

              <Link
                to="/checkout"
                className="mt-8 flex w-full items-center justify-between  rounded-md  bg-[var(--color-coffee)] px-5  py-3.5  text-xs
                  font-medium uppercase tracking-[0.14em] text-[var(--color-cream)] transition-all duration-300 hover:gap-2
                  hover:bg-[var(--color-deep-brown)]
                "
              >
                <span>Proceed to checkout</span>
                <span className="text-base">→</span>
              </Link>

              <Link
                to="/shop"
                className="mt-5 block text-center text-xs uppercase tracking-[0.12em] text-[var(--color-coffee)] transition-opacity hover:opacity-60"
              >
                Continue shopping
              </Link>

            </aside>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}

export default Cart;