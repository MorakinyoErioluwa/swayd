import { Link } from "react-router-dom";

function Homer() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[80vh] bg-[var(--color-cream)]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          
          <div className="grid items-center gap-12 md:grid-cols-2">
            
            {/* Hero Content */}
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-camel)] mb-5">
                Contemporary bags
              </p>

              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--color-deep-brown)] leading-tight">
                Bags made to move with you.
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-[var(--color-coffee)]">
                Thoughtfully designed bags that bring together everyday
                function, timeless style, and a touch of warmth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-7 py-3 bg-[var(--color-deep-brown)] text-[var(--color-cream)] text-sm font-medium hover:bg-[var(--color-coffee)] transition-colors"
                >
                  Shop the collection
                </Link>

                <a
                  href="#story"
                  className="inline-flex items-center justify-center px-7 py-3 border border-[var(--color-deep-brown)] text-[var(--color-deep-brown)] text-sm font-medium hover:bg-[var(--color-beige)] transition-colors"
                >
                  Our story
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="min-h-[400px] bg-[var(--color-beige)] flex items-center justify-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-coffee)]">
                <img src="src/assets/image.png" className=" h-[50%] "></img>
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Homer;