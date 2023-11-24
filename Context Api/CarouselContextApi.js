import React, { createContext, useState, useContext } from "react";
export const CarouselContext = createContext();

export default function CarouselContextApiProvider({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (totalSlides) => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const prevSlide = (totalSlides) => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  return (
    <CarouselContext.Provider value={{ currentSlide, nextSlide, prevSlide }}>
      {children}
    </CarouselContext.Provider>
  );
}
