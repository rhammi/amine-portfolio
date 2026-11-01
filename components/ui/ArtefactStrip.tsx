import Image from "next/image";
import Link from "next/link";

const artefacts = [
  { image: "/projects/winder/winder-simulink-model.png", alt: "Original Simulink model with coupled motor and wire-tension dynamics", label: "01 / Model the system", title: "From motor dynamics to wire tension.", detail: "The original wire-winder model connects the electrical drive, spool inertia and tension loop.", href: "/projects/wire-winder-digital-twin", source: "GMC1052 · Team report extract", fit: "contain" },
  { image: "/projects/gei1087/pick-place-grafcet.png", alt: "Original FESTO GRAFCET with revised transfer and stop conditions highlighted", label: "02 / Define the sequence", title: "Make every transition explainable.", detail: "The GRAFCET exposes the conditions behind station transfer, automatic continuation and stop.", href: "/projects/modular-production-cell-automation", source: "GEI1087 · Team report extract", fit: "contain" },
  { image: "/projects/gei1049/electronics-prototype.jpg", alt: "STM32 and ESP32-S3 controllers connected on a breadboard during integration", label: "03 / Integrate the hardware", title: "Put the interface on the bench.", detail: "The controller prototype makes communication and state feedback visible before vehicle testing.", href: "/projects/tracked-vehicle-dual-mcu-control", source: "GEI1049 · Project photograph", fit: "cover" },
];

export default function ArtefactStrip() {
  return (
    <section className="border-t border-slate-300 py-10 sm:py-12" aria-labelledby="artefacts-title">
      <div className="mb-7 max-w-2xl">
        <p className="journal-label">Inside the project notebook</p>
        <h2 id="artefacts-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The detail is part of the story.</h2>
        <p className="mt-4 leading-relaxed text-slate-600">Original report figures and prototype photographs. Open a project to follow the reasoning and inspect the full-size evidence.</p>
      </div>
      <div className="grid gap-7 md:grid-cols-3">
        {artefacts.map((item) => (
          <figure key={item.image} className="min-w-0">
            <Link href={item.href} className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-white" aria-label={`Explore: ${item.title}`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 90vw, 350px" className={`${item.fit === "contain" ? "object-contain p-4" : "object-cover object-[center_65%]"} transition-transform duration-500 group-hover:scale-[1.025]`} />
              <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#14243a] text-white">↗</span>
            </Link>
            <figcaption>
              <p className="mt-3 font-mono text-[10px] text-slate-500">{item.source}</p>
              <p className="journal-label mt-5">{item.label}</p>
              <h3 className="mt-2 text-lg font-bold"><Link href={item.href} className="hover:text-orange-800">{item.title}</Link></h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
