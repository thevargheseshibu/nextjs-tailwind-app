// 📄 components/Footer.jsx

import Image from "next/image";
import EXTERNAL_URLS from "../config/urls";

export default function Footer() {
  return (
    <footer className="-mt-28 bg-[#050d26] text-white px-6 pt-34 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Grid Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-16">
          <div>
            <h4 className="font-semibold mb-3">PLATFORMS</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Unified Commerce</li>
              <li>Ordazzle</li>
              <li>Omni Channel</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">INDUSTRIES</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Retail & Consumer Goods</li>
              <li>Fashion & Lifestyle</li>
              <li>Home & Living</li>
              <li>Technology & Electronics</li>
              <li>Speciality & Leisure</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">COMPANY</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Join Our Team</li>
              <li>Events</li>
              <li>Newsroom</li>
              <li>Contact Us</li>
              <li>Become a Partner</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">RESOURCES</h4>
            <ul className="space-y-2 text-gray-300">
              <li>White papers</li>
              <li>Case Studies</li>
              <li>Knowledge Base</li>
              <li>Podcasts</li>
              <li>Blog</li>
              <li>Testimonials</li>
              <li>Product Videos</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + Social */}
          <div className="space-y-4">
            <Image src={EXTERNAL_URLS.logo} alt="ETP Logo" width={120} height={30} />
            <div className="flex gap-4">
              {[
                "facebook", "linkedin", "instagram-new", "twitterx", "youtube-play",
              ].map((icon) => (
                <a key={icon} href="#">
                  <img
                    src={`${EXTERNAL_URLS.social}${icon}.png`}
                    alt={`${icon} icon`}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex gap-4">
            <img
              src="https://via.placeholder.com/60x60?text=SSF"
              alt="SSF Badge"
              className="h-10"
              loading="lazy"
            />
            <img
              src="https://via.placeholder.com/60x60?text=DSS"
              alt="DSS Badge"
              className="h-10"
              loading="lazy"
            />
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <p>© {new Date().getFullYear()} ETP Group Pte Ltd. All rights reserved.</p>
          <p>
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
