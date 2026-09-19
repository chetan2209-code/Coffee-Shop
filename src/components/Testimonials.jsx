import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialData = [
  {
    id: 1,
    name: "Sarah Chen",
    text: "The artisanal coffee here is truly exceptional! The rich flavor profiles and cozy ambiance make it my go-to spot every morning for work and relaxation.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Marcus Vance",
    text: "King Cafe serves the best brews in town! Their dark chocolate muffins and signature espresso are simply unmatched in taste and quality.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Elena Rostova",
    text: "Friendly staff, warm atmosphere, and authentic coffee blends. Perfect place for meetings or catching up with friends over afternoon coffee.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Devon Miller",
    text: "Every cup is crafted with precision and care. You can taste the quality of roasted beans in every sip. Highly recommended for coffee enthusiasts!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

const Testimonials = () => {
  return (
    <div id='testimonial' className="py-14 mb-10 bg-amber-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm font-semibold text-amber-800 tracking-wider uppercase mb-1">
            Testimonials
          </p>
          <h1 className="text-4xl font-bold font-cursive text-amber-950">
            What Our Customers Say
          </h1>
        </div>

        <div className="max-w-[1200px] mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            loop={true}
            speed={500}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1 },
              641: { slidesPerView: 2 },
              1025: { slidesPerView: 3 },
            }}
          >
            {TestimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="my-6 px-3">
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 rounded-2xl bg-white border border-amber-100 relative group hover:bg-amber-900 hover:text-white transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <img
                        src={data.img}
                        alt={data.name}
                        className="rounded-full w-16 h-16 object-cover border-2 border-amber-600"
                      />
                      <div>
                        <h2 className="text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                          {data.name}
                        </h2>
                        <p className="text-xs text-amber-700 group-hover:text-amber-200 transition-colors duration-300">
                          Verified Customer
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-sm text-gray-600 group-hover:text-amber-100 leading-relaxed transition-colors duration-300">
                        "{data.text}"
                      </p>
                    </div>

                    <p className="text-amber-200 group-hover:text-amber-800 text-6xl font-serif absolute top-2 right-4 pointer-events-none select-none opacity-50">
                      ”
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;