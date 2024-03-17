"use client"; 
import React from "react";
import { Toaster } from "react-hot-toast";
import Editor from "../utility/Editor";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import SubmitButton from "@/childComponents/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";
const CreateNewBlogComponent = () => {
  const router = useRouter();
  const [editorData, setEditorData] = useState("");
  const [submit, setSubmit] = useState(false);
  let titleRef,
    keywordsRef,
    short_desRef,
    imgRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);
    let title = titleRef.value;
    let keywords = keywordsRef.value;
    let short_des = short_desRef.value;
    let long_des = editorData;
    let img = imgRef.value;

    client_api.create("/api/dashboard/blog/create", {
      title,
      keywords,
      short_des,
      long_des,
      img,
    }).then((res) => {
      if (res.status === true) {
        SuccessToast("Blog Create Success!");
        router.replace("/dashboard/blog/all-blog");
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
        <h2 className="text-xl font-medium text-white">Create new blog</h2>
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
                  ref={(input) => (keywordsRef = input)}
                  type="text"
                  placeholder="Keywords"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
              <div className="flex gap-3">
                <input
                  ref={(input) => (short_desRef = input)}
                  type="text"
                  placeholder="Short description"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
                <input
                  ref={(input) => (imgRef = input)}
                  type="text"
                  placeholder="Image CDN"
                  className="h-[40px] w-full rounded-lg border border-border bg-transparent px-3 outline-none placeholder:text-sm"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label className="text-base">Description Content Edit</label>
              <div className="flex gap-3 pb-[60px]">
                <Editor data={editorData} onDataChange={setEditorData} />
              </div>
            </div>

            <div className="mt-[40px] block">
              <SubmitButton
                submit={submit}
                onClick={formSubmit}
                text="Create Blog"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateNewBlogComponent;
