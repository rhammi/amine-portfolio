import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-extrabold text-slate-950">Amine Rhammi</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">Mechanical engineering graduate candidate working across reliability, mechanical systems and mechatronics. Based in Canada; open to Canadian and UK early-career opportunities.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
          <Link href="/lifesaving" className="hover:text-orange-700">Leadership & safety</Link>
          <a href="mailto:aminecana@hotmail.com" className="hover:text-orange-700">Email</a>
          <a href="https://www.linkedin.com/in/amine-rhammi-392376b9/" target="_blank" rel="noreferrer" className="hover:text-orange-700">LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-orange-700">CV</a>
        </div>
      </div>
      <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Amine Rhammi</div>
    </footer>
  );
}
