import Image from "next/image";

function About() {
  const stats = [
    { value: "2+", label: "Years Industry Experience" },
    { value: "100K+", label: "Sheets Delivered Monthly" },
    { value: "100+", label: "Clients Across UAE" },
    { value: "24", label: "Hrs Response Time" },
  ];

  return (
    <div className="con-custom md:py-20 py-10 flex flex-col gap-20" aria-label="About Us" id="about">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <p className="tag ">About Us</p>
          <h2 className="tag-head">
            What Makes Us Different
          </h2>
          <p className="leading-relaxed font-normal ">
           Established in 2022, PPM General Trading LLC  specialize in the wholesale
            distribution of high-quality A4 copy paper to businesses, retailers,
            and exporters across the UAE and beyond. Our focus is on
            consistency, fair pricing, and dependable service, making us a
            preferred supplier in the paper trade industry.
          </p>
          <p className="leading-relaxed ">
            With a strong supply chain, fast delivery, and dedicated support, we
            ensure your paper requirements are always met on time and without
            compromise.
          </p>
          <button className="submission-box h-[48px] w-[148px]">
           <a href="#contact"> Contact Now</a>
          </button>
        </div>

        <div className="relative">
          <Image
            src="/about.svg"
            alt="Paper handling process"
            width={629}
            height={487}
            className="rounded-lg shadow-lg w-full h-80 object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-bold text-[#0A5275] mb-2">
              {stat.value}
            </h3>
            <p className="font-normal text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
