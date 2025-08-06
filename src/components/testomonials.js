"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "We've been ordering A4 paper in bulk from PPM General Trading LLC for over a year now. The quality is consistently excellent and delivery is always on time.",
      author: "Ravi Kumar",
      position: "Office Supplies, Dubai",
    },
    {
      id: 2,
      rating: 4,
      text: "High-quality paper, reliable packaging, and great customer service. Our printing business depends on fast supply, and they've never let us down.",
      author: "Sarah Thomas",
      position: "Express Print Hub",
    },
    {
      id: 3,
      rating: 5,
      text: "We rely on PPM General Trading LLC for all our bulk paper needs. The paper quality is excellent and their delivery is prompt every time.",
      author: "Mohammed Ali",
      position: "Al Noor Traders",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  // const getInitials = (name) => {
  //   return name
  //     .split(" ")
  //     .map((word) => word[0])
  //     .join("")
  //     .toUpperCase();
  // };
 
  const getInitials = (name) => {
  return (name.match(/\b\w/g) || []).join('').toUpperCase();
};

  return (
    <section className="con-custom py-16 inline-grid gap-8" aria-label="Testimonials and 5 Star Reviews"id="testimonials">
      <div className=" sm:max-w-[45%] max-w-[100%] inline-grid gap-5">
        <p className="tag">Testimonial</p>
        <h2 className="tag-head">
          Customer Voices That
          <br />
          Speak Quality
        </h2>
        <p className="">
          See why businesses across the region rely on us for their A4 paper
          supply needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`bg-white rounded-lg p-6 shadow-lg transition-all duration-300 ${
              index === currentTestimonial ? "ring-2 ring-[#0A5275] scale-105" : ""
            }`}
          >
            <div className="flex flex-col gap-3">
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                  {getInitials(testimonial.author)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="justify-between flex items-center ">
        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-500 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
