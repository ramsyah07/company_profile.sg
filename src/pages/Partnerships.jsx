import React from 'react';

export default function Partnership() {
  const partners = [
    {
      name: "Partnerships Name",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.",
    },
    {
      name: "Partnerships Name",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.",
    },
    {
      name: "Partnerships Name",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Dis a nam rutrum venenatis; conubia velit ipsum consequat. Erat eleifend vel habitant suscipit nulla; inceptos phasellus consequat. Gravida parturient laoreet egestas magnis facilisi morbi ultrices iaculis varius.",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-16 space-y-20">
       {/* Banner Section */}
      <section className="bg-gray-200 py-20 relative">
        <h2 className="text-center text-2xl mb-12">Banner Partnerships</h2>
        <div className="container mx-auto px-6 md:px-10 text-center">
          <div className="md:w-1/2 mx-auto">
            <p className="text-gray-900 text-2xl md:text-3xl font-medium">Innovate, Collaborate, Succees</p>
          </div>
        </div>
      </section>

      {/* Section Title */}
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-500 uppercase mb-1">Meet Our Partners</p>
        <h3 className="text-2xl font-bold leading-snug">
          Connecting Visionaries, <br />
          Creating Opportunities
        </h3>
      </div>

      {/* Partner Cards */}
      <div className="grid gap-10 md:grid-cols-1">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-full h-48 bg-gray-300 rounded-xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">{partner.name}</h4>
            <p className="text-gray-600 text-sm">{partner.description}</p>
          </div>
        ))}
      </div>
       {/* Centered Button */}
      <div className="text-center">
        <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-gradient-to-r from-[#2EA779] to-[#0C5FBA] hover:text-white transition">
          Create Order
        </button>
      </div>
    </section>
    
  );
}

