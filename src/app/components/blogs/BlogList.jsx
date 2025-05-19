const blogData = [
    {
      title: "Why Your Current Mobile POS Systems Might Be Failing Your Retail Business",
      date: "22 Feb 2024",
      img: "https://media.istockphoto.com/id/1438634414/photo/business-women-laptop-and-and-happy-team-in-office-for-web-design-collaboration-and-training.jpg?s=2048x2048&w=is&k=20&c=Pd7jf2xPKirZQuJmRWE_Va4bEtmy2crWz0p3L1wrDAM=",
    },
    {
      title: "Retail’s New Power Tool: Why Generative AI Matters More Than Ever",
      date: "25 Feb 2024",
      img: "https://media.istockphoto.com/id/1438634414/photo/business-women-laptop-and-and-happy-team-in-office-for-web-design-collaboration-and-training.jpg?s=2048x2048&w=is&k=20&c=Pd7jf2xPKirZQuJmRWE_Va4bEtmy2crWz0p3L1wrDAM=",
    },
    {
      title: "Revolutionising Retail: Why Investing in New-Age Technology is Key to Capturing Hybrid Consumers",
      date: "3 Mar 2024",
      img: "https://media.istockphoto.com/id/1438634414/photo/business-women-laptop-and-and-happy-team-in-office-for-web-design-collaboration-and-training.jpg?s=2048x2048&w=is&k=20&c=Pd7jf2xPKirZQuJmRWE_Va4bEtmy2crWz0p3L1wrDAM=",
    },
    {
      title: "Six Effective Strategies for Managing Multi-Channel Retail Operations",
      date: "14 Mar 2024",
      img: "https://media.istockphoto.com/id/1438634414/photo/business-women-laptop-and-and-happy-team-in-office-for-web-design-collaboration-and-training.jpg?s=2048x2048&w=is&k=20&c=Pd7jf2xPKirZQuJmRWE_Va4bEtmy2crWz0p3L1wrDAM=",
    },
  ];
  
  export default function BlogList() {
    return (
      <section className="relative bg-white pt-24 pb-30 text-[#0a1c3d]">
        {/* Top Curve */}
        <div className="absolute top-0 left-0 w-full -translate-y-1 overflow-hidden">
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="h-24 w-full">
            <path d="M0,100 C300,0 900,0 1200,100 L1200,0 L0,0 Z" fill="#0a1c3d" />
          </svg>
        </div>
  
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-4xl font-bold">All Blogs</h2>
  
          <div className="grid md:grid-cols-2 gap-10">
            {blogData.map(({ title, date, img }, i) => (
              <article key={i} className="space-y-3">
                <img
                  src={img}
                  alt={title}
                  className="w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <h3 className="text-lg font-medium leading-snug">{title}</h3>
                <p className="text-sm text-gray-500">{date}</p>
                <button className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#0a1c3d] hover:bg-[#142a5c] rounded-full w-fit">
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
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  