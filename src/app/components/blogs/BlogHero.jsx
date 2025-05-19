
import Image from "next/image";
import EXTERNAL_URLS from "../../config/urls";

export default function BlogHero() {
    return (
      <section className="min-h-auto bg-[#0a1c3d] text-white ">
        <div className="flex flex-col items-start px-6 md:px-24 pt-16  text-left max-w-7xl mx-auto">
          <span className="text-base uppercase tracking-wide">Blog</span>
          <h1 className="text-5xl font-bold leading-tight">
            Discover Our Latest <br className="hidden sm:block" /> Articles
          </h1>
  
          {/* Featured Blog Card */}
          <article className="mt-12 flex flex-col md:flex-row overflow-hidden rounded-2xl bg-[#101d43] shadow-lg">
            {/* Image */}
            <div className="md:w-1/2">
              <Image
                src={EXTERNAL_URLS.media}
                alt="Team collaborating at office desk"
                width={600}
                height={400}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
  
            {/* Content */}
            <div className="p-6 md:w-1/2 flex flex-col justify-center space-y-3">
              <span className="text-sm text-gray-300 uppercase">Featured</span>
              <h3 className="text-xl font-semibold leading-snug">
                Can Data-Driven Insights Improve Your Promotions, Inventory, and Customer Engagement?
              </h3>
              <p className="text-sm text-gray-400">22 Mar 2024</p>
  
              <button className="mt-4 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-full w-fit">
                Read More
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
          </article>
        </div>
      </section>
    );
  }