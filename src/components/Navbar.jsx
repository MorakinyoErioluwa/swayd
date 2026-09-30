import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ScrollReveal from "./ScrollReveal";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative z-50 bg-[var(--color-cream)]">

      {/* Main navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">

        {/* Logo */}
        <ScrollReveal delay={0}>
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-semibold tracking-tight text-[var(--color-deep-brown)]"
          >
            SwayD
          </Link>
        </ScrollReveal>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">

          <ScrollReveal delay={100}>
            <Link
              to="/"
              className="text-sm text-[var(--color-coffee)] transition-colors hover:text-[var(--color-camel)]"
            >
              Home
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <Link
              to="/shop"
              className="text-sm text-[var(--color-coffee)] transition-colors hover:text-[var(--color-camel)]"
            >
              Shop
            </Link>
          </ScrollReveal>

          {/* Desktop cart */}
          <ScrollReveal delay={200}>
            <Link
              to="/cart"
              className="relative inline-flex items-center text-[var(--color-deep-brown)]"
              aria-label="Shopping cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 15.75a2.25 2.25 0 0 0 2.18 1.8h7.14a2.25 2.25 0 0 0 2.18-1.8l1.644-6.578H5.106m0 0L4.723 3.835M9 20.25h.008v.008H9v-.008Zm6 0h.008v.008H6v-.008Z"
                />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-deep-brown)] text-[10px] text-[var(--color-cream)]">
                  {totalItems}
                </span>
              )}
            </Link>
          </ScrollReveal>

        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-5 md:hidden">

          {/* Mobile cart */}
          <ScrollReveal delay={100}>
            <Link
              to="/cart"
              className="relative inline-flex items-center text-[var(--color-deep-brown)]"
              aria-label="Shopping cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 15.75a2.25 2.25 0 0 0 2.18 1.8h7.14a2.25 2.25 0 0 0 2.18-1.8l1.644-6.578H5.106m0 0L4.723 3.835M9 20.25h.008v.008H9v-.008Zm6 0h.008v.008H6v-.008Z"
                />
              </svg>

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-deep-brown)] text-[10px] text-[var(--color-cream)]">
                  {totalItems}
                </span>
              )}
            </Link>
          </ScrollReveal>

          {/* Menu button */}
          <ScrollReveal delay={150}>
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="relative z-50 text-2xl text-[var(--color-deep-brown)]"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </ScrollReveal>

        </div>
      </div>

      {/* Mobile navigation panel */}
      <div
        className={`absolute left-0 top-full w-full origin-left bg-[var(--color-cream)] md:hidden ${
          isMenuOpen
            ? "pointer-events-auto scale-x-100"
            : "pointer-events-none scale-x-0"
        } transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
      >
        <div className="px-6 py-10">

          <div className="flex flex-col gap-5">

            <Link
              to="/"
              onClick={closeMenu}
              className="font-display text-4xl font-medium tracking-tight text-[var(--color-deep-brown)] transition-transform duration-300 hover:translate-x-2"
            >
              Home
            </Link>

            <Link
              to="/shop"
              onClick={closeMenu}
              className="font-display text-4xl font-medium tracking-tight text-[var(--color-deep-brown)] transition-transform duration-300 hover:translate-x-2"
            >
              Shop
            </Link>

            <Link
              to="/cart"
              onClick={closeMenu}
              className="flex items-center gap-3 font-display text-4xl font-medium tracking-tight text-[var(--color-deep-brown)] transition-transform duration-300 hover:translate-x-2"
            >
              <span>Cart</span>

              {totalItems > 0 && (
                <span className="font-sans text-sm text-[var(--color-camel)]">
                  {totalItems}
                </span>
              )}
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;