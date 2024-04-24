export default function LastHero() {
  return (
    <div
      className="hero py-4"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h2 className="mb-5 text-5xl font-bold">Hello there</h2>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
}
