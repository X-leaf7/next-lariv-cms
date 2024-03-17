"use client"; 

import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import SubmitButton from "@/childComponents/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";

const HomePageContentEditComponent = ({ data }) => {


  useEffect(() => {
    const fetchData = async () => {
      if (!!data === false) {
        client_api.create("/api/dashboard/home_page/create", {
          top_section_subTitleColor: "",
          top_section_subTitle: "",
          top_section_heading_title_1: "",
          top_section_heading_title_2: "",
          top_section_heading_title_3: "",
          top_section_description: "",
          top_section_button_cover_text: "",
          top_section_button_cover_link: "",
          counter_section_one_count_number: "",
          counter_section_one_count_des: "",
          counter_section_two_count_number: "",
          counter_section_two_count_des: "",
          counter_section_three_count_number: "",
          counter_section_three_count_des: "",
          profile_img: "",
          profile_shape_counter: "",
          profile_shape_text: "",
        });
      }
    };
    fetchData();
  }, []);

  const [submit, setSubmit] = useState(false);
  let top_section_subTitleColorRef,
    top_section_subTitleRef,
    top_section_heading_title_1Ref,
    top_section_heading_title_2Ref,
    top_section_heading_title_3ref,
    top_section_descriptionRef,
    top_section_button_cover_textRef,
    top_section_button_cover_linkRef,
    counter_section_one_count_numberRef,
    counter_section_one_count_desRef,
    counter_section_two_count_numberRef,
    counter_section_two_count_desRef,
    counter_section_three_count_numberRef,
    counter_section_three_count_desRef,
    profile_imgRef,
    profile_shape_counterRef,
    profile_shape_textRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);

    let top_section_subTitleColor = top_section_subTitleColorRef.value;
    let top_section_subTitle = top_section_subTitleRef.value;
    let top_section_heading_title_1 = top_section_heading_title_1Ref.value;
    let top_section_heading_title_2 = top_section_heading_title_2Ref.value;
    let top_section_heading_title_3 = top_section_heading_title_3ref.value;
    let top_section_description = top_section_descriptionRef.value;
    let top_section_button_cover_text = top_section_button_cover_textRef.value;
    let top_section_button_cover_link = top_section_button_cover_linkRef.value;
    let counter_section_one_count_number =
      counter_section_one_count_numberRef.value;
    let counter_section_one_count_des = counter_section_one_count_desRef.value;
    let counter_section_two_count_number =
      counter_section_two_count_numberRef.value;
    let counter_section_two_count_des = counter_section_two_count_desRef.value;
    let counter_section_three_count_number =
      counter_section_three_count_numberRef.value;
    let counter_section_three_count_des =
      counter_section_three_count_desRef.value;
    let profile_img = profile_imgRef.value;
    let profile_shape_counter = profile_shape_counterRef.value;
    let profile_shape_text = profile_shape_textRef.value;

    client_api.update("/api/dashboard/home_page/update", {
      top_section_subTitleColor,
      top_section_subTitle,
      top_section_heading_title_1,
      top_section_heading_title_2,
      top_section_heading_title_3,
      top_section_description,
      top_section_button_cover_text,
      top_section_button_cover_link,
      counter_section_one_count_number,
      counter_section_one_count_des,
      counter_section_two_count_number,
      counter_section_two_count_des,
      counter_section_three_count_number,
      counter_section_three_count_des,
      profile_img,
      profile_shape_counter,
      profile_shape_text,
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
          Home Page content Edit Section
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Top Section Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (top_section_subTitleColorRef = input)}
                  defaultValue={data?.top_section_subTitleColor}
                  type="text"
                  placeholder="Subtitle Color"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (top_section_subTitleRef = input)}
                  defaultValue={data?.top_section_subTitle}
                  type="text"
                  placeholder="Subtitle"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="flex gap-3">
                <input
                  ref={(input) => (top_section_heading_title_1Ref = input)}
                  defaultValue={data?.top_section_heading_title_1}
                  type="text"
                  placeholder="Heading Title-1"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (top_section_heading_title_2Ref = input)}
                  defaultValue={data?.top_section_heading_title_2}
                  type="text"
                  placeholder="Heading Title-2"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (top_section_heading_title_3ref = input)}
                  defaultValue={data?.top_section_heading_title_3}
                  type="text"
                  placeholder="Heading Title-3 Color"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Description Content Edit</label>
              <div className="flex gap-3">
                <textarea
                  ref={(input) => (top_section_descriptionRef = input)}
                  defaultValue={data?.top_section_description}
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Description"
                  className=" w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                ></textarea>
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Button Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (top_section_button_cover_textRef = input)}
                  defaultValue={data?.top_section_button_cover_text}
                  type="text"
                  placeholder="Button Cover Text"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (top_section_button_cover_linkRef = input)}
                  defaultValue={data?.top_section_button_cover_link}
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
        <h2 className="text-xl font-medium text-white">Counter Section Edit</h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Counter Section One Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (counter_section_one_count_numberRef = input)}
                  defaultValue={data?.counter_section_one_count_number}
                  type="text"
                  placeholder="Count Number"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (counter_section_one_count_desRef = input)}
                  defaultValue={data?.counter_section_one_count_des}
                  type="text"
                  placeholder="Description"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Counter Section Two Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (counter_section_two_count_numberRef = input)}
                  defaultValue={data?.counter_section_two_count_number}
                  type="text"
                  placeholder="Count Number"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (counter_section_two_count_desRef = input)}
                  defaultValue={data?.counter_section_two_count_des}
                  type="text"
                  placeholder="Description"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Counter Section Three Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) =>
                    (counter_section_three_count_numberRef = input)
                  }
                  defaultValue={data?.counter_section_three_count_number}
                  type="text"
                  placeholder="Count Number"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (counter_section_three_count_desRef = input)}
                  defaultValue={data?.counter_section_three_count_des}
                  type="text"
                  placeholder="Description"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">
          Home Profile Image Edit Section
        </h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <label className="text-base">Profile Image Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (profile_imgRef = input)}
                  defaultValue={data?.profile_img}
                  type="text"
                  placeholder="Image Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-base">Shape Content Edit</label>
              <div className="flex gap-3">
                <input
                  ref={(input) => (profile_shape_counterRef = input)}
                  defaultValue={data?.profile_shape_counter}
                  type="text"
                  placeholder="Counter"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (profile_shape_textRef = input)}
                  defaultValue={data?.profile_shape_text}
                  type="text"
                  placeholder="Text info"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="mt-[40px] block">
            <SubmitButton submit={submit} onClick={formSubmit} text="Submit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageContentEditComponent;
