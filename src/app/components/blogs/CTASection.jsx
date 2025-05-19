
export default function CTASection() {
    return (
      <section className="relative z-20 -mt-24 px-4">
        <div className="max-w-6xl mx-auto bg-[#0c1c4d] text-white rounded-[2rem] px-8 py-12 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          {/* Text */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Ready to Transform <br className="hidden md:block" /> Your Retail?
          </h2>
  
          {/* CTA Button */}
          <button className="bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold text-sm px-6 py-3 rounded-full flex items-center gap-2">
            Let’s Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    );
  }
  