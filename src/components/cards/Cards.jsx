import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Cards({ image, title, description, link = "#", buttonText = "Read more", alt = "image" }) {

  return (
    <>
    <div className="p-4 w-full md:w-auto">
      <a
        href={link}
        className="flex flex-col items-center bg-rich-black-900 border border-white/5 rounded-sm shadow-xl hover:shadow-glow hover:border-gold-500/50 transition-all duration-500 transform hover:-translate-y-2 md:flex-row md:max-w-xl overflow-hidden group"
      >
        <div className="w-full md:w-48 h-64 md:h-auto overflow-hidden relative">
           <div className="absolute inset-0 bg-gold-500/10 z-10 group-hover:bg-transparent transition-all duration-500"></div>
           <img
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
            src={image}
            alt={alt}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between p-8 leading-normal w-full">
          <h5 className="mb-3 text-2xl font-bold font-display tracking-wide text-neutral-100 group-hover:text-gold-400 transition-colors">
            {title}
          </h5>
          <p className="mb-6 font-sans font-light text-neutral-400 text-sm leading-relaxed">
            {description}
          </p>
          <div>
            <button
              type="button"
              className="inline-flex items-center text-sm font-medium font-sans uppercase tracking-widest text-gold-400 hover:text-gold-200 transition-colors group/btn"
            >
              {buttonText}
              <FaArrowRight className="w-4 h-4 ms-2 transition-transform duration-300 group-hover/btn:translate-x-2" />
            </button>
          </div>
        </div>
      </a>
    </div>
    </>
  );
}
