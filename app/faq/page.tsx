"use client"

import { Navbar } from "../components/navbar";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Footer } from "../components/footer";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is Eventia?",
    answer:
      "Eventia is a modern event management platform that helps users create, manage, and attend events effortlessly.",
  },
  {
    question: "Is Eventia free to use?",
    answer:
      "Eventia offers both free and premium plans. You can create and browse events for free, while premium users get advanced analytics and promotional tools.",
  },
  {
    question: "How do I create an event?",
    answer:
      "Once you’re logged in, click on the 'Create Event' button in the navigation bar and fill in your event details such as title, date, and description.",
  },
  {
    question: "Can I sell tickets on Eventia?",
    answer:
      "Yes, Eventia allows organizers to set up paid or free ticketing options for their events securely.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team by emailing support@eventia.com or using the live chat option on our website.",
  },
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="lg:text-4xl text-xl mt-10 font-bold text-center mb-8 text-gray-800">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 transition hover:shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500">
            Still have questions?{" "}
            <a
              href="#"
              className="text-[#17364A] font-medium hover:underline"
            >
              Contact our support team
            </a>
            .
          </p>
        </div>
      </div>

      <div className="-mt-7">
        <Footer />
      </div>
    </section>
  );
}