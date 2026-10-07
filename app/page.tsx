import Link from "next/link";

const PHONE = "917982187090";

const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(
  "Hi Hotel Ram Nivas, I would like to check room availability."
)}`;

function Icon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    phone: (
      <>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.6a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9z" />
      </>
    ),

    whatsapp: (
      <>
        <path d="M20.5 3.5A10 10 0 0 0 3.6 15.3L2 22l6.8-1.8A10 10 0 1 0 20.5 3.5Z" />
        <path d="M8.5 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c.8 1.4 1.9 2.5 3.3 3.3l.7-.6c.2-.2.4-.2.7-.1l1.9.8c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.5.3-1.1.5-1.7.4-2.2-.3-4.3-1.4-6-3.1-1.7-1.7-2.8-3.8-3.1-6-.1-.6.1-1.2.4-1.7Z" />
      </>
    ),

    calendar: (
      <>
        <rect x="3" y="4.5" width="18" height="17" rx="2" />
        <path d="M16 2v5M8 2v5M3 10h18" />
      </>
    ),

    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    wifi: (
      <>
        <path d="M5 12.5a11 11 0 0 1 14 0" />
        <path d="M8 15.5a6.5 6.5 0 0 1 8 0" />
        <path d="M11 18.5a2 2 0 0 1 2 0" />
      </>
    ),

    car: (
      <>
        <path d="M5 17h14l1-5-2-5H6l-2 5 1 5Z" />
        <path d="M4 12h16M7 17v2M17 17v2" />
        <circle cx="7" cy="16" r="1" />
        <circle cx="17" cy="16" r="1" />
      </>
    ),

    food: (
      <>
        <path d="M7 2v8M4 2v8a3 3 0 0 0 6 0V2M7 13v9M17 2v20M17 2c-2.5 1.8-2.5 6 0 7" />
      </>
    ),
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

const rooms = [
  {
    title: "Standard Room",
    text: "Ideal for solo travellers and couples.",
    image: "/images/rooms/hotel-room-1.png",
  },
  {
    title: "Deluxe Room",
    text: "More space, more comfort.",
    image: "/images/rooms/hotel-room-2.png",
  },
  {
    title: "Family Room",
    text: "Perfect for families and groups.",
    image: "/images/rooms/hotel-room-3.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-[#111a17]">

      {/* HEADER */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07120f]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 lg:px-8">

          <Link href="/" className="group flex items-center">
            <img
              src="/images/logo/ram-nivas-logo-transparent.png"
              alt="Hotel Ram Nivas Udaipur"
              className="h-12 w-auto max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-14"
            />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-white/90 md:flex">
  <a href="#" className="hover:text-[#e5bd58]">
    Home
  </a>

  <a href="#rooms" className="hover:text-[#e5bd58]">
    Rooms
  </a>

  <a href="#amenities" className="hover:text-[#e5bd58]">
    Amenities
  </a>

  <Link href="/location" className="hover:text-[#e5bd58]">
    Location
  </Link>

  <a href="#gallery" className="hover:text-[#e5bd58]">
    Gallery
  </a>

  <a href="#about" className="hover:text-[#e5bd58]">
    About
  </a>

  <Link href="/blog" className="hover:text-[#e5bd58]">
    Blog
  </Link>

  <a href="#contact" className="hover:text-[#e5bd58]">
    Contact
  </a>
</nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:+${PHONE}`}
              className="hidden rounded-full border border-[#d8b85a]/60 px-4 py-2.5 text-sm text-white sm:block"
            >
              +91 97821 87090
            </a>

            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#e5bd58] px-5 py-2.5 text-sm font-semibold text-[#111]"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative isolate min-h-[820px] overflow-visible pt-[78px]">

        {/* Hero photography */}
        <img
          src="/images/hero/hotel-ram-nivas-front.png"
          alt="Hotel Ram Nivas Udaipur"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Premium cinematic overlays */}
        <div className="absolute inset-0 -z-20 bg-[#06100d]/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#030807]/95 via-[#06100d]/65 to-[#06100d]/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06100d]/95 via-[#06100d]/20 to-black/20" />

        {/* Subtle vignette */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_45%,transparent_0%,rgba(0,0,0,.08)_45%,rgba(0,0,0,.38)_100%)]" />

        <div className="mx-auto flex min-h-[740px] max-w-7xl items-center px-5 py-20 lg:px-8">

          <div className="max-w-3xl pt-4 text-white sm:pt-8">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e5bd58]/40 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#f4d47c] shadow-lg backdrop-blur-md sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e5bd58] shadow-[0_0_12px_#e5bd58]" />
              Comfortable Stay in Udaipur
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[.92] tracking-[-.02em] drop-shadow-2xl sm:text-7xl lg:text-[86px]">
              Hotel{" "}
              <span className="text-[#e5bd58]">
                Ram Nivas
              </span>
            </h1>

            <p className="mt-6 text-xl font-medium tracking-tight text-white drop-shadow-lg sm:text-2xl">
              Clean Rooms. Great Location. Easy Stay.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-lg">
              A comfortable and affordable stay in Hiran Magri, Udaipur —
              ideal for families, business travellers and short city visits.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#availability"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e5bd58] px-6 py-4 font-semibold text-[#101513] shadow-[0_12px_35px_rgba(229,189,88,.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0ca68]"
              >
                <Icon name="calendar" />
                Check Availability
              </a>

              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/45 bg-black/20 px-6 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                <Icon name="whatsapp" />
                Chat on WhatsApp
              </a>

            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-6 sm:mt-12 sm:grid-cols-4">

              <div>
                <div className="text-[#e5bd58]">
                  <Icon name="pin" />
                </div>
                <p className="mt-2 text-sm font-semibold">Prime Location</p>
                <p className="text-xs text-white/60">Hiran Magri, Udaipur</p>
              </div>

              <div>
                <div className="text-[#e5bd58]">
                  <Icon name="wifi" />
                </div>
                <p className="mt-2 text-sm font-semibold">Free Wi-Fi</p>
                <p className="text-xs text-white/60">Stay Connected</p>
              </div>

              <div>
                <div className="text-[#e5bd58]">
                  <Icon name="car" />
                </div>
                <p className="mt-2 text-sm font-semibold">Parking Facility</p>
                <p className="text-xs text-white/60">On-site Parking</p>
              </div>

              <div>
                <div className="text-[#e5bd58]">
                  <Icon name="food" />
                </div>
                <p className="mt-2 text-sm font-semibold">Restaurant</p>
                <p className="text-xs text-white/60">Food & Room Service</p>
              </div>

            </div>

          </div>
        </div>

        {/* AVAILABILITY BAR */}
        <div
          id="availability"
          className="absolute bottom-0 left-1/2 z-20 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 translate-y-1/2 rounded-2xl border border-black/5 bg-white/95 p-3 shadow-[0_25px_70px_rgba(0,0,0,.22)] backdrop-blur-xl sm:p-4"
        >
          <div className="grid gap-3 sm:grid-cols-4">

            <label className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Check-in
              </span>
              <input
                type="date"
                className="mt-1 w-full bg-transparent text-sm outline-none"
              />
            </label>

            <label className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Check-out
              </span>
              <input
                type="date"
                className="mt-1 w-full bg-transparent text-sm outline-none"
              />
            </label>

            <label className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                Guests
              </span>
              <select className="mt-1 w-full bg-transparent text-sm outline-none">
                <option>2 Adults</option>
                <option>1 Adult</option>
                <option>3 Adults</option>
                <option>4 Adults</option>
                <option>5 Adults</option>
                <option>6 Adults</option>
              </select>
            </label>

            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#e5bd58] px-5 py-4 font-semibold text-[#101513] shadow-sm transition duration-300 hover:bg-[#f0ca68]"
            >
              <Icon name="calendar" />
              Check Availability
            </a>

          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section
        id="rooms"
        className="mx-auto max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pt-40"
      >

        <div className="grid gap-10 lg:grid-cols-[.8fr_1.5fr] lg:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ad8120]">
              Our Rooms
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Simple & Comfortable Rooms for Every Traveller
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Well-maintained rooms with all essential amenities for a
              comfortable stay in Udaipur.
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block rounded-xl border border-[#d2a83f] px-5 py-3 text-sm font-semibold"
            >
              View All Rooms →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">

            {rooms.map((room) => (
              <article
                key={room.title}
                className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="aspect-[4/3] overflow-hidden bg-slate-200">

                  <img
                    src={room.image}
                    alt={`${room.title} at Hotel Ram Nivas Udaipur`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                </div>

                <div className="p-5">

                  <h3 className="font-serif text-2xl">
                    {room.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {room.text}
                  </p>

                  <a
                    href={WA}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-[#87620e]"
                  >
                    Enquire now →
                  </a>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section
        id="amenities"
        className="bg-[#07120f] py-20 text-white"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#e5bd58]">
            Stay Easy
          </p>

          <h2 className="mt-3 max-w-2xl font-serif text-4xl sm:text-5xl">
            Everything you need for a comfortable stay.
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">

            {[
              "Free Wi-Fi",
              "Parking",
              "Room Service",
              "24×7 Assistance",
              "Family Friendly",
              "Prime Location",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/[.04] p-5 text-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#f8f6f0] py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="max-w-3xl">

            <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ad8120]">
              About Hotel Ram Nivas
            </p>

            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              A simple, comfortable base for your Udaipur stay.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Hotel Ram Nivas is located in Hiran Magri, Udaipur and offers
              comfortable rooms with the essential facilities needed for
              families, couples, business travellers and short city visits.
            </p>

          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="bg-white py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#ad8120]">
            Gallery
          </p>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Explore Hotel Ram Nivas
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">

            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/property/property-1.jpg"
                alt="Hotel Ram Nivas property"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/dining/dining-1.jpg"
                alt="Dining at Hotel Ram Nivas"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src="/images/destinations/udaipur-1.jpg"
                alt="Udaipur"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#f8f6f0] py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="rounded-3xl bg-[#e8dfc9] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between">

            <div>

              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#87620e]">
                Plan Your Stay
              </p>

              <h2 className="mt-2 font-serif text-4xl">
                Looking for a comfortable stay in Udaipur?
              </h2>

              <p className="mt-3 text-slate-700">
                Call or WhatsApp us for current room availability, rates and
                booking assistance.
              </p>

            </div>

            <div className="mt-7 flex gap-3 lg:mt-0">

              <a
                href={`tel:+${PHONE}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#07120f] px-5 py-4 font-semibold text-white"
              >
                <Icon name="phone" />
                Call
              </a>

              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#1f7a43] px-5 py-4 font-semibold text-white"
              >
                <Icon name="whatsapp" />
                WhatsApp
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07120f] py-12 text-white/70">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between lg:px-8">

          <div>

            <div className="font-serif text-2xl text-white">
              Hotel Ram Nivas
            </div>

            <p className="mt-2 max-w-md text-sm leading-6">
              Affordable and comfortable hotel stay in Hiran Magri,
              Udaipur, Rajasthan.
            </p>

            <p className="mt-3 text-sm">
              Hiran Magri, Udaipur, Rajasthan
            </p>

          </div>

          <div className="text-sm">

            <div className="flex flex-wrap gap-5">

              <Link href="/rooms">
                Rooms
              </Link>

              <Link href="/amenities">
                Amenities
              </Link>

              <Link href="/location">
                Location
              </Link>

              <Link href="/contact">
                Contact
              </Link>

            </div>

            <p className="mt-5 text-xs text-white/40">
              © 2026 Hotel Ram Nivas. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

      {/* MOBILE BOTTOM BAR */}
      <div className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-1rem)] max-w-md -translate-x-1/2 gap-2 rounded-2xl border border-white/10 bg-[#07120f]/95 p-2 shadow-2xl backdrop-blur md:hidden">

        <a
          href={`tel:+${PHONE}`}
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-white/10 py-3 text-xs font-semibold text-white"
        >
          <Icon name="phone" />
          Call
        </a>

        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#1f7a43] py-3 text-xs font-semibold text-white"
        >
          <Icon name="whatsapp" />
          WhatsApp
        </a>

        <a
          href="#availability"
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-[#e5bd58] py-3 text-xs font-semibold text-[#111]"
        >
          <Icon name="calendar" />
          Book
        </a>

      </div>

    </main>
  );
}