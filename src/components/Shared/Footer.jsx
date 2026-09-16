import Link from "next/link";
import Logo from "../Logo/Logo";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPlaneDeparture,
  FaShip,
  FaTruckFast,
  FaWarehouse,
} from "react-icons/fa6";

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Track Shipment", href: "/track" },
  { name: "Pricing & Plans", href: "/pricing" },
  { name: "Latest News", href: "/blog" },
  { name: "Contact Support", href: "/contact" },
];

const services = [
  { name: "Air Freight Forwarding", href: "/services/air-freight", icon: FaPlaneDeparture },
  { name: "Ocean Cargo Logistics", href: "/services/ocean-freight", icon: FaShip },
  { name: "Road & Rail Transport", href: "/services/road-freight", icon: FaTruckFast },
  { name: "Warehousing & Storage", href: "/services/warehousing", icon: FaWarehouse },
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { name: "X (Twitter)", href: "https://twitter.com", icon: FaXTwitter },
  { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-8 overflow-hidden border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800/80">
          <div className="lg:col-span-2 space-y-6">
            <Logo variant="footer" />

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Global multimodal freight forwarding, modern warehousing, and end-to-end supply chain logistics with real-time tracking.
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">
              Our Services
            </h3>
            <ul className="space-y-3.5 text-sm">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <Icon className="h-3.5 w-3.5 text-primary transition-transform group-hover:scale-110" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors"
                  >
                    <FiArrowRight className="h-3 w-3" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold tracking-wider text-white uppercase mb-6">
              Contact Info
            </h3>
            <div className="flex items-start gap-3 text-sm text-slate-400">
              <FiMapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>123 Freight Avenue, Dhaka 1230, BD</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <FiPhone className="h-4 w-4 text-primary shrink-0" />
              <span>+880 1718-727658</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <FiMail className="h-4 w-4 text-primary shrink-0" />
              <span>support@abiracargo.com</span>
            </div>            
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 ABIRA Logistics Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}