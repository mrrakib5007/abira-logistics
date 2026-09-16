import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-slate-900 text-slate-100 text-xs border-b border-slate-800 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          
          <div className="flex items-center gap-6">
            <a 
              href="tel:+18005550199" 
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <FiPhone className="text-primary w-3.5 h-3.5" />
              <span>+880 1718-727658</span>
            </a>

            <a 
              href="mailto:support@abiralogistics.com" 
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <FiMail className="text-primary w-3.5 h-3.5" />
              <span>support@abiralogistics.com</span>
            </a>

            <div className="hidden lg:flex items-center gap-2 text-slate-100">
              <FiClock className="text-primary w-3.5 h-3.5" />
              <span>Mon - Sat: 8:00 AM - 9:00 PM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-slate-100">
              <FiMapPin className="text-primary w-3.5 h-3.5" />
              <span>Dhaka, Bangladesh</span>
            </div>

            <div className="h-3.5 w-px bg-slate-700 mx-1" />

            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary transition"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary transition"
                aria-label="Twitter"
              >
                <FaTwitter className="w-3 h-3" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-3 h-3" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-primary transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}