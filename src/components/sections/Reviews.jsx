import { TestimonialsColumn } from '../ui/TestimonialColumn';

const testimonials = [
  {
    name: "Kasun P.",
    role: "Technology Consultant",
    service: "CV Architecture",
    text: "Cotex reconstructed my executive resume with exceptional precision. The refined formatting and keyword optimization significantly improved response rates.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Dilini R.",
    role: "Managing Director",
    service: "Web Engineering",
    text: "The web application developed by Cotex exceeded our expectations. Deliverables were completed on schedule, and the interactive UI elements improved engagement.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Nuwan K.",
    role: "Academic Researcher",
    service: "Technical Writing",
    text: "The research assistance provided was thorough, rigorous, and fully compliant with all specified academic criteria. Communication was exemplary.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Sanduni M.",
    role: "Operations Manager",
    service: "Custom Software",
    text: "This platform revolutionized our local logistics operations, streamlining finance and inventory. The cloud-based infrastructure keeps our Colombo and outstation teams connected.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Dinesh C.",
    role: "IT Director",
    service: "System Integration",
    text: "Implementing this solution was smooth and quick. The customizable, user-friendly interface made team training effortless across our corporate branches.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Amali S.",
    role: "E-commerce Lead",
    service: "UI/UX Design",
    text: "Our business functions improved drastically with the new user-friendly design. Customer feedback has been overwhelmingly positive since the launch.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Janith L.",
    role: "Startup Founder",
    service: "Web Architecture",
    text: "They delivered a digital solution that exceeded expectations, perfectly understanding the local market needs and enhancing our core operations.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Priyanka V.",
    role: "Marketing Director",
    service: "Digital Strategy",
    text: "Using their custom architecture, our online presence and conversion rates significantly improved, boosting overall business performance.",
    stars: 5,
    // Fixed image URL here:
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Mahesh R.",
    role: "Product Owner",
    service: "Technical Research",
    text: "The robust features and quick technical support have transformed our workflow, making our development cycles significantly more efficient.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Tharindu F.",
    role: "Retail Director",
    service: "Platform Migration",
    text: "The transition to our new digital storefront was flawless. Cotex minimized downtime and delivered a highly optimized checkout flow that instantly boosted sales.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Eshani R.",
    role: "Product Designer",
    service: "UI/UX Engineering",
    text: "Their attention to frontend aesthetics is unmatched. The premium effects and fluid animations they integrated into our dashboard made the user experience incredibly sleek.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Malith W.",
    role: "Technical Lead",
    service: "API Integration",
    text: "Cotex engineered a seamless bridge between our legacy banking systems and modern web architecture. The resulting performance gains were immediate and substantial.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1507114845806-0347f6150324?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Senali M.",
    role: "Creative Director",
    service: "Brand Identity",
    text: "They didn't just build a website; they captured the absolute essence of our agency. The typography, layout, and interactive elements are a masterclass in modern design.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Kavindu D.",
    role: "Software Engineer",
    service: "Portfolio Dev",
    text: "I needed a personal site that stood out to top-tier tech recruiters. The custom architecture Cotex delivered is incredibly fast, visually striking, and functionally flawless.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Minura T.",
    role: "Operations Exec",
    service: "Workflow Automation",
    text: "By replacing our manual data entry with a custom internal web app, Cotex saved my team dozens of hours a week. The ROI on this project was phenomenal.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=150&auto=format&fit=crop",
  },
];

// Slicing into 3 columns of 5 reviews each
const firstColumn = testimonials.slice(0, 5);
const secondColumn = testimonials.slice(5, 10);
const thirdColumn = testimonials.slice(10, 15);

export default function Reviews() {
  return (
    <section id="reviews" className="pt-36 pb-24 px-6 max-w-7xl mx-auto scroll-mt-20 relative overflow-hidden">
      
      {/* Header Badge & Title */}
      <div className="text-center mb-16 space-y-3 relative z-10">
        <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00ccff] inline-block">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-white font-heading tracking-tight">
          What Our Clients Say
        </h2>
      </div>

      {/* Scrolling Columns Grid */}
      <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[700px] max-h-[80vh] overflow-hidden">
        <TestimonialsColumn 
          testimonials={firstColumn} 
          duration={40} 
          className="w-full md:w-1/2 lg:w-1/3" 
        />
        <TestimonialsColumn 
          testimonials={secondColumn} 
          duration={48} 
          className="hidden md:block w-full md:w-1/2 lg:w-1/3" 
        />
        <TestimonialsColumn 
          testimonials={thirdColumn} 
          duration={44} 
          className="hidden lg:block w-1/3" 
        />
      </div>
    </section>
  );
}