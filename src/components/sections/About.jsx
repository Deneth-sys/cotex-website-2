import SpotlightCard from '../reactbits/SpotlightCard';
import DecryptedText from '../reactbits/DecryptedText';
import CountUp from '../reactbits/CountUp';

const stats = [
  { target: 100, suffix: "+", label: "Projects Completed" },
  { target: 99, suffix: "%", label: "Client Satisfaction" },
  { target: 24, suffix: "/7", label: "Technical Support" },
  { target: 5, suffix: "+", label: "Core Service Domains" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00ccff] mb-2">Corporate Profile</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            We deliver digital solutions engineered for <span className="text-[#00ccff]">measurable impact</span>.
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 text-base">
            Cotex is a specialized digital agency providing end-to-end web development, custom software engineering, and professional career documentation. We partner with businesses and professionals to elevate their digital footprint.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8 text-sm">
            Our approach prioritizes technical excellence, refined visual aesthetics, and rapid deployment schedules—ensuring seamless execution from concept to completion.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="text-3xl font-extrabold text-[#00ccff] block font-heading">
                  <CountUp to={stat.target} suffix={stat.suffix} />
                </span>
                <span className="text-xs text-gray-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.25)" className="p-8 sm:p-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Why Partner with <DecryptedText text="COTEX" speed={40} />?
            </h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#00ccff] text-lg font-bold">✓</span>
                <span><strong>Bespoke Development:</strong> All software architecture and user interfaces are custom-engineered to meet project specifications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ccff] text-lg font-bold">✓</span>
                <span><strong>Agile Execution:</strong> We maintain strict adherence to project timelines and deliver continuous progress updates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00ccff] text-lg font-bold">✓</span>
                <span><strong>Transparent Governance:</strong> Direct consultation, strategic clarity, and thorough technical oversight at every stage.</span>
              </li>
            </ul>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}