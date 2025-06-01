// src/components/ProductSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProductSlider = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <div className="bg-gray-300 h-64 rounded-xl flex items-center justify-center text-lg font-medium">
              {`Slide ${item}`}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
