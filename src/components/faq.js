"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Faq() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What GSM paper do you supply?",
      answer:
        "We primarily supply 80 GSM premium A4 copy paper, suitable for both office and commercial printing needs.",
    },
    {
      id: 2,
      question: "Is there a minimum order quantity?",
      answer:
        "Yes, we have minimum order quantities that vary by product type. Please contact us for specific details about minimum orders for your requirements.",
    },
    {
      id: 3,
      question: "Do you offer delivery across the UAE?",
      answer:
        "Yes, we provide delivery services across all emirates in the UAE. Delivery times and costs may vary based on location and order size.",
    },
    {
      id: 4,
      question: "How do I place an order?",
      answer:
        "You can place an order by contacting us directly through phone, email, or our online contact form. Our team will guide you through the process and provide a quote.",
    },
    {
      id: 5,
      question: "Can I request a sample before bulk ordering?",
      answer:
        "Absolutely! We encourage customers to request samples before placing bulk orders. This ensures the paper quality meets your specific requirements.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
      {/* FAQ Section */}
      <div
        className="con-custom py-16 flex flex-col sm:gap-25 gap-10 justify-center items-center"
        aria-label="frequently asked questions"id="faq"
      >
        {/* Heading */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="tag-head font-bold">FAQs</h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know before placing your order.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 max-w-2xl w-full mx-auto px-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden w-full"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-start justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-medium text-gray-900 pr-4 text-base leading-snug text-left">
                  {faq.question}
                </span>
                {openFAQ === faq.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0 mt-1" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0 mt-1" />
                )}
              </button>

              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openFAQ === faq.id
                    ? "max-h-40 opacity-100 pb-4"
                    : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <p className="text-gray-600 leading-relaxed break-words text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions section */}
        <div className="text-center flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Still have questions?</h3>
          <p>Have a custom request or question? Contact us directly.</p>
          <button className="submission-box py-3 px-5 mx-auto">
            <a href="#contact" className="text-white">
              Connect Now
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Faq;
