"use client"; 

import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import SubmitButton from "@/childComponents/SubmitButton";
import {
  ErrorToast,
  SuccessToast,
  getBase64,
  IsEmail,
  IsEmpty,
} from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";

const MyProfile = ({ data }) => {
  const router = useRouter();
  const [setImg, setImgData] = useState(data?.img);
  const [viewImg, setViewImg] = useState(data?.img);
  const [submit, setSubmit] = useState(false);
  let firstNameRef,
    lastNameRef,
    ageRef,
    mobileRef,
    imgRef,
    useViewImgRef,
    emailRef,
    passwordRef,
    passwordConRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);
    let firstName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let age = ageRef.value;
    let mobile = mobileRef.value;
    let email = emailRef.value;
    let password = passwordRef.value;
    let passwordCon = passwordConRef.value;
    let img = setImg;

    if (IsEmpty(firstName)) {
      ErrorToast("FirstName Required");
      setSubmit(false);
    } else if (IsEmpty(lastName)) {
      ErrorToast("LastName Required");
      setSubmit(false);
    } else if (IsEmpty(age)) {
      ErrorToast("Age Required");
      setSubmit(false);
    } else if (IsEmpty(mobile)) {
      ErrorToast("Mobile Required");
      setSubmit(false);
    } else if (IsEmpty(email)) {
      ErrorToast("Email Required");
      setSubmit(false);
    } else if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required");
      setSubmit(false);
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required");
      setSubmit(false);
    } else if (IsEmpty(img)) {
      ErrorToast("Image Required");
      setSubmit(false);
    } else if (password !== passwordCon) {
      ErrorToast("Password Not Match!");
      setSubmit(false);
    } else {

      client_api.update("/api/dashboard/profile/update", {
        firstName,
        lastName,
        age,
        mobile,
        img,
        email,
        password,
      }).then((res) => {
        if (res?.status === true) {
          SuccessToast("Profile Update Success!");
          window.location.href = "/dashboard/my-profile";
          setSubmit(false);
        } else {
          ErrorToast("Something Went Wrong");
          setSubmit(false);
        }
      })

    }
  };

  const PreviewImg = () => {
    let ImgFile = imgRef.files[0];
    let url = URL.createObjectURL(ImgFile);
    setViewImg(url);
    getBase64(ImgFile).then((base64Img) => {
      useViewImgRef = base64Img;
      setImgData(useViewImgRef);
    });
  };

  const logout = () => {
    Cookies.remove("token", { path: "/" });
    router.replace("/login");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className=" mx-[30px] mt-[40px]">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-6">
            <div className=" rounded-xl bg-[#36404A] p-[30px]">
              <div>
                <img
                  src={data?.img}
                  alt=""
                  className="rounded-full w-[80px] h-[80px] object-cover"
                />
              </div>
              <div className="mt-8 grid gap-2">
                <p>
                  <strong>Full Name:</strong> {data?.firstName} {data?.lastName}
                </p>
                <p>
                  <strong>Email:</strong> {data?.email}
                </p>
                <p>
                  <strong>Mobile Number:</strong> {data?.mobile}
                </p>
                <p>
                  <strong>Age:</strong> {data?.age}
                </p>
                <p>
                  <strong>Last Profile Update:</strong>{" "}
                  {data?.updateAt.toLocaleDateString()}
                </p>
                <br />
                <div>
                  <button className="btn" onClick={logout}>
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="rounded-xl bg-[#36404A] p-[30px]">
              <div />

              <div
                className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                role="tabpanel"
                id="panel:r0:3"
                aria-labelledby="tab:r0:3"
              >
                <div className="body__option my-6">
                  <h2 className="text-slate-700 text-2xl font-semibold mb-2">
                    Change details
                  </h2>
                  <div></div>
                  <div className="intro__form">
                    <div className="p-0">
                      <div className="mt-5 md:grid grid-cols-2 gap-3">
                        <div>
                          <label className="sc-bqyKva ePvcBv text-slate-500 text-sm">
                            First Name:
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="First Name"
                            ref={(input) => (firstNameRef = input)}
                            defaultValue={data?.firstName}
                          />
                        </div>
                        <div className="mt-3 md:mt-0">
                          <label className="sc-bqyKva ePvcBv text-slate-500 text-sm ">
                            Last Name:
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Last Name"
                            ref={(input) => (lastNameRef = input)}
                            defaultValue={data?.lastName}
                          />
                        </div>
                      </div>
                      <div className="mt-3 md:grid grid-cols-2 gap-3">
                        <div>
                          <label className="sc-bqyKva ePvcBv text-slate-500 text-sm">
                            Age:
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Age"
                            ref={(input) => (ageRef = input)}
                            defaultValue={data?.age}
                          />
                        </div>
                        <div className="mt-3 md:mt-0">
                          <label className="sc-bqyKva ePvcBv text-slate-500 text-sm">
                            Mobile Number:
                          </label>
                          <input
                            type="text"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Mobile Number"
                            ref={(input) => (mobileRef = input)}
                            defaultValue={data?.mobile}
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <div>
                          <label className="sc-bqyKva ePvcBv text-slate-500 text-sm ">
                            Email ID:
                          </label>
                          <input
                            type="email"
                            disabled=""
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            ref={(input) => (emailRef = input)}
                            defaultValue={data?.email}
                          />
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mb-3">
                          <label
                            htmlFor="name"
                            className="mb-1 block text-sm  text-slate-500"
                          >
                            Add Profile Image
                          </label>
                          <div className="img__file ">
                            <div>
                              <label className="block mt-2 cursor-pointer	">
                                <span className="sr-only">
                                  Choose profile photo
                                </span>
                                <input
                                  onChange={PreviewImg}
                                  ref={(input) => (imgRef = input)}
                                  type="file"
                                  className="block  w-[250px] cursor-pointer	 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                                />
                              </label>
                              <div className="grid grid-cols-3 md:grid-cols-5 gap-1 mt-3 md:w-9/12">
                                <div className="border w-[100px] h-[100px] rounded-md flex justify-center	items-center	 relative overflow-hidden">
                                  <img
                                    className="w-[65px] h-[auto] rounded-md"
                                    alt=""
                                    src={viewImg}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 md:grid grid-cols-2 gap-3">
                        <div>
                          <label className="sc-bqyKva ePvcBv text-slate-500 text-sm">
                            Password:
                          </label>
                          <input
                            ref={(input) => (passwordRef = input)}
                            type="password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                        <div className="mt-3 md:mt-0">
                          <label className="sc-bqyKva ePvcBv text-slate-500 text-sm">
                            Confirm Password:
                          </label>
                          <input
                            ref={(input) => (passwordConRef = input)}
                            type="password"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          />
                        </div>
                      </div>
                      <div className="mt-10">
                        <SubmitButton
                          submit={submit}
                          onClick={formSubmit}
                          text="Update Profile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
