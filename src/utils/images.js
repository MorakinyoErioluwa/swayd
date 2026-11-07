const CREAM_PLACEHOLDER =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
      <rect width="800" height="1000" fill="#f7f2ea"/>
      <text x="400" y="510" text-anchor="middle" fill="#b58b62" font-family="Georgia, serif" font-size="48" letter-spacing="12">SwayD</text>
    </svg>`
  );

export function handleImageError(event) {
  if (event.currentTarget.dataset.fallbackApplied) return;

  event.currentTarget.dataset.fallbackApplied = "true";
  event.currentTarget.src = CREAM_PLACEHOLDER;
}
