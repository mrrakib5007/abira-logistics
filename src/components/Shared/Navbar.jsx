"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FiTruck, 
  FiChevronDown, 
  FiMenu, 
  FiX,
  FiGlobe,
  FiArrowRight,
  FiAnchor,
  FiUsers,
  FiAward,
  FiImage,
  FiMessageSquare,
  FiHelpCircle,
  FiFileText,
  } from "react-icons/fi";
import { GiCargoCrate, GiCommercialAirplane } from "react-icons/gi";
import { RiShipLine } from "react-icons/ri";
import { FaTrainSubway, FaWarehouse } from "react-icons/fa6";
import ThemeToggle from "../Theme/ThemeToggle";
import Logo from "../Logo/Logo";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    submenu: [
      { 
        title: "About Us", 
        desc: "Learn about our company and vision", 
        href: "/about", 
        icon: FiGlobe 
      },
      { 
        title: "Our Management Team", 
        desc: "Meet our leadership and executives", 
        href: "/about/management-team",
        icon: FiUsers 
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    submenu: [
      { 
        title: "Air Freight", 
        desc: "Fast and reliable global air shipping", 
        href: "/services/air-freight", 
        icon: GiCommercialAirplane 
      },
      { 
        title: "Ocean Freight", 
        desc: "FCL and LCL sea container services", 
        href: "/services/ocean-freight", 
        icon: RiShipLine 
      },
      { 
        title: "Road Freight", 
        desc: "Full and partial domestic road haulage", 
        href: "/services/road-freight", 
        icon: FiTruck 
      },
      { 
        title: "Rail Freight", 
        desc: "Cost-efficient overland cargo transit", 
        href: "/services/rail-freight", 
        icon: FaTrainSubway 
      },
      { 
        title: "Customs Brokerage", 
        desc: "Seamless clearance and documentation", 
        href: "/services/customs-brokerage", 
        icon: FiFileText 
      },
      { 
        title: "Warehousing", 
        desc: "Secure storage and inventory hub", 
        href: "/services/warehousing", 
        icon: FaWarehouse 
      },
      { 
        title: "Project & Heavy Cargo", 
        desc: "Specialized oversized freight transport", 
        href: "/services/project-cargo", 
        icon: GiCargoCrate 
      },
      { 
        title: "Air-Sea & Sea-Air", 
        desc: "Hybrid freight for optimal cost & time", 
        href: "/services/multimodal", 
        icon: FiAnchor 
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    submenu: [
      { 
        title: "Our Membership", 
        desc: "Accreditations and global alliances", 
        href: "/company/membership", 
        icon: FiAward 
      },
      { 
        title: "Photo Gallery", 
        desc: "Our fleets, hubs, and operational assets", 
        href: "/company/gallery", 
        icon: FiImage 
      },
      { 
        title: "Testimonials", 
        desc: "What our global partners say about us", 
        href: "/company/testimonials", 
        icon: FiMessageSquare 
      },
      { 
        title: "FAQ", 
        desc: "Frequently asked questions and support", 
        href: "/company/faq", 
        icon: FiHelpCircle 
      },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <>
      <nav className="w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">            
            <Logo />

            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  {item.submenu ? (
                    <>
                      <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer">
                        <span>{item.label}</span>
                        <FiChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 group-hover:text-primary transition-transform" />
                      </button>

                      <div className={`absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition duration-200 ease-out z-50 ${item.submenu.length > 4 ? "w-145 -left-32" : "w-80"}`}>
                        <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-black/60">
                          <div className={item.submenu.length > 4 ? "grid grid-cols-2 gap-1" : "grid gap-1"}>
                            {item.submenu.map((sub, subIdx) => {
                              const SubIcon = sub.icon;
                              return (
                                <Link
                                  key={subIdx}
                                  href={sub.href}
                                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition group/item"
                                >
                                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition shrink-0 mt-0.5">
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover/item:text-primary transition">
                                      {sub.title}
                                    </p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                      {sub.desc}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden xl:flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-sm hover:shadow-primary/20 hover:shadow-lg transition"
              >
                <span>Get a Quote</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex items-center gap-2 xl:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-slate-300 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer"
                aria-label="Open Mobile Menu"
              >
                <FiMenu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-998 xl:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-dvh w-[85%] max-w-sm bg-white dark:bg-slate-900 z-999 shadow-2xl xl:hidden flex flex-col transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <Logo />

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition cursor-pointer"
            aria-label="Close Mobile Menu"
          >
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-1">
          {navItems.map((item, idx) => (
            <div key={idx} className="border-b border-slate-100 dark:border-slate-800/60 last:border-none py-1">
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => toggleMobileSubmenu(idx)}
                    className="w-full flex items-center justify-between py-2.5 text-left font-semibold text-slate-800 dark:text-slate-200 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeSubmenu === idx ? "rotate-180 text-primary" : "text-slate-400"
                      }`}
                    />
                  </button>

                  {activeSubmenu === idx && (
                    <div className="pb-2 pl-2 space-y-1 mt-1">
                      {item.submenu.map((sub, subIdx) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={subIdx}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:text-primary transition"
                          >
                            <SubIcon className="w-4 h-4 text-primary shrink-0" />
                            <div className="text-xs font-medium">{sub.title}</div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 font-semibold text-slate-800 dark:text-slate-200 hover:text-primary transition"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="p-5 border-t border-slate-200 dark:border-slate-800 shrink-0">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-xl shadow-md transition"
          >
            <span>Get a Quote</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}