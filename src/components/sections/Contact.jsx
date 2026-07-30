import { useState } from 'react';
import StarBorder from '../reactbits/StarBorder';
import ClickSpark from '../reactbits/ClickSpark';
import Magnet from '../reactbits/Magnet';
import { Send, Mail, Clock, CheckCircle, ShieldCheck, Loader2, Phone } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setStatus('loading');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService,
          message: formData.message,
          subject: `New Lead: ${selectedService} - ${formData.name}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
      } else {
        console.error("Form submission failed:", result);
        setStatus('idle');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setStatus('idle');
      alert("Network error. Please check your connection and try again.");
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative">
      <ClickSpark sparkColor="#00ccff" sparkCount={8} sparkRadius={25}>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="liquid-glass inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[#00ccff] text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00ccff] animate-pulse" />
            Accepting New Engagements
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading">
            Initiate a <span className="text-[#00ccff]">Consultation</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
            Select your service requirement below and complete the form to request a proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column Info Slates */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="liquid-glass liquid-glass-hover p-6 rounded-[2rem] relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="liquid-glass-icon w-10 h-10 rounded-xl flex items-center justify-center text-[#00ccff] shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm font-heading">Direct Correspondence</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Official communication channel</p>
                  <a href="mailto:cotexfounder@gmail.com" className="text-[#00ccff] text-xs font-semibold hover:underline mt-2 inline-block">
                    cotexfounder@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="liquid-glass liquid-glass-hover p-6 rounded-[2rem] relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="liquid-glass-icon w-10 h-10 rounded-xl flex items-center justify-center text-[#25D366] shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm font-heading">Direct Phone / WhatsApp</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Quick inquiries & calls</p>
                  <a href="tel:+94700000000" className="text-[#25D366] text-xs font-semibold hover:underline mt-2 inline-block">
                    +94 (7X) XXX-XXXX
                  </a>
                </div>
              </div>
            </div>

            <div className="liquid-glass liquid-glass-hover p-6 rounded-[2rem] relative overflow-hidden group">
              <div className="flex items-start gap-4">
                <div className="liquid-glass-icon w-10 h-10 rounded-xl flex items-center justify-center text-[#8b5cf6] shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm font-heading">Response Timeframe</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Inquiries acknowledged promptly</p>
                  <span className="text-gray-300 text-xs font-semibold mt-2 inline-block">
                    Within 1 to 3 Business Hours
                  </span>
                </div>
              </div>
            </div>

            <div className="liquid-glass p-6 rounded-[2rem] space-y-3 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-xs text-gray-300 font-semibold">
                <ShieldCheck size={16} className="text-[#00ccff]" /> Client Privacy Assurance
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                All submitted project details and documentation are held under strict confidentiality protocols.
              </p>
            </div>
          </div>

          {/* Right Column Form Slate */}
          <div className="lg:col-span-8">
            <StarBorder color="#00ccff" speed="5s" className="w-full h-full">
              <div className="liquid-glass rounded-[2rem] p-8 sm:p-10 h-full flex flex-col justify-center relative overflow-hidden">
                
                {status === 'success' ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="liquid-glass-icon w-16 h-16 rounded-full flex items-center justify-center text-[#00ccff] mx-auto border-[#00ccff]/50">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-heading">Inquiry Received</h3>
                    <p className="text-gray-400 text-sm max-w-sm mx-auto">
                      Thank you for contacting Cotex regarding <strong>{selectedService}</strong>. A project manager will review your submission and respond shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="liquid-glass px-6 py-2.5 rounded-full text-xs text-gray-300 hover:text-white hover:border-[#00ccff] transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Category Selector Pills */}
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
                              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#00ccff] text-[#050508] font-bold shadow-[0_0_20px_rgba(0,204,255,0.5)]'
                                  : 'liquid-glass text-gray-400 hover:text-white hover:border-white/30'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Form Input Fields Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Mercer"
                          className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ccff] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_15px_rgba(0,204,255,0.2)] transition-all"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. alex@company.com"
                          className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ccff] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_15px_rgba(0,204,255,0.2)] transition-all"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +94 77 123 4567"
                          className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ccff] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_15px_rgba(0,204,255,0.2)] transition-all"
                        />
                      </div>
                    </div>

                    {/* Project Scope & Details */}
                    <div>
                      <label className="block text-xs font-semibold uppercase text-gray-400 mb-2">Project Scope & Details</label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide a summary of your requirements, key deliverables, and target timeline..."
                        className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#00ccff] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] focus:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_0_15px_rgba(0,204,255,0.2)] transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
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