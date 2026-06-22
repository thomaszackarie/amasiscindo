import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — PT. Amas Iscindo Utama',
  description:
    'Get in touch with PT. Amas Iscindo Utama. Offices in Jakarta, Surabaya, and Timika.',
}

const offices = [
  {
    city: 'Jakarta',
    role: 'Head Office',
    address: 'Jl. Raya Pelabuhan No. 1, Tanjung Priok\nJakarta Utara, DKI Jakarta 14310',
    phone: '+62 21 4301 xxxx',
    email: 'jakarta@amasiscindo.co.id',
  },
  {
    city: 'Surabaya',
    role: 'Branch Office',
    address: 'Jl. Tanjung Perak Barat No. 25\nSurabaya, Jawa Timur 60165',
    phone: '+62 31 3291 xxxx',
    email: 'surabaya@amasiscindo.co.id',
  },
  {
    city: 'Timika',
    role: 'Branch Office',
    address: 'Jl. Cenderawasih No. 8\nTimika, Papua Tengah 99910',
    phone: '+62 901 321 xxxx',
    email: 'timika@amasiscindo.co.id',
  },
]

export default function ContactPage() {
  return (
    <main>
      {/* ── Page Header ── */}
      <section className="bg-[#1e3a5f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#cc0000] uppercase tracking-widest text-sm font-semibold mb-3">
            Get In Touch
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold">Contact Us</h1>
          <div className="mt-4 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
          <p className="mt-5 text-gray-300 max-w-xl mx-auto">
            Reach out to our offices across Indonesia. We&apos;re ready to assist with your
            shipping and logistics needs.
          </p>
        </div>
      </section>

      {/* ── Office Cards ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Our Offices</h2>
            <div className="mt-3 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-[#cc0000]"
              >
                {/* Card Header */}
                <div className="bg-[#1e3a5f] px-6 py-5">
                  <p className="text-[#cc0000] text-xs font-semibold uppercase tracking-widest mb-1">
                    {office.role}
                  </p>
                  <h3 className="text-white text-2xl font-bold">{office.city}</h3>
                </div>

                {/* Card Body */}
                <div className="px-6 py-6 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#cc0000] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {office.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#cc0000] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 text-sm hover:text-[#1e3a5f] transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#cc0000] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href={`mailto:${office.email}`}
                      className="text-gray-600 text-sm hover:text-[#1e3a5f] transition-colors break-all"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Send Us a Message</h2>
            <div className="mt-3 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
            <p className="mt-4 text-gray-500">
              Fill in the form below and we will respond within 1–2 business days.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
