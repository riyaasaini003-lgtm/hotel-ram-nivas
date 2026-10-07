import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | Hotel Ram Nivas Udaipur",
  description:
    "Find Hotel Ram Nivas at 23, Near Paras Road, Sector 11, Hiran Magri, Udaipur, Rajasthan 313001. Get directions and contact the hotel.",
};

const ADDRESS =
  "23, Near Paras Road, Sector 11, Hiran Magri, Udaipur, Rajasthan 313001";

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=Hotel+Ram+Nivas%2C+23+Near+Paras+Road%2C+Sector+11%2C+Hiran+Magri%2C+Udaipur%2C+Rajasthan+313001";

const MAP_URL =
  "https://www.google.com/maps?q=Hotel+Ram+Nivas,+23+Near+Paras+Road,+Sector+11,+Hiran+Magri,+Udaipur,+Rajasthan+313001&output=embed";

export default function LocationPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-[#111a17]">
      {/* HERO */}
      <section className="bg-[#07120f] px-5 pb-20 pt-36 text-white">
        <div className="mx-auto max-w-7xl lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e5bd58]">
            Our Location
          </p>

          <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Well connected to{" "}
            <span className="text-[#e5bd58]">Udaipur.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Hotel Ram Nivas is conveniently located in Hiran Magri, Udaipur,
            making it easy to reach the city&apos;s major attractions,
            railway station and key roads.
          </p>
        </div>
      </section>

      {/* LOCATION CONTENT */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          {/* ADDRESS */}
          <div className="rounded-3xl bg-white p-7 shadow-sm sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ad8120]">
              Hotel Ram Nivas
            </p>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Find us in Hiran Magri
            </h2>

            <div className="mt-8 border-t border-slate-200 pt-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Address
              </p>

              <p className="mt-3 text-lg leading-8 text-slate-700">
                {ADDRESS}
              </p>
            </div>

            <div className="mt-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Phone
              </p>

              <a
                href="tel:+919782187090"
                className="mt-2 inline-block text-lg font-semibold text-[#87620e] hover:underline"
              >
                +91 97821 87090
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#e5bd58] px-6 py-4 font-semibold text-[#111]"
              >
                Get Directions
              </a>

              <a
                href="tel:+919782187090"
                className="inline-flex items-center justify-center rounded-xl border border-[#07120f] px-6 py-4 font-semibold text-[#07120f]"
              >
                Call Hotel
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <iframe
              src={MAP_URL}
              title="Hotel Ram Nivas Udaipur location map"
              className="h-[420px] w-full border-0 sm:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* LOCATION ADVANTAGE */}
      <section className="bg-[#07120f] py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e5bd58]">
            Convenient Base
          </p>

          <h2 className="mt-3 max-w-3xl font-serif text-4xl sm:text-5xl">
            Stay close to the city while keeping your journey simple.
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
              <h3 className="font-serif text-2xl">Hiran Magri</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                Located in Sector 11, with convenient access to the main road
                network.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
              <h3 className="font-serif text-2xl">Near Paras Road</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                An accessible location for travellers arriving by road or
                exploring Udaipur.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
              <h3 className="font-serif text-2xl">Easy City Access</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                A practical base for sightseeing, business trips and short
                stays in Udaipur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f6f0] px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#e8dfc9] p-8 text-center sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#87620e]">
            Plan Your Stay
          </p>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Ready to stay in Udaipur?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-700">
            Call us or reach out on WhatsApp for current room availability,
            rates and booking assistance.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="tel:+919782187090"
              className="rounded-xl bg-[#07120f] px-6 py-4 font-semibold text-white"
            >
              +91 97821 87090
            </a>

            <a
              href="https://wa.me/917982187090?text=Hi%20Hotel%20Ram%20Nivas%2C%20I%20would%20like%20to%20check%20room%20availability."
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#1f7a43] px-6 py-4 font-semibold text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}