"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import MegaMenuPanel from "../MegaMenuPanel";
import EXTERNAL_URLS from "../config/urls";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUnifiedOpen, setIsUnifiedOpen] = useState(false);

  const toggleUnifiedMenu = () => setIsUnifiedOpen(!isUnifiedOpen);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const navItems = [
    "Unified Commerce",
    "e-Commerce",
    "Omni Channel",
    "Industries",
    "Resources",
    "Partners",
  ];

  return (
    <header className="bg-[#f6f4f4] text-[#0a1c3d]">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo & Nav */}
        <div className="flex items-center gap-12">
          <Image
            src={EXTERNAL_URLS.logo}
            alt="ETP Company Logo"
            width={60}
            height={24}
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 font-semibold text-sm">
            {navItems.map((item) => (
              <li
                key={item}
                className="relative flex items-center gap-1 cursor-pointer"
                onClick={
                  item === "Unified Commerce" ? toggleUnifiedMenu : undefined
                }
              >
                {item}
                {!["e-Commerce", "Partners"].includes(item) && (
                  <ChevronDown size={14} />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Language & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="flex items-center gap-1 text-sm font-medium">
            EN <ChevronDown size={14} />
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold border border-[#0a1c3d] px-4 py-2 rounded-full">
            Let’s Talk <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={toggleMobile}
          aria-label="Toggle mobile menu"
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isUnifiedOpen && (
        <MegaMenuPanel mobile={false} toggleUnifiedMenu={toggleUnifiedMenu} />
      )}

      <div className="w-full h-1 bg-[#0a1c3d]" />

      {/* Mobile Menu */}

      {isMobileOpen && (
        <aside className="lg:hidden fixed top-0 left-0 h-full w-full bg-[#f6f4f4] z-50 p-6 pt-16 flex flex-col justify-between">
          <button
            onClick={toggleMobile}
            className="flex items-center gap-2 text-sm font-semibold text-[#0a1c3d] mb-4"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
          <ul className="space-y-6 text-base font-semibold">
            {[...navItems.slice(0, 3), "Company", ...navItems.slice(3)].map(
              (item) => (
                <li
                  key={item}
                  className="flex justify-between items-center border-b pb-3 border-[#e5e5e5]"
                  onClick={
                    item === "Unified Commerce" ? toggleUnifiedMenu : undefined
                  }
                >
                  <span>{item}</span>
                  {!["e-Commerce", "Partners"].includes(item) && (
                    <ChevronRight size={16} />
                  )}
                </li>
              )
            )}
          </ul>

          {isUnifiedOpen && (
            <MegaMenuPanel
              mobile={true}
              toggleUnifiedMenu={toggleUnifiedMenu}
            />
          )}

          <button className="mt-8 flex items-center justify-center gap-2 bg-[#0a1c3d] text-sm font-semibold text-white px-6 py-3 rounded-full">
            Let’s Talk <ArrowRight size={14} />
          </button>
        </aside>
      )}
    </header>
  );
}
