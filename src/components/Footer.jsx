import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

function Footer() {
  return (
    <footer className="bg-deep-brown px-6 py-14 text-cream md:px-10 md:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] md:gap-10">

          {/* Brand */}
          <ScrollReveal delay={100}>
            <div>
              <p className="font-display text-3xl font-medium tracking-tight">
                SwayD
              </p>

              <p className="mt-4 max-w-sm text-sm leading-6 text-beige/75">
                Contemporary bags designed with intention, warmth, and everyday
                movement in mind.
              </p>
            </div>
          </ScrollReveal>

          {/* Navigate */}
          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-camel">
                Navigate
              </h3>

              <nav className="mt-5 flex flex-col gap-3 text-sm text-beige/80">
                <Link
                  to="/"
                  className="transition-colors hover:text-cream"
                >
                  Home
                </Link>

                <Link
                  to="/shop"
                  className="transition-colors hover:text-cream"
                >
                  Shop
                </Link>

                <Link
                  to="/#story"
                  className="transition-colors hover:text-cream"
                >
                  Our Story
                </Link>
              </nav>
            </div>
          </ScrollReveal>

          {/* Shop */}
          <ScrollReveal delay={300}>
            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-camel">
                Shop
              </h3>

              <nav className="mt-5 flex flex-col gap-3 text-sm text-beige/80">
                <Link
                  to="/shop"
                  className="transition-colors hover:text-cream"
                >
                  All Bags
                </Link>

                <Link
                  to="/cart"
                  className="transition-colors hover:text-cream"
                >
                  Cart
                </Link>

                <Link
                  to="/checkout"
                  className="transition-colors hover:text-cream"
                >
                  Checkout
                </Link>
              </nav>
            </div>
          </ScrollReveal>

        </div>

          {/* Copyright */}
          <ScrollReveal delay={400}>
            <div className="mt-14 border-t border-cream/15 pt-6">
              <p className="text-xs text-beige/85">
                © {new Date().getFullYear()} SwayD. All rights reserved.
              </p>
            </div>
          </ScrollReveal>

      </div>
    </footer>
  );
}

export default Footer;

