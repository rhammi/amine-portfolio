export default function HeroHeader() {
  return (
    <section className="relative h-[520px] overflow-hidden sm:h-[620px]">
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
        <div className="flex flex-col items-center gap-3 px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/85">
            Mechanical Engineering Portfolio
          </p>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            AMINE RHAMMI
          </h1>

          <img
            src="/logos/moi.png"
            alt="Portrait of Amine Rhammi"
            className="mx-auto mt-6 h-36 w-36 rounded-full border-4 border-white/70 object-cover sm:h-56 sm:w-56"
          />
        </div>
      </div>

    </section>
  );
}
