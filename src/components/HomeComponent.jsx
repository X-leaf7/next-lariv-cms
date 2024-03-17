import Link from "next/link"; 
import React from "react";
import { FaSeedling } from "react-icons/fa6";

const HomeComponent = ({ data }) => {
  let home_data = data.home_data[0];
  let service_data = data.service_data;

  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        {/* Intro Section */}
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="order-2 col-span-12 mt-[40px] py-[40px] md:mt-0 md:pr-[60px] lg:order-1 lg:col-span-8">
            <p className="text-[22px]">
              <span className="text-theme">
                {home_data?.top_section_subTitleColor}
              </span>{" "}
              {home_data?.top_section_subTitle}
            </p>
            <h2 className="relative mt-[20px] inline-block text-[32px]  font-semibold leading-tight md:text-[62px]">
              {home_data?.top_section_heading_title_1}
              <span className=" absolute bottom-[15px] right-[-100px]">
                <img
                  src="assets/images/icon/icon-1.png"
                  alt=""
                  className="wobble-hor-bottom"
                />
              </span>
            </h2>
            <h2 className=" text-[52px] font-semibold leading-tight md:text-[62px]">
              {home_data?.top_section_heading_title_2}{" "}
              <span className="text-theme">
                {home_data?.top_section_heading_title_3}
              </span>
            </h2>
            <br />
            <p className="text-text">{home_data?.top_section_description}</p>
            <div className="mt-[50px]">
              <Link
                href={`${home_data?.top_section_button_cover_link}`}
                className="btn"
              >
                {home_data?.top_section_button_cover_text}
              </Link>
            </div>

            {/* Count Section */}
            <div className="mt-[60px] grid grid-cols-12 gap-[30px] md:gap-[30px]">
              <div className="col-span-12 md:col-span-4">
                <h2 className="  text-[50px] font-semibold  ">
                  <span className="counter">
                    {home_data?.counter_section_one_count_number}
                  </span>
                  +
                </h2>
                <p className="   text-white">
                  {home_data?.counter_section_one_count_des}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h2 className="  text-[50px] font-semibold  ">
                  <span className="counter">
                    {home_data?.counter_section_two_count_number}
                  </span>
                  +
                </h2>
                <p className="   text-white">
                  {home_data?.counter_section_two_count_des}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <h2 className="  text-[50px] font-semibold  ">
                  <span className="counter">
                    {home_data?.counter_section_three_count_number}
                  </span>
                  +
                </h2>
                <p className="   text-white">
                  {home_data?.counter_section_three_count_des}
                </p>
              </div>
            </div>

            {/* Inner Card */}
            <div className="mt-[60px] grid grid-cols-12 gap-[30px]">
              <div className="col-span-12 md:col-span-4 ">
                <Link href="/service">
                  <div className=" grid gap-[20px] rounded-lg border-2 border-dotted border-text p-[20px]">
                    <h3 className="text-center text-[24px]">Services</h3>
                    <div className="flex  justify-around  p-[10px] gap-4">
                      {service_data?.slice(0, 3).map((item, index) => (
                        <img
                          key={index}
                          src={item?.img}
                          alt=""
                          className="w-[50px]"
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-span-12 md:col-span-4 ">
                <Link href="/portfolio">
                  <div className=" grid gap-[10px] rounded-lg border-2 border-dotted border-text p-[20px]">
                    <h3 className="text-center text-[24px]">Portfolio</h3>
                    <div className="flex  justify-around">
                      <img src="assets/images/show/show-1.png" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-span-12 md:col-span-4 ">
                <Link href="/about">
                  <div className=" grid gap-[34px] rounded-lg border-2 border-dotted border-text p-[20px]">
                    <h3 className="text-center text-[24px]">About Us</h3>
                    <div className="flex  justify-around p-[10px]">
                      <img src="assets/images/logo.svg" alt="" />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className=" order-1 col-span-12 lg:order-2 lg:col-span-4">
            <div className=" relative mt-[50px] ">
              <div>
                <img src={home_data?.profile_img} alt="" className=" w-full" />
                <img
                  src="assets/images/icon/figma.png"
                  alt=""
                  className="slide-top-1 absolute left-[-10px] top-[90px] w-[60px] md:top-[170px] md:w-[80px] lg:top-[120px]"
                />
                <img
                  src="assets/images/icon/photoshop-logo.png"
                  alt=""
                  className="slide-top-2 absolute right-[-10px] top-[260px] w-[60px] md:top-[450px] md:w-[80px] lg:top-[250px]"
                />
              </div>
              <div className="pulse absolute bottom-[-50px] right-[40px] flex items-center gap-[20px] rounded-full bg-card px-[40px] py-[18px] md:bottom-[-17px] lg:right-[-34px]">
                <div>
                  <FaSeedling className="text-[40px] text-theme" />
                </div>
                <div>
                  <h2 className="text-[26px] font-semibold">
                    {home_data?.profile_shape_counter} k+
                  </h2>
                  <p className="text-base text-white">
                    {home_data?.profile_shape_text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComponent;
