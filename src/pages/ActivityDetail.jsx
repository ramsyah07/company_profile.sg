import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ActivityDetail() {
  const { slug } = useParams();

  const activity = {
    title: "Soft Opening\nPT. Salam Generasi Group",
    date: "1 February 2025",
    content: (
      <>
        <h2 className="text-xl font-bold mb-4">Vision</h2>
        <p className="mb-4">
          To be a super holding company that gives and inspires goodness for the whole Earth.
        </p>
        <h2 className="text-xl font-bold mb-4">Mission</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Bring together great people from all aspects of the professional world to unite in realizing a sustainable,
              harmonious and blessed earth.</li>
          <li>Conducting good business activities as a way of sustenance to expand its impact to all people on earth.</li>
          <li>Participate in supporting and being a bulwark in every movement of goodness for the whole earth and humanity.</li>
        </ul>
      </>
    ),
  };

  const otherActivities = [
    {
      title: "Launching Product SG C-1",
      date: "10 February 2025",
      slug: "launching-product-sg-c-1",
    },
    {
      title: "Community Gathering",
      date: "22 February 2025",
      slug: "community-gathering",
    },
    {
      title: "Annual Company Picnic",
      date: "5 March 2025",
      slug: "annual-company-picnic",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-16 max-w-4xl mx-auto">
      {/* Title & Date */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold whitespace-pre-line">{activity.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{activity.date}</p>
      </div>

      {/* Gambar / Video Placeholder */}
      <div className="w-full h-64 bg-gray-300 rounded-2xl mb-8" />

      {/* Content */}
      <div className="text-gray-700 leading-7 space-y-6">{activity.content}</div>

      {/* Other Activities */}
      <div className="mt-16">
        <p className="text-center text-blue-500 font-semibold text-sm mb-2">OTHER ACTIVITIES</p>
        <h3 className="text-center text-2xl font-bold mb-10">Exploring New Horizons, Together</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherActivities.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-200 rounded-2xl p-4 text-center flex flex-col items-center"
            >
              <div className="w-full h-32 bg-gray-300 rounded-xl mb-4" />
              <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 mb-2">{item.date}</p>
              <Link
                to={`/activities/${item.slug}`}
                className="text-xs text-blue-500 font-medium underline"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
