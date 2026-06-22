import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us — PT. Amas Iscindo Utama',
  description:
    'Learn about PT. Amas Iscindo Utama — an Indonesian shipping company with roots since 1988, with offices in Jakarta, Surabaya, and Timika.',
}

const historyParagraphs = [
  `PT. AMASNUSA PERSADA (AMAS) was co-founded by Mr. Galuh Aping Hanafi (late) and Mr. Memet R Kusrin in 1988.`,
  `The company starting business in agency. In 1989 we are appointed as general agent for Cheng-Lie-Navigation (CNC Line), a Taiwan based company. CNC Line conducts its main line of business in shipping, offering full-containerize shipping services covering international markets. CNC vessels call Indonesian major port once a week. CMA CGM bought CNC Line in 2007. Our agency was terminate in January 2009.`,
  `In year 1992, AMAS for the first time could afford to own vessel, MV. Caraka Jaya Niaga III-7. When the company receive this vessel, BPIS (Badan Pengembangan Industri Strategis) charter our vessel until 1995. Without any delay after BPIS finish charter our vessel, PT. Meratus Line interested with our vessel and then charter our vessel until next year.`,
  `Amas is committed to excellence in maintaining good and reliable vessel which ensuring customer expectation and possible exceeded.`,
  `In Year 2007 company bought tanker vessel, MT. Amas Nusa to strength our business. Vessel use to transport HSD or CPO at Indonesian waters only.`,
  `Amas also provides support in cargo loading and discharging activities in Surabaya port via its subsidiary, PT. Bandar Bahtera Persada, to ensure customers receive fast and efficient services.`,
  `PT Amasnusa Persada in 2011 was taken over by other company or personal to achieve better goal as a leading shipping company.`,
  `Amas Iscindo Utama (AIU) able to purchase MV. Lautan Arafura in 2000 and trading area was Jakarta or Surabaya or Timika.`,
  `2009, Amas Iscindo Utama sold MV. Lautan Arafura and bought 2 Vessel MV. Flores Sea and MV. Sawu Sea.`,
  `Both vessel is time charter PT. Freeport Indonesia until 2021.`,
  `Amas today owned offices at Jakarta, Surabaya and Timika.`,
  `Changing times demand contemporary solutions. To keep abreast of the latest trends and developments within the market, we have incorporated a sound organizational structure into our workplace, ensuring our ability to deliver solutions responsively. But our efforts do not end here. Constantly on the move to maintain our competitive edge. We are always looking to innovate our stable of service.`,
]

const missions = [
  'To achieve as a leading shipping company from all aspect',
  'To provide solution and establish close working relationship with customers, related institutions, and government toward shipping business environment.',
  'To provide skilled, efficient loyal, and highly dedicated workforce to work hand-in-hand with our customers to reach their goals.',
  'To create good financial and operational practice to increase revenue for the shareholders.',
  'To conduct its business with the highest levels of ethical behavior and ensures compliance with applicable governing laws, rules and regulations.',
]

export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center">
        <Image
          src="/images/IMG_1a-1024x683.jpg"
          alt="Amas Iscindo Utama shipping operations"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1e3a5f]/75" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#cc0000] uppercase tracking-widest text-sm font-semibold mb-3">
            Who We Are
          </p>
          <h1 className="text-white text-4xl sm:text-5xl font-bold">About Us</h1>
          <div className="mt-4 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
        </div>
      </section>

      {/* ── Company History ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f]">Company History</h2>
            <div className="mt-3 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
          </div>
          <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
            {historyParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Vision &amp; Mission</h2>
            <div className="mt-3 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
          </div>

          {/* Motto */}
          <div className="text-center mb-12">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Motto</p>
            <p className="text-[#cc0000] text-2xl sm:text-3xl font-bold italic">
              &ldquo;Commit To Your Needs&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#cc0000] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed italic">
                &ldquo;To become the best shipping company in the world.&rdquo;
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#cc0000] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold">Mission</h3>
              </div>
              <ol className="space-y-3">
                {missions.map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[#cc0000]/30 border border-[#cc0000] flex items-center justify-center text-[#cc0000] text-xs font-bold">
                      {i + 1}
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── YouTube Video ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1e3a5f]">See Us in Action</h2>
            <div className="mt-3 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/nO4lSZEd8pI"
              title="PT. Amas Iscindo Utama — Company Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── Org Chart ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1e3a5f]">Organizational Structure</h2>
            <div className="mt-3 w-16 h-1 bg-[#cc0000] mx-auto rounded-full" />
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-[800px]">
              <Image
                src="/images/struktur-OK-723x1024.jpg"
                alt="PT. Amas Iscindo Utama Organizational Structure"
                width={723}
                height={1024}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
