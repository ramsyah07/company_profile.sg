// src/pages/DetailHistory.jsx
export default function DetailHistory() {
  return (
    <>
  {/* Banner Section */}
  <section className="bg-gray-200 py-20 relative">
  {/* Title di tengah atas */}
  <h2 className="text-center text-2xl md:text-3xl font-medium mb-12">1. Banner Timeline History </h2>

        {/* Konten utama */}
        <div className="container mx-auto px-6 md:px-10 text-center">
          <div className="md:w-1/2">

          </div>
        </div>
      </section>
      <section className="py-16 px-4 text-center">
        <h3 className="text-sm text-blue-700 font-semibold mb-2 tracking-widest">
          DETAIL HISTORY
        </h3>

        <div className="max-w-6xl mx-auto">
          {[2025, 2024, 2023, 2022, 2021].map((year) => (
            <div key={year} className="mb-10">
              <h4 className="text-left font-bold text-lg mb-4">{year}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl p-6 ${
                      idx === 1 ? "bg-blue-900 text-white" : "bg-gray-200 text-black"
                    }`}
                  >
                    <div className="bg-white text-black rounded-xl py-10 mb-4">
                      {idx}. Foto History
                    </div>
                    <p className="font-semibold">History's Name</p>
                    <p className="text-sm">Date/Month/Year</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


