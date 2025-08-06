import { Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactIcon() {
  return (
    <div className="fixed top-[300px] right-4 flex flex-col items-center gap-6 z-50">
      <a
        href="https://wa.me/971561312323?text=Hello%20(inquiry%20from%20website),%0AI%20would%20like%20to%20know%20more%20about%20A4%20sheet%20bulk%20ordering."
        target="_blank"
        rel="noopener noreferrer"
        className="icon-box bg-[rgba(37,211,102,1)]"
      >
        <FaWhatsapp className="icon" />
      </a>
      <a
        href="tel:+971561312323"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-box bg-[rgba(33,150,243,1)]"
      >
        <Phone className="icon" />
      </a>

      <a
        href="mailto:info@ppmuae.com?subject=Inquiry from Website&body=Hello,I wanna to know more about A4 sheet bulk ordering,Please provide pricing,minumum order quantity and delivery information.&OA THANK YOU"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-box bg-[rgba(234,67,53,1)]"
      >
        <Mail className="icon" />
      </a>
    </div>
  );
}
