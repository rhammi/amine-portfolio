export default function HeroHeader() {
  return (
    <section className="relative h-[520px] sm:h-[600px] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Centered text */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6 flex flex-col items-center gap-3">
          <p className="text-sm font-semibold tracking-[0.22em] text-white/85 uppercase">
            Mechanical Engineering Portfolio
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            AMINE RHAMMI
          </h1>

          <div className="rounded-full border-4 border-white/80 bg-white/80 p-2 shadow-lg backdrop-blur">
            <img
              src="/logos/moi.png"
              alt="Amine Rhammi"
              className="h-48 w-48 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
