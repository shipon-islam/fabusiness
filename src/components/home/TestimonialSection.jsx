"use client";
import largeCoin from "@/assets/home/coin-large.jpg"; // Assuming you have a large coin image for the background
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
// import required modules
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeading from "../CommonHeading";
import Rating from "../Rating";
export default function TestimonialSection({ feedbacks }) {
  return (
    <section className="bg-darkSlate">
      <div className="">
        <div className="text-center py-8 sm:py-10 lg:py-14  container">
          <CommonHeading
            heading="Testimonials"
            subHeading="Our Valued Clients Share Their Experiences"
            subClassName="text-white text-3xl sm:text-3xl"
            className="!text-2xl"
          />
        </div>

        <div
          style={{ backgroundImage: `url(${largeCoin.src})` }}
          className={` bg-cover bg-center py-20 `}
        >
          <div className="container">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 60,
                },
                1280: {
                  spaceBetween: 50,
                  slidesPerView: 3,
                },
              }}
              loop={true}
              autoHeight={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              modules={[Autoplay]}
            >
              {feedbacks?.map((item) => {
                return (
                  <SwiperSlide style={{ height: "100%" }} key={item.id}>
                    <div
                      key={item._id}
                      className="bg-gold p-10 rounded-md custom-shadow transition-all duration-300 h-[350px] relative"
                    >
                      <div>
                        <Rating rating={item.rating} />
                        <p className="mt-3 font-roboto capitalize">
                          {item.feedback.slice(0, 250)}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-4 absolute bottom-5">
                        <Image
                          src={`/api/uploads/feedback/${item.image}`}
                          alt="client"
                          width={50}
                          height={50}
                          className="rounded-full size-12 object-cover border-2 border-lightBlue shadow-lg"
                        />
                        <div>
                          <h5 className="text-lg font-semibold text-darkSlate capitalize">
                            {item.clientName}
                          </h5>
                          <h5 className="text-sm lg:text-[1rem] text-darkSlate capitalize">
                            {item.clientPosition}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
