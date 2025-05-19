// 📄 components/MegaMenuPanel.jsx
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function MegaMenuPanel({ onClose, mobile = false,toggleUnifiedMenu}) {
  return mobile ? (
    <div className="fixed inset-0 z-50 bg-[#f6f4f4] px-6 py-6 overflow-y-auto lg:hidden">
      {/* Mobile Header */}
      <button
        onClick={toggleUnifiedMenu}
        className="flex items-center gap-2 text-sm font-semibold text-[#0a1c3d] mb-4"
      >
        <ArrowLeft size={18} /> Go Back
      </button>

      <h3 className="text-2xl font-bold text-[#0a1c3d] mb-2">Unified Commerce</h3>
      <p className="text-sm text-gray-600 mb-4">
        ETP Unify is a powerful cloud-native Unified Commerce Retail Solution. Built using MACH Architecture, it brings
        the best of Retail and E-commerce functionality to the user in one, easy to use, and beautiful interface.
      </p>

      <a href="#" className="text-sm font-semibold underline text-[#0a1c3d] mb-6 inline-block">
        Explore All Features
      </a>

      <div className="grid grid-cols-1 gap-y-2 text-sm text-[#0a1c3d]">
        {[
          "Cloud POS & Retail Operations",
          "Smart Order Management",
          "Omni-Channel Fulfillment",
          "Unified Inventory Management",
          "Unified Promotions Management",
          "Customer Relationship Management",
          "Marketplaces & E-commerce Integrations",
          "Product Information Management",
          "API Management",
          "Seamless Integration with Partners",
          "Artificial Intelligence",
          "Logistics Management",
          "Mobile Applications",
        ].map((feature, idx) => (
          <div key={idx} className="border-b border-gray-200 py-2">
            {feature}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h4 className="text-sm text-gray-500 font-semibold mb-4">What’s New</h4>
        {[1, 2].map((i) => (
          <div
            key={i}
            className="rounded-xl bg-[#0a1c3d] text-white p-4 flex gap-4 mb-4"
          >
            <div className="flex-1">
              <p className="text-sm mb-2 font-medium">
                {i === 1
                  ? "Can Data-Driven Insights Improve Your Promotions, Inventory, and Customer Engagement?"
                  : "Why Your Current Mobile POS Systems Might Be Failing Your Retail Business"}
              </p>
              <a href="#" className="underline text-sm font-semibold">Read More</a>
            </div>
            <img
              src="https://via.placeholder.com/100"
              alt="Preview"
              className="w-20 h-16 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="absolute left-0 w-full bg-[#f6f4f4] border-t border-gray-200 shadow-xl z-50 hidden lg:block">
      <div className="bg-[#f6f4f4] max-w-7xl mx-auto grid grid-cols-3 gap-12 p-8 text-[#0a1c3d]">
        {/* Left: Description */}
        <div className="col-span-2">
          <h3 className="text-xl font-semibold mb-2">Unified Commerce</h3>
          <p className="text-sm mb-6 text-gray-500">
            ETP Unify is a powerful cloud-native Unified Commerce Retail Solution. Built using MACH Architecture, it brings the best of Retail and E-commerce functionality to the user in one, easy to use, and beautiful interface.
          </p>
          <a href="#" className="text-sm font-semibold underline text-[#0a1c3d]">
            Explore All Features
          </a>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium">
            <ul className="space-y-2">
              <li>Cloud POS & Retail Operations</li>
              <li>Smart Order Management</li>
              <li>Omni-Channel Fulfillment</li>
              <li>Unified Inventory Management</li>
              <li>Unified Promotions Management</li>
              <li>CRM</li>
              <li>Marketplace Integrations</li>
            </ul>
            <ul className="space-y-2">
              <li>Product Information Management</li>
              <li>API Management</li>
              <li>Partner Integration</li>
              <li>AI</li>
              <li>Logistics</li>
              <li>Mobile Apps</li>
            </ul>
          </div>
        </div>

        {/* Right: What's New */}
        <div className="space-y-4">
          <h4 className="font-semibold text-sm text-gray-500">What’s New</h4>
          {[1, 2].map((i) => (
            <div key={i} className="rounded-xl bg-[#0a1c3d] text-white p-4 flex items-start gap-4">
              <div className="flex-1">
                <p className="text-sm mb-2 font-medium">
                  Can Data-Driven Insights Improve Your Promotions?
                </p>
                <a href="#" className="underline text-sm font-semibold">
                  Read More
                </a>
              </div>
              <img
                src="https://via.placeholder.com/80"
                alt="Preview"
                className="rounded-md w-20 h-16 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
