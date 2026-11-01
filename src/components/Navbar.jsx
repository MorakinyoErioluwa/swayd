import { useState, useContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ScrollReveal from "./ScrollReveal";

const desktopLinkClass = ({ isActive }) =>
  `text-sm transition-colors ${
    isActive ? "text-camel" : "text-coffee hover:text-camel"
  }`;

const mobileLinkClass = (isActive) =>
  `font-display text-4xl font-medium tracking-tight transition-transform duration-300 hover:translate-x-2 ${
    isActive ? "text-camel" : "text-deep-brown"
  }`;

function CartIcon() {
  return (
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
  );
}

function CartLink({ totalItems, onClick }) {
  return (
    <Link
      to="/cart"
      onClick={onClick}
      className="relative inline-flex items-center text-deep-brown transition-colors hover:text-camel"
      aria-label="Shopping cart"
    >
      <CartIcon />

      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-deep-brown text-[10px] text-cream">
          {totalItems}
        </span>
      )}
    </Link>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleMouseDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 border-b border-beige/60 bg-cream"
    >

      {/* Main navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">

        {/* Logo */}
        <ScrollReveal delay={0}>
          <Link
            to="/"
            onClick={closeMenu}
            className="font-display text-3xl font-medium tracking-tight text-deep-brown"
          >
            SwayD
          </Link>
        </ScrollReveal>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 md:flex">

          <ScrollReveal delay={100}>
            <NavLink
              to="/"
              end
              className={desktopLinkClass}
            >
              Home
            </NavLink>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <NavLink
              to="/shop"
              className={desktopLinkClass}
            >
              Shop
            </NavLink>
          </ScrollReveal>

          {/* Cart */}
          <ScrollReveal delay={200}>
            <CartLink totalItems={totalItems} onClick={closeMenu} />
          </ScrollReveal>

        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile cart */}
          <ScrollReveal delay={100}>
            <CartLink totalItems={totalItems} onClick={closeMenu} />
          </ScrollReveal>

          {/* Menu button */}
          <ScrollReveal delay={150}>
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center text-deep-brown"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </ScrollReveal>

        </div>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`absolute left-0 top-full w-full border-b border-beige bg-cream shadow-sm md:hidden transition-all duration-300 ease-out ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="px-6 py-10">

          <div className="flex flex-col gap-5">

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) => mobileLinkClass(isActive)}
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              onClick={closeMenu}
              className={({ isActive }) => mobileLinkClass(isActive)}
            >
              Shop
            </NavLink>

            <NavLink
              to="/cart"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center gap-3 ${mobileLinkClass(isActive)}`
              }
            >
              <span>Cart</span>

              {totalItems > 0 && (
                <span className="font-sans text-sm text-camel">
                  {totalItems}
                </span>
              )}
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
