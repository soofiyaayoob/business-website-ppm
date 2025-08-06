import { Star } from "lucide-react";
import Image from "next/image";
// inside your JSX

function Products() {
  const HalfStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 640"
      width="20"
      height="20"
      fill="#FFD43B"
    >
      <path d="M320.1 417.6C330.1 417.6 340 419.9 349.1 424.6L423.5 462.5L410.5 380C407.3 359.8 414 339.3 428.4 324.8L487.4 265.7L404.9 252.6C384.7 249.4 367.2 236.7 357.9 218.5L319.9 144.1L319.9 417.7zM489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32C329.2 32 337.5 37.1 341.6 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553z" />
    </svg>
  );

  return (
    <section className="con-custom md:pb-20 pb-10" aria-label="Our Products details" id="product">
      <div className="flex flex-col gap-4">
        <p className="tag">Products</p>
        <h2 className="tag-head">What We Offer</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative ">
          <Image
            src="/
            Product.svg"
            width={10}
            height={480}
            alt="Premium A4 Copy Paper Stack"
            className="rounded-3xl shadow-lg h-full w-full h-64 object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-bold">Premium A4 Copy Paper-80 GSM</h3>
          <p className="">
            High-quality, ultra-white A4 copy paper designed for smooth,
            jam-free printing. Ideal for offices, schools, and distributors.
          </p>

          {/* Star Rating */}
          <div className="flex items-center ">
            <div className="flex text-yellow-400 font-roboto">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400" />
              ))}
              <HalfStar />
            </div>
            <span className="ml-2">(4.5 stars)</span>
          </div>

          {/* Specifications */}
          <div className="space-y-3">
            <h4 className="font-bold  ">Key Specifications:</h4>

            <div className="grid grid-cols-1 gap-1 sm:text-sm text-xs text-grey-600">
              <div className="flex justify-between">
                <span>Size & Weight:</span>
                <span>A4 (297 × 210 mm) - 80 GSM</span>
              </div>
              <div className="flex justify-between">
                <span>Whiteness:</span>
                <span>94% – 100%</span>
              </div>
              <div className="flex justify-between">
                <span>Count per Pack:</span>
                <span>5 Reams per Carton (1 Ream = 500 Sheets)</span>
              </div>
              <div className="flex justify-between">
                <span>Material:</span>
                <span>100% Wood Pulp</span>
              </div>
              <div className="flex justify-between">
                <span>Features:</span>
                <span>High Smoothness, Optimal Thickness</span>
              </div>
              <div className="flex justify-between">
                <span>Applications:</span>
                <span>Print, Write, Fax, Drawing, etc.</span>
              </div>
            </div>
          </div>

          <button className="submission-box p-2 w-full">
            <a
        href="https://wa.me/919847774770?text=Hello(inquiry from website), %0A I would like to know more about A4 sheet bulk ordering."
        target="_blank"
        rel="noopener noreferrer"
      > Enquire Now</a>
           
            </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
