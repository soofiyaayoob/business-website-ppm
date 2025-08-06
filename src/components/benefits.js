
import Image from "next/image";

function Benfits() {
  const benefits = [
     {
    icon: (
      <Image
        src="/premium.svg"
        alt="Premium Paper Quality"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    ),
    title: "Premium Paper Quality",
    description:
      "Ultra-white, 75 GSM based sheets sourced per each high-quality standards from top materials.",
  },
  {
    icon: (
      <Image
        src="/pacakge.svg"
        alt="Bulk Order Expertise"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    ),
    title: "Bulk Order Expertise",
    description:
      "From 1000 to 100,000 units, quick processing to deliver anywhere going to your location efficiently.",
  },
  {
    icon: (
      <Image
        src="/pricing.svg"
        alt="Competitive Pricing"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    ),
    title: "Competitive Pricing",
    description:
      "Get exclusive rates for big deals, paper saved by locations, orders, and bulk purchasing power.",
  },
  {
    icon: (
      <Image
        src="/secure.svg"
        alt="Secure Packaging"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    ),
    title: "Secure Packaging",
    description:
      "Each order is in the wrapped and secured for damage prevention and quality preservation.",
  },
  ];

  return (
    <section
      className="bg-no-repeat bg-cover bg-center py-16 " id="whychooseus"
      style={{ backgroundImage: "url('/bgBenfits.svg')" }} aria-label="Benefits of choosing us" 
    >
      <div className="con-custom  flex flex-col gap-10 sm:gap-20">
        <div className="text-center text-white flex flex-col gap-2">
          <p className="tag">Why Choose Us</p>
          <h2 className="tag-head">
            Why We're the Right
            <br />
            Choice
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center text-white flex flex-col gap-4 items-center"
            >
              <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto  text-black">
                {benefit.icon}
              </div>
              <h3 className=" text-lg font-semibold ">{benefit.title}</h3>
              <p className="text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benfits;
