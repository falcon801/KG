export function PortfolioBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="portfolio-bg absolute inset-0" />
      <div className="portfolio-grid absolute inset-0 opacity-45" />
      <div className="portfolio-vignette absolute inset-0" />
    </div>
  );
}
