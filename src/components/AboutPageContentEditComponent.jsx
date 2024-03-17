"use client"; 

import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

import SubmitButton from "@/childComponents/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";

const AboutPageContentEditComponent = ({ data }) => {
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (!!data === false) {
        client_api.create("/api/dashboard/about_page/create", {
          top_title_heading: "",
          top_title_heading_theme_color: "",
          top_title_subHeading: "",
          about_profile_img: "",
          info_content_email: "",
          info_content_address: "",
          social_link_facebook: "",
          social_link_twitter: "",
          social_link_linkdin: "",
          social_link_git: "",
          button_title: "",
          button_link: "",
          top_about_section_heading_title: "",
          top_about_section_heading_title_color: "",
          top_about_section_des: "",
          personal_section_heading_title: "",
          personal_section_inner_action_fullName: "",
          personal_section_inner_action_birthday: "",
          personal_section_inner_action_email: "",
          personal_section_inner_action_skype: "",
        });
      }
    };
    fetchData();
  }, []);

  let top_title_headingRef,
    top_title_heading_theme_colorRef,
    top_title_subHeadingRef,
    about_profile_imgRef,
    info_content_emailRef,
    info_content_addressRef,
    social_link_facebookRef,
    social_link_twitterRef,
    social_link_linkdinRef,
    social_link_gitRef,
    button_titleRef,
    button_linkRef,
    top_about_section_heading_titleRef,
    top_about_section_heading_title_colorRef,
    top_about_section_desRef,
    personal_section_heading_titleRef,
    personal_section_inner_action_fullNameRef,
    personal_section_inner_action_birthdayRef,
    personal_section_inner_action_emailRef,
    personal_section_inner_action_skypeRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);

    let top_title_heading = top_title_headingRef.value;
    let top_title_heading_theme_color = top_title_heading_theme_colorRef.value;
    let top_title_subHeading = top_title_subHeadingRef.value;
    let about_profile_img = about_profile_imgRef.value;
    let info_content_email = info_content_emailRef.value;
    let info_content_address = info_content_addressRef.value;
    let social_link_facebook = social_link_facebookRef.value;
    let social_link_twitter = social_link_twitterRef.value;
    let social_link_linkdin = social_link_linkdinRef.value;
    let social_link_git = social_link_gitRef.value;
    let button_title = button_titleRef.value;
    let button_link = button_linkRef.value;
    let top_about_section_heading_title =
      top_about_section_heading_titleRef.value;
    let top_about_section_heading_title_color =
      top_about_section_heading_title_colorRef.value;
    let top_about_section_des = top_about_section_desRef.value;
    let personal_section_heading_title =
      personal_section_heading_titleRef.value;
    let personal_section_inner_action_fullName =
      personal_section_inner_action_fullNameRef.value;
    let personal_section_inner_action_birthday =
      personal_section_inner_action_birthdayRef.value;
    let personal_section_inner_action_email =
      personal_section_inner_action_emailRef.value;
    let personal_section_inner_action_skype =
      personal_section_inner_action_skypeRef.value;

    client_api.update("/api/dashboard/about_page/update", {
      top_title_heading,
      top_title_heading_theme_color,
      top_title_subHeading,
      about_profile_img,
      info_content_email,
      info_content_address,
      social_link_facebook,
      social_link_twitter,
      social_link_linkdin,
      social_link_git,
      button_title,
      button_link,
      top_about_section_heading_title,
      top_about_section_heading_title_color,
      top_about_section_des,
      personal_section_heading_title,
      personal_section_inner_action_fullName,
      personal_section_inner_action_birthday,
      personal_section_inner_action_email,
      personal_section_inner_action_skype,
    }).then((res) => {
      if (res?.status === true) {
        SuccessToast("Page Content Change Success!");
        setSubmit(false);
      } else {
        ErrorToast("Something Went Wrong");
        setSubmit(false);
      }
    })


  };

  return (
    <section>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          About page content edit section
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Top Title Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (top_title_headingRef = input)}
                  defaultValue={data?.top_title_heading}
                  type="text"
                  placeholder="Heading"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (top_title_heading_theme_colorRef = input)}
                  defaultValue={data?.top_title_heading_theme_color}
                  type="text"
                  placeholder="Heading Theme color"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (top_title_subHeadingRef = input)}
                  defaultValue={data?.top_title_subHeading}
                  type="text"
                  placeholder="Sub Heading Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">About Profile Image Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (about_profile_imgRef = input)}
                  defaultValue={data?.about_profile_img}
                  type="text"
                  placeholder="Image CDN Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Info Content Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (info_content_emailRef = input)}
                  defaultValue={data?.info_content_email}
                  type="email"
                  placeholder="Email Address"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (info_content_addressRef = input)}
                  defaultValue={data?.info_content_address}
                  type="text"
                  placeholder="Address"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Social Link Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (social_link_facebookRef = input)}
                  defaultValue={data?.social_link_facebook}
                  type="text"
                  placeholder="Facebook Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (social_link_twitterRef = input)}
                  defaultValue={data?.social_link_twitter}
                  type="text"
                  placeholder="Twitter Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (social_link_linkdinRef = input)}
                  defaultValue={data?.social_link_linkdin}
                  type="text"
                  placeholder="LinkedIn Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (social_link_gitRef = input)}
                  defaultValue={data?.social_link_git}
                  type="text"
                  placeholder="Git Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-base">Button Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (button_titleRef = input)}
                  defaultValue={data?.button_title}
                  type="text"
                  placeholder="Button Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (button_linkRef = input)}
                  defaultValue={data?.button_link}
                  type="text"
                  placeholder="Button Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Top About Content Section Edit
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Heading Title Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (top_about_section_heading_titleRef = input)}
                  defaultValue={data?.top_about_section_heading_title}
                  type="text"
                  placeholder="Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) =>
                    (top_about_section_heading_title_colorRef = input)
                  }
                  defaultValue={data?.top_about_section_heading_title_color}
                  type="text"
                  placeholder="Title Color"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Description Section Edit</label>
              <div className="flex gap-3">
                <textarea
                  ref={(input) => (top_about_section_desRef = input)}
                  defaultValue={data?.top_about_section_des}
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Description"
                  className=" w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Personal Content Section Edit
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Heading Title Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (personal_section_heading_titleRef = input)}
                  defaultValue={data?.personal_section_heading_title}
                  type="text"
                  placeholder="Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Inner Action Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) =>
                    (personal_section_inner_action_fullNameRef = input)
                  }
                  defaultValue={data?.personal_section_inner_action_fullName}
                  type="text"
                  placeholder="Full Name"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) =>
                    (personal_section_inner_action_birthdayRef = input)
                  }
                  defaultValue={data?.personal_section_inner_action_birthday}
                  type="text"
                  placeholder="Birthday"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) =>
                    (personal_section_inner_action_emailRef = input)
                  }
                  defaultValue={data?.personal_section_inner_action_email}
                  type="text"
                  placeholder="Email"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) =>
                    (personal_section_inner_action_skypeRef = input)
                  }
                  defaultValue={data?.personal_section_inner_action_skype}
                  type="text"
                  placeholder="Skype"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px] block">
          <SubmitButton submit={submit} onClick={formSubmit} text="Submit" />
        </div>
      </div>
    </section>
  );
};

export default AboutPageContentEditComponent;
