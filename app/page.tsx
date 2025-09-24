"use client";
import Image from "next/image";
import { Navbar } from "./components/navbar";
import { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-28 mt-24 lg:bg-[#17364A] lg:p-20 rounded-4xl mb-20">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 mt-7">
        <h1 className="text-[#17364A] lg:text-4xl text-2xl font-medium">
          Latest Events
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-5 mb-20">
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events1.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                BTS Super Home Coming Show
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 01 December 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Korea Show Arena, Korea 
              </p>
              <button className="bg-[#17364A] text-white px-6 py-3 rounded-full mt-5 font-medium hover:bg-gray-800 transition w-full">
                Book Now
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events4.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                Coffee Shop Show
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 01 October 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Primes Mart Coffee Shop, UK
              </p>
              <button className="bg-[#17364A] text-white px-6 py-3 rounded-full mt-5 font-medium hover:bg-gray-800 transition w-full">
                Book Now
              </button>
            </div>
          </div>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events5.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                Milly and Albert Exclusive Wedding
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 01 November 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Grand Royal Palace, New York
              </p>
              <button className="bg-[#17364A] text-white px-6 py-3 rounded-full mt-5 font-medium hover:bg-gray-800 transition w-full">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20 mt-7">
        <h1 className="text-[#17364A] lg:text-4xl text-2xl font-medium">
          Past Events
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-5 mb-20">
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events2.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                Coldplay Show, New Jersey
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 01 August 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> New Jersey Stadium Arena 
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events3.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                Brooklyn Business Seminar
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 10 August 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Scale Arena, Booklyn, NY
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events6.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                Chicago High School Reunion
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 28 July 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Malleys Place, Chicago
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events7.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                Milly and Albert Exclusive Wedding
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 01 August 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Grand Royal Palace, New York
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events8.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                Milly and Albert Exclusive Wedding
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 01 August 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Grand Royal Palace, New York
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">
            <Image
              src="/events9.jpg"
              alt="event"
              width={350}
              height={350}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
                Milly and Albert Exclusive Wedding
              </h1>
              <p className="text-gray-600 mt-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" /> 01 August 2025
              </p>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Grand Royal Palace, New York
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
