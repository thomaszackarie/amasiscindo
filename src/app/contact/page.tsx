import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — PT. Amas Iscindo Utama',
  description:
    'Get in touch with PT. Amas Iscindo Utama. Head Office in Jakarta.',
}

type Office = {
  city: string
  role: string
  address: string
  phones: string[]
  fax?: string
  email: string
}

const offices: Office[] = [
  {
    city: 'Jakarta',
    role: 'Head Office',
    address: 'Artha Graha Building, 23rd Fl, Suite 2301\nSCBD Lot 25, Jl. Jend. Sudirman Kav. 52-53\nJakarta 12190',
    phones: ['+62 21 515 3359', '+62 21 515 3384', '+62 21 515 3785'],
    fax: '+62 21 515 0179',
    email: 'crewingamas@amasiscindo.com',
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

          <div className="flex justify-center">
            {offices.map((office) => (
              <div
                key={office.city}
                className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-[#cc0000] w-full max-w-md"
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

                  {/* Phone(s) */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#cc0000] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="flex flex-col gap-1">
                      {office.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="text-gray-600 text-sm hover:text-[#1e3a5f] transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Fax */}
                  {office.fax && (
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#cc0000] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      <span className="text-gray-600 text-sm">
                        <span className="text-gray-400 text-xs font-semibold uppercase tracking-wide mr-1.5">Fax</span>
                        {office.fax}
                      </span>
                    </div>
                  )}

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
