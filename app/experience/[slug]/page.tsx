import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/ui/Navbar";
import { experience } from "@/data/experience";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const item = experience.find((e) => e.slug === slug);

  return {
    title: item
      ? `${item.company} – ${item.title} | Amine Rhammi`
      : "Experience | Amine Rhammi",
    description: item?.summary ?? "Experience details",
  };
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = experience.find((e) => e.slug === slug);
  if (!item) return notFound();
  const galleryImages = item.gallery?.slice(0, 3) ?? [];
  const backdropImage = galleryImages[0]?.src ?? item.heroImage;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50">
      {backdropImage ? (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src={backdropImage}
            alt="Experience backdrop"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-white/80" />
        </div>
      ) : null}

      <Navbar />

      {/* HERO banner */}
      <section className="relative h-[320px] w-full overflow-hidden border-b">
        {item.heroImage ? (
          <Image
            src={item.heroImage}
            alt={`${item.company} hero`}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        )}

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-medium tracking-wide text-white/80">
            Mechanical Engineering Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {item.company}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-white/85 sm:text-lg">
            {item.title} • {item.dates}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-medium underline underline-offset-4 text-gray-700 hover:text-gray-900"
          >
            ← Back
          </Link>

          <a
            href={item.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4 text-gray-700 hover:text-gray-900"
          >
            Company website →
          </a>
        </div>

        {/* Overview */}
        <div className="mt-8 rounded-3xl border bg-white p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="shrink-0 rounded-2xl border bg-white p-3">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={120}
                  height={120}
                  className="h-14 w-24 object-contain"
                />
              </div>

              <div>
                <p className="text-sm text-gray-500">{item.location}</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  Overview
                </h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-gray-700">
                  {item.summary}
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-500">{item.dates}</div>
          </div>
        </div>

        <div className="mt-10 grid gap-8">
          <section className="rounded-3xl border bg-white p-8">
            <h3 className="text-xl font-semibold">Highlights</h3>
            <ul className="mt-4 space-y-2 text-gray-800">
              {item.highlights.map((h, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-8">
            <h3 className="text-xl font-semibold">What I did</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              {item.whatIDid.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-8">
            <h3 className="text-xl font-semibold">Outcomes</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              {item.outcomes.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-8">
            <h3 className="text-xl font-semibold">Top skills utilized</h3>
            <ul className="mt-4 space-y-2 text-gray-800">
              {item.topSkills.map((skill, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border bg-white p-8">
            <h3 className="text-xl font-semibold">Tools</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border bg-slate-50 px-3 py-1 text-sm text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
