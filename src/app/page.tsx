import Image from 'next/image'
import Link from 'next/link'

const fleet = [
  {
    name: 'MV Tembaga Sea',
    type: 'Cargo Vessel',
    image: '/images/tembaga-sea_web-1024x680.jpg',
    alt: 'MV Tembaga Sea cargo vessel',
  },
]

const offices = [
  { city: 'Jakarta', role: 'Head Office' },
  { city: 'Surabaya', role: 'Branch Office' },
  { city: 'Timika', role: 'Branch Office' },
]

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative h-[90vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/tembaga-sea_web2-1024x712.jpg"
          alt="MV Tembaga Sea — PT. Amas Iscindo Utama"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/85 via-[#1e3a5f]/70 to-[#1e3a5f]/85" />

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[#cc0000] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            PT. Amas Iscindo Utama
          </p>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Commit To Your Needs
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl mb-8">
            Indonesian Shipping Company Since 1988
          </p>
          <Link
            href="/fleet"
            className="inline-block bg-[#cc0000] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-150"
          >
            View Our Fleet
          </Link>
        </div>
      </section>

      {/* ── Fleet ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f]">Our Fleet</h2>
            <div className="mt-3 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
          </div>

          <div className="flex justify-center">
            {fleet.map((vessel) => (
              <div
                key={vessel.name}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 group w-full max-w-md"
              >
                <div className="relative h-56">
                  <Image
                    src={vessel.image}
                    alt={vessel.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 border-t-4 border-[#cc0000]">
                  <h3 className="text-[#1e3a5f] font-bold text-lg">{vessel.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{vessel.type}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/fleet"
              className="inline-block border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white font-semibold px-8 py-3 rounded-md transition-colors duration-150"
            >
              Fleet Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#cc0000] uppercase tracking-widest text-sm font-semibold mb-3">
                About Us
              </p>
              <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug mb-5">
                Trusted Shipping Partner Since 1988
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                PT. Amas Iscindo Utama (AIU) is an Indonesian shipping company established in 1988.
                For over three decades we have delivered reliable cargo and container shipping
                services across the Indonesian archipelago, committed to meeting every client&apos;s
                needs with professionalism and integrity.
              </p>
              <Link
                href="/about"
                className="inline-block bg-[#cc0000] hover:bg-red-700 text-white font-semibold px-7 py-3 rounded-md transition-colors duration-150"
              >
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="bg-white/10 border border-white/20 rounded-xl p-6 text-center"
                >
                  <div className="text-[#cc0000] mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-lg">{office.city}</p>
                  <p className="text-gray-400 text-xs mt-1">{office.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
