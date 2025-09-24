"use client";
import Image from "next/image";
import { Navbar } from "./components/navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const images = [
    "/events1.jpg",
    "/events2.jpg",
    "/events3.jpg",
    "/events4.jpg",
    "/events5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section>
      <div>
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 mt-7 lg:bg-[#17364A] lg:p-20 rounded-4xl">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-10">
          <div>
            <h1 className="lg:text-4xl text-2xl font-medium lg:text-white">
              Welcome to Eventia
            </h1>
            <h1 className="lg:text-3xl text-xl font-medium lg:text-white">
              Let’s Book Your Event
            </h1>
            <p className="lg:text-white">
              Book live events and discover concerts, events, theatre, and more
            </p>
            <button className="lg:bg-white bg-[#17364A] lg:w-fit w-full lg:text-[#17364A] text-white px-6 py-3 rounded-full mt-5 font-medium lg:hover:bg-gray-200 transition">
              Get Started
            </button>
          </div>

          <div>
            <Image
              src={images[currentIndex]}
              alt="event"
              width={450}
              height={450}
              className="rounded-lg transition-all duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
