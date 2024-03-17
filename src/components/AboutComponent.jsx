import { Progress, Typography } from "../helpers/MaterialTailwind.js";
import React from "react";
import {
  FaFacebookF,
  FaGitAlt,
  FaGripfire,
  FaLinkedinIn,
  FaTwitter,
  FaUserTie,
} from "react-icons/fa6";
const AboutComponent = async ({ data }) => {
  let about_page_data = await data?.getAbout_page[0];
  let experience_data = await data?.experience;
  let education_data = await data?.education;
  let skill_data = await data?.skill;
  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-12 lg:col-span-4 lg:pr-[30px]">
            <div className="menuBox">
              <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
                <div className="flex items-center gap-[6px]">
                  <span>
                    <FaUserTie className="fa-light fa-user text-[14px] text-white" />
                  </span>
                  <span className="pl-[6px] text-[14px] text-white">
                    About Us
                  </span>
                </div>
              </div>
            </div>
            <br />
            {/* Profile Info */}
            <div className="info-card mt-[10px] md:mt-[30px]">
              <div className="rounded-[20px]  bg-card px-[30px] py-[40px]">
                <div>
                  <div className="mt-[25px]">
                    <div className="text-center">
                      <h3 className="wow fadeIn animated text-[24px] font-semibold   text-white">
                        {about_page_data?.top_title_heading}
                        <span className="text-theme">
                          {" "}
                          {about_page_data?.top_title_heading_theme_color}
                        </span>
                      </h3>
                      <p className="mt-[6px] text-text">
                        {about_page_data?.top_title_subHeading}
                      </p>
                      <div className="  mt-[26px] flex justify-center">
                        <img
                          src={about_page_data?.about_profile_img}
                          alt="pucu portfolio web template"
                          className="w-full rounded-2xl object-cover"
                        />
                      </div>
                      <div className="mt-[26px]">
                        <p className="text-[20px] text-text">
                          {about_page_data?.info_content_email}
                        </p>
                        <p className="mt-[10px] text-text">
                          {about_page_data?.info_content_address}
                        </p>
                      </div>
                      <div className=" mt-[30px] flex  justify-center gap-3">
                        <a
                          href={about_page_data?.social_link_facebook}
                          className="block"
                        >
                          <FaFacebookF className=" socialRound" />
                        </a>
                        <a
                          href={about_page_data?.social_link_twitter}
                          className="block"
                        >
                          <FaTwitter className=" socialRound" />
                        </a>
                        <a
                          href={about_page_data?.social_link_linkdin}
                          className="block"
                        >
                          <FaLinkedinIn className=" socialRound" />
                        </a>
                        <a
                          href={about_page_data?.social_link_git}
                          className="block"
                        >
                          <FaGitAlt className=" socialRound" />
                        </a>
                      </div>
                      <div className=" mt-[30px]">
                        <a
                          href={about_page_data?.button_link}
                          className="block rounded-full border-2 border-theme bg-theme py-[10px] font-medium text-white transition-all duration-300 hover:bg-transparent "
                        >
                          {about_page_data?.button_title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="mt-[80px]">
              <h2 className="text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px]">
                {about_page_data?.top_about_section_heading_title}

                <span className="text-theme">
                  {" "}
                  {about_page_data?.top_about_section_heading_title_color}
                </span>
              </h2>
              <p className="mt-[20px] text-text">
                {about_page_data?.top_about_section_des}
              </p>
            </div>

            {/* Personal Information */}
            <div className="mt-[60px]">
              <h2 className="text-[32px] font-semibold">
                {about_page_data?.personal_section_heading_title}
              </h2>
              <div className="mt-[20px] grid grid-cols-12 ">
                <div className="col-span-6">
                  <p className=" text-[18px] font-medium">Name</p>
                  <p className="mt-2 text-[16px] text-text">
                    {about_page_data?.personal_section_inner_action_fullName}
                  </p>
                </div>
                <div className="col-span-6">
                  <p className=" text-[18px] font-medium">Birthday</p>
                  <p className="mt-2 text-[16px] text-text">
                    {about_page_data?.personal_section_inner_action_birthday}
                  </p>
                </div>
              </div>
              <div className="mt-[20px] grid grid-cols-12">
                <div className="col-span-6">
                  <p className=" text-[18px] font-medium">Email</p>
                  <p className="mt-2 text-[16px] text-text">
                    {about_page_data?.personal_section_inner_action_email}
                  </p>
                </div>
                <div className="col-span-6">
                  <p className=" text-[18px] font-medium">Skype</p>
                  <p className="mt-2 text-[16px] text-text">
                    {about_page_data?.personal_section_inner_action_skype}
                  </p>
                </div>
              </div>
            </div>

            {/* Working Experience Information */}
            <div className="mt-[60px]">
              <h2 className="text-[32px] font-semibold">
                Working <span className="text-theme">Experience:</span>
              </h2>
              <div className="items mt-[40px] grid gap-[40px]">
                <div className="item relative grid gap-[40px] border-l-[2px] border-text pb-[16px] pl-[35px]">
                  <FaGripfire className="absolute left-[-16px] top-[-25px] text-[30px] text-text" />

                  {experience_data?.map((item, index) => (
                    <div key={index}>
                      <p className="text-text">{item?.time_section}</p>
                      <h3 className="mt-[10px] text-[20px] font-medium text-white md:text-[25px]">
                        {item?.title}
                      </h3>
                      <p className="mt-[5px] text-[18px] font-medium text-text">
                        {item?.company}
                      </p>
                      <p className="mt-[15px] text-text">{item?.long_des}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Information */}
            <div className="mt-[60px]">
              <h2 className="text-[32px] font-semibold">
                Educational <span className="text-theme">Qualifications:</span>
              </h2>
              <div className="items mt-[40px] grid gap-[40px]">
                <div className="item relative grid gap-[40px] border-l-[2px] border-text pb-[16px] pl-[35px]">
                  <FaGripfire className="absolute left-[-16px] top-[-25px] text-[30px] text-text" />

                  {education_data?.map((item, index) => (
                    <div key={index}>
                      <p className="text-text">{item?.time_section}</p>
                      <h3 className="mt-[10px] text-[20px] font-medium text-white md:text-[25px]">
                        {item?.title}
                      </h3>
                      <p className="mt-[5px] text-[18px] font-medium text-text">
                        {item?.institute}
                      </p>
                      <p className="mt-[15px] text-text">{item?.long_des}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skill Information */}
            <div className="mt-[60px]">
              <h2 className="text-[32px] font-semibold">
                My <span className="text-theme">Advantages:</span>
              </h2>
              <div className="items mt-[40px] grid gap-[40px]">
                <div className="item relative grid gap-[40px] border-l-[2px] border-text pb-[16px] pl-[35px]">
                  <FaGripfire className="absolute left-[-16px] top-[-25px] text-[30px] text-text" />

                  {skill_data?.map((item, index) => (
                    <div key={index}>
                      <p className="text-text">{item?.time_section}</p>
                      <h3 className="mt-[10px] text-[20px] font-medium text-white md:text-[25px]">
                        {item?.title}
                      </h3>
                      <p className="mt-[5px] text-[18px] font-medium text-text">
                        {item?.category}
                      </p>
                      <div className="mt-[20px] w-full">
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <Typography
                            className="text-[16px] font-medium text-white"
                            variant="p"
                          >
                            {item?.title}
                          </Typography>
                          <Typography className="text-white" variant="h6">
                            {item?.percent}%
                          </Typography>
                        </div>
                        <Progress
                          value={item?.percent}
                          size="lg"
                          className="progress border border-theme/20 bg-theme/10 p-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
