import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Udaipur Travel Blog | Hotel Ram Nivas",
  description:
    "Explore Udaipur travel tips, places to visit, local experiences and useful travel guides from Hotel Ram Nivas.",
};

const posts = [
  {
    category: "Udaipur Travel",
    title: "10 Places to Visit in Udaipur on Your First Trip",
    excerpt:
      "From City Palace and Lake Pichola to quieter local experiences, discover some of the places worth adding to your Udaipur itinerary.",
    date: "October 2026",
  },
  {
    category: "Travel Guide",
    title: "A Simple Guide to Staying in Udaipur",
    excerpt:
      "Planning a short trip to the City of Lakes? Here is how to think about location, transport, sightseeing and choosing a comfortable stay.",
    date: "October 2026",
  },
  {
    category: "Local Guide",
    title: "Things to Know Before Visiting Udaipur",
    excerpt:
      "A practical guide for first-time visitors covering local travel, sightseeing, food and making the most of a short Udaipur stay.",
    date: "October 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-[#111a17]">
      {/* HERO */}
      <section className="bg-[#07120f] px-5 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e5bd58]">
            Hotel Ram Nivas Journal
          </p>

          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Discover{" "}
            <span className="text-[#e5bd58]">Udaipur.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Travel guides, local recommendations and useful ideas to help you
            experience Udaipur better.
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="group rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#ad8120]">
                  {post.category}
                </p>

                <h2 className="mt-4 font-serif text-3xl leading-tight">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
                  <span className="text-xs text-slate-400">{post.date}</span>

                  <span className="text-sm font-semibold text-[#87620e] transition group-hover:translate-x-1">
                    Read Guide →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ad8120]">
            Explore Udaipur
          </p>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Your stay is only part of the journey.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Udaipur is a city of lakes, palaces, old streets and memorable
            experiences. Through the Hotel Ram Nivas Journal, we&apos;ll share
            practical travel information to help you plan your visit.
          </p>

          <Link
            href="/location"
            className="mt-8 inline-flex rounded-xl bg-[#07120f] px-6 py-4 font-semibold text-white"
          >
            Find Hotel Ram Nivas
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#07120f] px-5 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e5bd58]">
            Stay With Us
          </p>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Planning your Udaipur trip?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/60">
            Get in touch with Hotel Ram Nivas for room availability, rates and
            booking assistance.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919782187090"
              className="rounded-xl bg-[#e5bd58] px-6 py-4 font-semibold text-[#111]"
            >
              Call Hotel
            </a>

            <a
              href="https://wa.me/917982187090?text=Hi%20Hotel%20Ram%20Nivas%2C%20I%20would%20like%20to%20check%20room%20availability."
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-4 font-semibold text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}