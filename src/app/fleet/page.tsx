import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Fleet — PT. Amas Iscindo Utama',
  description:
    'Explore the fleet of PT. Amas Iscindo Utama: MV Flores Sea, MV Sawu Sea, and MV Tembaga Sea.',
}

const vessels = [
  {
    name: 'MV Flores Sea',
    type: 'Cargo Vessel',
    image: '/images/Flores-1-1024x683.jpg',
    alt: 'MV Flores Sea cargo vessel at sea',
    tradingArea: 'Java – Nusa Tenggara – Sulawesi',
    description:
      'MV Flores Sea is a general cargo vessel serving the central Indonesian corridor, connecting major ports across Java, Nusa Tenggara, and Sulawesi. Built for reliability and efficiency, she is a workhorse of the AIU fleet.',
    specs: [
      { label: 'Vessel Type', value: 'General Cargo' },
      { label: 'Trading Area', value: 'Java · NTT · Sulawesi' },
      { label: 'Flag', value: 'Indonesia' },
      { label: 'Operator', value: 'PT. Amas Iscindo Utama' },
    ],
  },
  {
    name: 'MV Sawu Sea',
    type: 'Container Vessel',
    image: '/images/Sawu-1-1024x683.jpg',
    alt: 'MV Sawu Sea container vessel',
    tradingArea: 'Surabaya – Nusa Tenggara Timur',
    description:
      'MV Sawu Sea operates as a container vessel on the Surabaya–NTT route, carrying containerised cargo to some of the more remote islands of eastern Indonesia. She plays a vital role in connecting these communities to national supply chains.',
    specs: [
      { label: 'Vessel Type', value: 'Container Vessel' },
      { label: 'Trading Area', value: 'Surabaya · NTT' },
      { label: 'Flag', value: 'Indonesia' },
      { label: 'Operator', value: 'PT. Amas Iscindo Utama' },
    ],
  },
  {
    name: 'MV Tembaga Sea',
    type: 'Cargo Vessel',
    image: '/images/tembaga-sea_web-1024x680.jpg',
    alt: 'MV Tembaga Sea cargo vessel',
    tradingArea: 'Surabaya – Timika – Papua',
    description:
      'MV Tembaga Sea is deployed on the strategic Surabaya–Timika–Papua corridor, supporting cargo logistics to Papua including supplies for industrial and community needs. Her name reflects the copper-rich region she proudly serves.',
    specs: [
      { label: 'Vessel Type', value: 'General Cargo' },
      { label: 'Trading Area', value: 'Surabaya · Timika · Papua' },
      { label: 'Flag', value: 'Indonesia' },
      { label: 'Operator', value: 'PT. Amas Iscindo Utama' },
    ],
  },
]

function SpecBadge({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">{label}</span>
      <span className="text-[#1e3a5f] text-sm font-semibold">{value}</span>
    </div>
  )
}

export default function FleetPage() {
  return (
    <main>
      {/* ── Page Header ── */}
      <section className="bg-[#1e3a5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#cc0000] uppercase tracking-widest text-sm font-semibold mb-3">
            Our Vessels
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Our Fleet</h1>
          <div className="mt-4 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
          <p className="mt-5 text-gray-300 max-w-xl mx-auto">
            Three vessels. One mission — delivering your cargo safely and on time across
            the Indonesian archipelago.
          </p>
        </div>
      </section>

      {/* ── Vessel Cards ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {vessels.map((vessel, index) => (
            <article
              key={vessel.name}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 ${
                index % 2 !== 0 ? 'lg:flex lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-72 lg:h-auto lg:min-h-[380px]">
                <Image
                  src={vessel.image}
                  alt={vessel.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Type badge */}
                <span className="absolute top-4 left-4 bg-[#cc0000] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {vessel.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-[#cc0000] text-xs font-semibold uppercase tracking-widest mb-2">
                  {vessel.tradingArea}
                </p>
                <h2 className="text-[#1e3a5f] text-3xl font-bold mb-4">{vessel.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{vessel.description}</p>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-gray-100 pt-6">
                  {vessel.specs.map((spec) => (
                    <SpecBadge key={spec.label} label={spec.label} value={spec.value} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#1e3a5f] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            Need Shipping Services?
          </h2>
          <p className="text-gray-300 mb-7">
            Contact our team to discuss your cargo needs and get a quote.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#cc0000] hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-150"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  )
}
