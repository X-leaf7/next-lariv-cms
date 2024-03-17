"use client"; 
import React from "react";
import { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import SubmitButton from "@/childComponents/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";
const CreateNewSkillComponent = () => {
  const router = useRouter();

  const [submit, setSubmit] = useState(false);
  let titleRef,
    categoryRef,
    subjectRef,
    time_sectionRef,
    percentRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);
    let title = titleRef.value;
    let category = categoryRef.value;
    let time_section = time_sectionRef.value;
    let subject = subjectRef.value;
    let percent = percentRef.value;

    client_api.create("/api/dashboard/skill/create", {
      title,
      category,
      time_section,
      subject,
      percent,
    }).then((res) => {
      if (res.status === true) {
        router.replace("/dashboard/skill/all-skill");
        SuccessToast("Skill Create Success!");
        setSubmit(false);
      } else {
        ErrorToast("Something Went Wrong");
        setSubmit(false);
      }
    });
  };

  return (
    <section>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="m-[30px] rounded-xl bg-[#36404A] p-[30px]">
        <h2 className="text-xl font-medium text-white">Add new skill</h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <div className="flex gap-3">
                <input
                  ref={(input) => (titleRef = input)}
                  type="text"
                  placeholder="Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (categoryRef = input)}
                  type="text"
                  placeholder="Category"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (time_sectionRef = input)}
                  type="text"
                  placeholder="Time"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>

              <div className="flex gap-3">
                <input
                  ref={(input) => (subjectRef = input)}
                  type="text"
                  placeholder="Subject"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (percentRef = input)}
                  type="text"
                  placeholder="Percent"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>

              <div className="mt-[20px] block">
                <SubmitButton
                  submit={submit}
                  onClick={formSubmit}
                  text="Create new skill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNewSkillComponent;
