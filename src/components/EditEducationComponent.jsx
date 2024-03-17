"use client"; 
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import SubmitButton from "@/childComponents/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";
const EditEducationComponent = ({ id }) => {
  const router = useRouter();
  const [data, setData] = useState([]);

  const [submit, setSubmit] = useState(false);
  let titleRef,
    instituteRef,
    time_sectionRef,
    long_desRef = useRef();

  useEffect(() => {
    client_api.get(`/api/dashboard/education/read-single?id=${id}`).then((res) => {
      if (res?.status === true) {
        setData(res?.data[0]);
        setEditorData(res?.data[0]?.long_des);
      }
    });
  }, []);

  const formSubmit = async () => {
    setSubmit(true);
    let title = titleRef.value;
    let institute = instituteRef.value;
    let time_section = time_sectionRef.value;
    let long_des = long_desRef.value;

    client_api.update(`/api/dashboard/education/update?id=${id}`, {
      title,
      institute,
      time_section,
      long_des
    }).then((res) => {
      if (res?.status === true) {
        SuccessToast("Experience Update Success!");
        router.replace("/dashboard/education/all-education");
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
        <h2 className="text-xl font-medium text-white">Update education</h2>
        <div className="mt-[16px]">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <div className="flex gap-3">
                <input
                  ref={(input) => (titleRef = input)}
                  defaultValue={data?.title}
                  type="text"
                  placeholder="Title"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (instituteRef = input)}
                  defaultValue={data?.institute}
                  type="text"
                  placeholder="Company Name"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (time_sectionRef = input)}
                  defaultValue={data?.time_section}
                  type="text"
                  placeholder="Time"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="flex gap-3">
                <textarea
                  ref={(input) => (long_desRef = input)}
                  defaultValue={data?.long_des}
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="Description"
                  className=" w-full rounded-lg border border-border bg-transparent p-3 outline-none placeholder:text-sm"
                ></textarea>
              </div>
              <div className="mt-[20px] block">
                <SubmitButton
                  submit={submit}
                  onClick={formSubmit}
                  text="Update education"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditEducationComponent;
