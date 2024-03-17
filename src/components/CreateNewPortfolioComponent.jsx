"use client"; 
import React from "react";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import SubmitButton from "@/childComponents/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";
const CreateNewPortfolioComponent = () => {
  const router = useRouter();

  const [submit, setSubmit] = useState(false);
  let titleRef,
    categoryRef,
    linkRef,
    imgRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);
    let title = titleRef.value;
    let category = categoryRef.value;
    let link = linkRef.value;
    let img = imgRef.value;

    client_api.create("/api/dashboard/portfolio/create", { title, category, link, img }).then((res) => {
      if (res.status === true) {
        SuccessToast("Portfolio Create Success!");
        router.replace("/dashboard/portfolio/all-portfolio");
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
        <h2 className="text-xl font-medium text-white">Add new portfolio</h2>
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
              </div>
              <div className="flex gap-3">
                <input
                  ref={(input) => (linkRef = input)}
                  type="text"
                  placeholder="Link"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (imgRef = input)}
                  type="text"
                  placeholder="Image CDN"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="mt-[20px] block">
                <SubmitButton
                  submit={submit}
                  onClick={formSubmit}
                  text="Create new portfolio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNewPortfolioComponent;
