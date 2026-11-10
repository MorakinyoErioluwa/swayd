# SwayD

An e-commerce storefront for a suede handbag brand. 

**Live site:** [https://swayyd.vercel.app]

![SwayD on desktop](public/Screenshots/swayd_desktop.jpg)

## Features

- Home page with a hero, featured pieces, categories, brand story and a call to action
- Shop page with search, category filter and price sorting
- Product pages with a quantity selector and in-stock / out-of-stock states
- Cart that persists between visits (localStorage) and a checkout flow
- Prices in naira (NGN), formatted with `Intl.NumberFormat`
- Sticky navbar with a full-screen mobile menu (closes on Escape, link tap and outside tap)
- Visible keyboard focus styles and checked text contrast

## Built with

- React 19
- Vite
- Tailwind CSS v4 (design tokens defined in `@theme`)
- react-router-dom

## Design

A warm suede palette with two typefaces: Cormorant Garamond for display text and DM Sans for the interface.

| Token | Hex |
|---|---|
| coffee | `#3b2923` |
| cream | `#f7f2ea` |
| beige | `#d8c7b0` |
| camel | `#b58b62` |
| deep-brown | `#241914` |

## Project structure

```
src/
  components/   Navbar, Hero, Categories, FeaturedProducts, ProductCard,
                BrandStory, CTA, Footer, ScrollReveal
  pages/        Home, Shop, ProductDetails, Cart, Checkout
  context/      CartContext (cart state and persistence)
  services/     productService (reads the local catalog)
  data/         products.js (12 products)
public/
  images/products/   product photos
```

## Run it locally

```bash
git clone [https]
cd swayd
npm install
npm run dev
```

Other scripts: `npm run build` for a production build and `npm run lint` to lint.

## Notes

- The product catalog is local data in `src/data/products.js`. The service layer returns promises, so it can be pointed at a real API later without changing the components.



