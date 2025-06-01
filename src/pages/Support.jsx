import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const faqs = [
  {
    question: 'What is PT. Salam Generasi Group?',
    answer:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.',
  },
  {
    question: 'What is PT. Salam Generasi Group?',
    answer:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.',
  },
  {
    question: 'What is PT. Salam Generasi Group?',
    answer:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.',
  },
  {
    question: 'What is PT. Salam Generasi Group?',
    answer:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.',
  },
   {
    question: 'What is PT. Salam Generasi Group?',
    answer:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.',
  },
   {
    question: 'What is PT. Salam Generasi Group?',
    answer:
      'Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.',
  },
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative px-4 md:px-10 py-16 bg-white">
      {/* FAQ Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-blue-500 uppercase mb-2">
          Frequently Asked Questions
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">
          Everything you need to know <br /> about the product
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-xl transition-all duration-300 ${
              openIndex === index ? 'bg-gray-200' : 'bg-gray-300'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full p-4 flex justify-between items-center text-left"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
             {/* Animated answer */}
            {/* Content with spring scale + fade */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, scaleY: 0.5 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  exit={{ opacity: 0, scaleY: 0.5 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="px-4 pb-4 text-sm text-gray-800 origin-top"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Floating Buttons */}
    <p className="text-sm text-center mt-6">
        Can’t find the answer you’re looking for? <br />
      <button onClick={() => navigate("/consult")}
    className="text-blue-500 hover:underline">
    Please consult to our friendly team
      </button>
    </p>
    </div>
  );
}