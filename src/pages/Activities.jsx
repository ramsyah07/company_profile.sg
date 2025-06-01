import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const activities = [
  { title: "Soft Opening\nPT. Salam Generasi Group", type: "image" },
  { title: "Launching\nProduct SG C-1", type: "image" },
  { title: "Video", type: "video" },
  { title: "1. Foto Activity", type: "image" },
  { title: "1. Foto Activity", type: "image" },
  { title: "Video", type: "video" },
  { title: "3. Foto Activity", type: "image" },
  { title: "4. Foto Activity", type: "image" },
  { title: "5. Foto Activity", type: "image" },
];

const ActivityCard = ({ title, type }) => {
  const slug = title.toLowerCase().replace(/\s+/g, "-");
  
  return (
    <Link to={`/activities/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className={`relative bg-gray-300 rounded-xl p-4 min-h-[150px] flex flex-col justify-between group ${
          type === "video" ? "md:row-span-2" : ""
        }`}
      >
        <div className="absolute top-2 right-2 text-gray-600 group-hover:text-black transition-all">
          <FaArrowUpRightFromSquare />
        </div>
        <p className="text-sm text-gray-800 mb-1">{type === "video" ? "Video" : "2. Foto Activity"}</p>
        <h4 className="font-semibold whitespace-pre-line text-black">{title}</h4>
      </motion.div>
    </Link>
  );
};

const Activities = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="bg-gray-200 py-20 relative">
        <h2 className="text-center text-2xl mb-12"> Banner Last Activity</h2>
        <div className="container mx-auto px-6 md:px-10 text-center">
          <div className="md:w-1/2 mx-auto">
            <p className="text-gray-900 text-2xl md:text-3xl font-medium">Exploring New Horizons, Together</p>
          </div>
        </div>
      </section>

      {/* Activities Grid Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {activities.map((act, index) => (
          <ActivityCard key={index} title={act.title} type={act.type} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
