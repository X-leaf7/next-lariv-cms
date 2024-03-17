"use client"; 
import React from "react";
import { FaCodeMerge } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const ServiceComponent = ({ data }) => {
  let service_page_data = data?.service_page_data[0];
  let service_data = data?.service_data;
  let review_data = data?.review_data;

  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        <div className="menuBox">
          <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
            <div className="flex items-center gap-[6px]">
              <span>
                <FaCodeMerge className="fa-light fa-user text-[14px] text-white" />
              </span>
              <span className="pl-[6px] text-[14px] text-white">
                All Service
              </span>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-[10px] md:mt-[20px]">
          <h2 className="text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px] md:w-[80%]">
            {service_page_data?.heading_title}
            <span className="text-theme">
              {" "}
              {service_page_data?.heading_title_color}
            </span>
          </h2>
          <p className="mt-[20px] text-text lg:w-[60%]">
            {service_page_data?.heading_title_des}
          </p>
        </div>

        <div className="mt-[60px] md:mt-[80px]">
          <div className="grid  gap-y-[60px] md:grid-cols-12  md:gap-x-[30px]">
            {service_data.map((item, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="relative rounded-lg border border-text p-[20px]">
                  <div className="sup  h-[60px] w-[60px] items-center justify-center rounded-2xl ">
                    <img src={item?.img} alt="" className="w-full h-full " />
                  </div>
                  <div className="pt-[20px]">
                    <h2 className="text-[20px] font-medium text-white md:text-[26px]">
                      {item?.title}
                    </h2>
                    <p className="mt-[10px] text-text">{item?.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Information */}
        <div className="mt-[100px]">
          <h2 className="text-[32px] font-semibold">What People Says?:</h2>

          {/* Slider */}
          <div className="mt-[30px]">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={4}
              slidesPerGroup={2}
              speed={1000}
              pagination={{ clickable: true }}
              autoplay={{ delay: 6000 }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                500: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                992: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
                1400: {
                  slidesPerView: 3,
                  slidesPerGroup: 2,
                },
              }}
            >
              {review_data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className=" divide-y divide-dashed divide-theme rounded-xl  bg-card px-[30px] py-[40px] shadow-none">
                    <p className="pb-[30px] text-[18px] italic text-text">
                      {item?.long_des}
                    </p>

                    <div className="flex items-center gap-4 pt-[30px]">
                      <div className="inline-block w-[80px] overflow-hidden rounded-full">
                        <img src={item?.img} alt="" />
                      </div>
                      <div className="grid gap-[10px]">
                        <p className="text-base font-semibold text-white  lg:text-[24px]">
                          {item?.name}
                        </p>
                        <p>{item?.address}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
