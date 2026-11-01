import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ScrollReveal from "../components/ScrollReveal";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    clearCart();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-cream px-6 py-24">
        <div className="mx-auto max-w-xl text-center">

          <ScrollReveal delay={100}>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-beige text-xl text-deep-brown">
              ✓
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
              Thank you
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h1 className="mt-4 font-display text-5xl font-medium leading-none tracking-tight text-deep-brown">
              Order placed successfully
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="mt-5 text-sm leading-6 text-coffee">
              Thank you for shopping with SwayD. Your order has been received.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-coffee px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-deep-brown"
            >
              Continue shopping
              <span className="text-base">→</span>
            </Link>
          </ScrollReveal>

        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-cream px-6 py-24">
        <div className="mx-auto max-w-xl text-center">

          <ScrollReveal delay={100}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
              Checkout
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="mt-4 font-display text-5xl font-medium leading-none tracking-tight text-deep-brown">
              Your bag is empty
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="mt-5 text-sm leading-6 text-coffee">
              Add something to your bag before continuing to checkout.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <Link
              to="/shop"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-coffee px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-deep-brown"
            >
              Shop bags
              <span className="text-base">→</span>
            </Link>
          </ScrollReveal>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream px-6 py-16 md:px-10 md:py-20 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div>
          <ScrollReveal delay={100}>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-camel md:text-xs">
              SwayD Checkout
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="mt-3 font-display text-5xl font-medium leading-none tracking-tight text-deep-brown md:text-6xl">
              Complete your order
            </h1>
          </ScrollReveal>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]"
        >

          {/* Customer details */}
          <div>

            <ScrollReveal delay={300}>
              <div className="py-8">

                <h2 className="font-display text-3xl font-medium text-deep-brown">
                  Delivery details
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div className="md:col-span-2">
                    <label className="text-xs uppercase tracking-[0.12em] text-coffee">
                      Full name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full rounded-md border border-beige bg-transparent px-4 py-3 text-sm text-deep-brown outline-none transition-colors focus:border-camel"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.12em] text-coffee">
                      Email
                    </label>

                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange} required
                      className="mt-2 w-full rounded-md border border-beige bg-transparent px-4 py-3 text-sm text-deep-brown outline-none transition-colors focus:border-camel"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.12em] text-coffee">
                      Phone
                    </label>

                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                      className="mt-2 w-full rounded-md border border-beige bg-transparent px-4 py-3 text-sm text-deep-brown outline-none transition-colors focus:border-camel"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-xs uppercase tracking-[0.12em] text-coffee">
                      Address
                    </label>

                    <input
                      type="text" name="address" value={formData.address} onChange={handleChange} required
                      className="mt-2 w-full rounded-md border border-beige bg-transparent px-4 py-3 text-sm text-deep-brown outline-none transition-colors focus:border-camel"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.12em] text-coffee">
                      City
                    </label>

                    <input
                      type="text" name="city" value={formData.city} onChange={handleChange} required
                      className="mt-2 w-full rounded-md border border-beige bg-transparent px-4 py-3 text-sm text-deep-brown outline-none transition-colors focus:border-camel"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.12em] text-coffee">
                      State
                    </label>

                    <input
                      type="text" name="state" value={formData.state} onChange={handleChange} required
                      className="mt-2 w-full rounded-md border border-beige bg-transparent px-4 py-3 text-sm text-deep-brown outline-none transition-colors focus:border-camel"
                    />
                  </div>

                </div>

              </div>
            </ScrollReveal>

            {/* Demo payment notice */}
            <ScrollReveal delay={400}>
              <div className="rounded-sm bg-beige/40 p-5">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-deep-brown">
                  Demo checkout
                </p>

                <p className="mt-2 text-xs leading-5 text-coffee/75">
                  This is a frontend demo. No real payment will be processed.
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* Order summary */}
          <ScrollReveal delay={350}>
            <aside className="h-fit rounded-sm bg-beige/40 p-6 md:p-8">

              <h2 className="font-display text-3xl font-medium text-deep-brown">
                Your order
              </h2>

              <div className="mt-8 space-y-5">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4"
                  >
                    <div>
                      <p className="text-sm text-deep-brown">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-coffee/70">
                        Qty {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm text-deep-brown">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-beige pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-coffee">
                    Subtotal
                  </span>

                  <span className="font-medium text-deep-brown">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-between rounded-md bg-coffee px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-deep-brown"
              >
                <span>Place order</span>
                <span className="text-base">→</span>
              </button>

            </aside>
          </ScrollReveal>

        </form>
      </div>
    </main>
  );
}

export default Checkout;
