import { useState } from 'react';
import StarBorder from '../reactbits/StarBorder';
import ClickSpark from '../reactbits/ClickSpark';
import Magnet from '../reactbits/Magnet';
import { Send, Mail, Clock, CheckCircle, ShieldCheck, Loader2 } from 'lucide-react';

const serviceOptions = [
  "Web Development",
  "CV Designing",
  "Academic & Technical Writing",
  "Custom Software",
  "UI/UX Design",
];

export default function Contact() {
  const [selectedService, setSelectedService] = useState("Web Development");
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setStatus('loading');

    // Simulate network transmission request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative">
      <ClickSpark sparkColor="#00ccff" sparkCount={8} sparkRadius={25}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00ccff]/10 border border-[#00ccff]/30 text-[#00ccff] text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00ccff] animate-pulse" />
            Accepting New Engagements
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Initiate a <span className="text-[#00ccff]">Consultation</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
            Select your service requirement below and complete the form to request a proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#0c0c16]/90 border border-white/10 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00ccff]/10 border border-[#00ccff]/30 flex items-center justify-center text-[#00ccff] shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Direct Correspondence</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Official communication channel</p>
                  <a href="mailto:cotexdigital@gmail.com" className="text-[#00ccff] text-xs font-semibold hover:underline mt-2 inline-block">
                    cotexdigital@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c0c16]/90 border border-white/10 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center text-[#8b5cf6] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Response Timeframe</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Inquiries acknowledged promptly</p>
                  <span className="text-gray-300 text-xs font-semibold mt-2 inline-block">
                    Within 1 to 3 Business Hours
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-gray-300 font-semibold">
                <ShieldCheck size={16} className="text-[#00ccff]" /> Client Privacy Assurance
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                All submitted project details and documentation are held under strict confidentiality protocols.
              </p>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-8">
            <StarBorder color="#00ccff" speed="5s" className="w-full h-full">
              <div className="p-8 sm:p-10 h-full flex flex-col justify-center">
                {status === 'success' ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#00ccff]/20 border border-[#00ccff] flex items-center justify-center text-[#00ccff] mx-auto">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto">
                      Thank you for contacting Cotex regarding <strong>{selectedService}</strong>. A project manager will review your submission and respond shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2 rounded-full border border-white/10 text-xs text-gray-300 hover:text-white hover:border-[#00ccff] transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                        Select Category:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((opt) => {
                          const isSelected = selectedService === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setSelectedService(opt)}
                              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#00ccff] text-[#050508] font-bold shadow-[0_0_15px_rgba(0,204,255,0.4)]'
                                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Form Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Mercer"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ccff] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ccff] transition-all"
                        />
                      </div>
                    </div>

                    {/* Textarea */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Project Scope & Details</label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={`Provide a summary of your requirements, key deliverables, and target timeline...`}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ccff] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button with Loading State */}
                    <div className="pt-2">
                      <Magnet magnetism={0.3}>
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00ccff] text-[#050508] font-bold text-sm hover:shadow-[0_0_30px_rgba(0,204,255,0.6)] transition-all cursor-pointer disabled:opacity-50"
                        >
                          {status === 'loading' ? (
                            <>
                              <Loader2 size={16} className="animate-spin" /> Transmitting...
                            </>
                          ) : (
                            <>
                              Submit Inquiry <Send size={16} />
                            </>
                          )}
                        </button>
                      </Magnet>
                    </div>
                  </form>
                )}
              </div>
            </StarBorder>
          </div>

        </div>
      </ClickSpark>
    </section>
  );
}