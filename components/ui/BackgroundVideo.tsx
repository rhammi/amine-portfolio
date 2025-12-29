export default function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Light overlay so text stays readable (reduce if you want more video) */}
      <div className="absolute inset-0 bg-black/35" />
    </div>
  );
}
