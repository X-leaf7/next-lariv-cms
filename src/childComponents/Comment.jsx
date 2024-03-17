"use client";
import React from "react";
import { useState, useRef } from "react";
import SubmitButton from "@/childComponents/SubmitButton";
import { ErrorToast, SuccessToast } from "@/utility/FormHelper";
import { Toaster } from "react-hot-toast";
import client_api from "@/utility/api_fetch_fun";

const Comment = ({ id }) => {
  let nameRef,
    emailRef,
    commentRef = useRef();
  const [submit, setSubmit] = useState(false);
  const formSubmit = async () => {
    setSubmit(true);
    let name = nameRef.value;
    let email = emailRef.value;
    let comment = commentRef.value;
    let blogId = parseInt(id);

    client_api
      .create("/api/user/comment/create", { name, email, comment, blogId })
      .then((res) => {
        if (res.status === true) {
          SuccessToast("Comment create success!");
          setSubmit(false);
        } else {
          ErrorToast("Something Went Wrong");
          setSubmit(false);
        }
      });

    nameRef.value = "";
    emailRef.value = "";
    commentRef.value = "";
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mt-[60px]">
        <div>
          <h2 className="text-[22px] font-semibold text-white">
            Post a Comment
          </h2>
          <p className="mt-[2px] text-text">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="mt-[20px]">
            <div className="grid w-full gap-[20px] md:flex">
              <div className="md:w-1/2">
                <input
                  ref={(input) => (nameRef = input)}
                  className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "
                  type="text"
                  placeholder="Full Name:"
                />
              </div>
              <div className="md:w-1/2">
                <input
                  ref={(input) => (emailRef = input)}
                  className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "
                  type="text"
                  placeholder="Your Email:"
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <textarea
                ref={(input) => (commentRef = input)}
                placeholder="Write your Comment here:"
                name=""
                id=""
                cols={20}
                rows={10}
                className="block w-full rounded-lg border  bg-transparent px-[15px] py-[10px]  text-white focus:outline-none "
                defaultValue={""}
              />
            </div>

            <div className="mb-[30px] mt-[30px]">
              <SubmitButton
                submit={submit}
                onClick={formSubmit}
                text="Post Comment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
