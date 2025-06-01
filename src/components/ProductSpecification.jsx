import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhp, FaDatabase } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";

const ProductSpecification = ({ product }) => {
  const navigate = useNavigate();

  if (!product) return null;
   
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h5 className="text-sm text-blue-600 font-semibold mb-2">SPECIFICATION</h5>
      <h2 className="text-2xl font-bold text-black mb-8">Precision in Every Detail</h2>

      {/* Informasi Utama Produk */}
      <div className="bg-gray-100 rounded-xl py-10 px-6 max-w-md mx-auto shadow-sm mb-12">
      <h3 className="text-2xl font-bold mb-4">Precision in Every Detail</h3>

      {/* Gambar atau icon placeholder */}
      <div className="w-24 h-24 rounded-full bg-gray-300 mx-auto mb-4"></div>

      {/* Nama Produk */}
      <h4 className="text-lg font-bold text-gray-900 mb-2">SG C-1</h4>

      {/* Deskripsi */}
      <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
        Description about the features in sales and marketing (departments, leads,
        campaigns, customers, incentives, service usage, contacts).
      </p>
         <button
          onClick={() => navigate("/order")}
          className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700"
        >
          Order
        </button>
      </div>

         {/* Spesifikasi Teknis */}
      <div className="space-y-8">
        <div>
          <FaPhp className="text-blue-500 text-3xl mx-auto" />
          <h4 className="font-semibold text-black mt-2">Language</h4>
          <p className="text-sm text-black">{product.language}</p>
        </div>

        <div>
          <SiLaravel className="text-red-500 text-3xl mx-auto" />
          <h4 className="font-semibold text-black mt-2">Framework</h4>
          <p className="text-sm text-black">{product.framework}</p>
        </div>

        <div>
          <FaDatabase className="text-black text-3xl mx-auto" />
          <h4 className="font-semibold text-black mt-2">Database</h4>
          <p className="text-sm text-black">{product.database}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecification;
