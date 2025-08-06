import {
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MessageCircle,
} from 'lucide-react';
import Image from 'next/image';
function Footer() {
  return (
    <footer aria-label='footer'  style={{ backgroundColor: 'rgba(10, 82, 117, 1)' }}>
      <div className="con-custom px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
             
              <div className="logo-wrapper">
        <Image src="/Logo.svg" alt="Logo" width={98} height={58} priority   className="invert brightness-200 " />
      </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
             PPM General Trading LLC, established in 2022, is a trusted wholesale supplier of premium A4 paper sheets across the UAE. We're committed to quality, timely delivery, and competitive pricing for businesses of all sizes.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#product" className="text-blue-100 hover:text-white transition-colors">
                  Product
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#whychooseus" className="text-blue-100 hover:text-white transition-colors">
                  Why choose us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Location</h4>
            <p className="text-blue-100 text-sm">
              Sheikh Zayed Rd - Trade Centre - Trade Centre 1 - Dubai - United Arab Emirates
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-4 text-sm text-blue-100 mb-4 md:mb-0">
            <span>© 2022-2025 All rights reserved.</span>
            <a className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a  className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a className="text-blue-100 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a  className="text-blue-100 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a className="text-blue-100 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a  className="text-blue-100 hover:text-white transition-colors" aria-label="Mail">
              <Mail size={20} />
            </a>
            <a className="text-blue-100 hover:text-white transition-colors" aria-label="Message">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
