'use client';
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
 const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

//   useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   if (isOpen) {
//     document.addEventListener('click', handleClickOutside);
//   } else {
//     document.removeEventListener('click', handleClickOutside);
//   }

//   return () => {
//     document.removeEventListener('click', handleClickOutside);
//   };
// }, [isOpen]);




  return (
    <nav className=" flex items-center justify-between relative z-10  con-custom"> 
      
      {/* Logo */}
      <div className="logo-wrapper">
        <Image src="/
        logo.svg" alt="Logo" width={98} height={58} priority   className="invert brightness-200 sm:invert-0 sm:brightness-100" />
      </div>

   {/* Navigation Links - Hidden on small screens */}
<div className="hidden md:flex gap-4 items-center">
  <ul className="flex gap-4">
    <li><a href="#home" className="link">Home</a></li>
    <li><a href="#about" className="link">About</a></li>
    <li><a href="#whychooseus" className="link">Why Choose Us</a></li>
    <li><a href="#testimonials" className="link">Testimonials</a></li>
    <li><a href="#faq" className="link">FAQ</a></li>
  </ul>

  {/* Contact Icon Box */}
  <div className="submission-box h-[40px] w-[102px]" span="Contact">
    <a href="#contact"  className="link">Contact</a>

  </div>
</div>

      {/* Hamburger Menu - Visible only on small screens */}
     {/* Hamburger Menu - Visible only on small screens */}
<div className="block md:hidden">
  <button aria-label="Open Menu" onClick={toggleSidebar}>
    <Menu className="w-7 h-7 sm:text-black text-white" />
  </button>
</div>

{/* Sidebar */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {/* Close button (hamburger icon again) */}
  <div className="flex justify-start p-4">
    <button aria-label="Close Menu" onClick={toggleSidebar}>
      <Menu className="w-7 h-7 text-black" />
    </button>
  </div>

  {/* Centered Nav Links */}
  <ul className="flex flex-col items-center justify-center p-6 gap-6 text-center">
    {['home', 'about', 'why-choose', 'testimonials', 'faq'].map((id) => (
      <li key={id}>
        <a
          href={`#${id}`}
          className="link"
          onClick={() => setIsOpen(false)}
        >
          {id.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
        </a>
      </li>
    ))}
    <div className="submission-box h-[40px] w-[102px]" span="Contact">
    <a href="#contact"  className="link">Contact</a>

  </div>
  </ul>
   
</div>

    </nav>
  );
}

export default Navbar;
