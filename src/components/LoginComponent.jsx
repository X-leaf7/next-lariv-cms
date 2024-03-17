"use client";
import SubmitButton from "@/childComponents/SubmitButton";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

const LoginComponent = ({ data }) => {
  const [submit, setSubmit] = useState(false);
  const router = useRouter();
  let emailRef,
    passwordRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      if (!!data === false) {
        await client_api.register({});
      }
    };
    fetchData();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    let email = emailRef.value;
    let password = passwordRef.value;

    if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required");
      setSubmit(false);
    } else if (IsEmpty(email)) {
      ErrorToast("Email Address Required");
      setSubmit(false);
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required");
      setSubmit(false);
    } else {
      client_api.login({ email, password }).then((res) => {
        if (res?.status === true) {
          SuccessToast("Login Success!");
          router.replace("/dashboard");
          setSubmit(false);
        } else {
          ErrorToast("Login fail");
          setSubmit(false);
        }
      });
    }
  };

  return (
    <>
      {/* component */}
      <Toaster position="top-center" reverseOrder={false} />
      <section className="flex min-h-screen items-stretch text-white ">
        <div className="bg-img_login relative hidden w-1/2 items-center bg-gray-500 bg-cover bg-no-repeat lg:flex">
          <div className="absolute inset-0 z-0 bg-black opacity-60" />
          <div className="z-10 w-full px-24 text-end">
            <h1 className="text-end text-[60px] font-bold tracking-wide">
              We Make <span className="text-theme">Spectacular!</span>
            </h1>
            <p className="my-4 text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since.
            </p>
          </div>
        </div>
        <div className="z-0 flex w-full items-center  bg-card px-0  md:px-16 lg:w-1/2">
          <div className="absolute inset-0 z-10 items-center bg-gray-500 bg-cover bg-no-repeat lg:hidden">
            <div className="absolute inset-0 z-0 bg-black opacity-60" />
          </div>
          <div className="z-20 w-full py-6">
            <div className="">
              <img src="assets/images/logo.svg" alt="" className="w-[200px]" />
            </div>

            <div className="mt-[50px] space-x-2 py-6 text-left">
              <h2 className="text-[30px]">Welcome!</h2>
            </div>
            <p className="text-gray-100">Sign Into Your Account</p>
            <form action="" className=" w-full px-4 sm:w-2/3 lg:px-0">
              <div className="pb-2 pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full rounded-sm bg-black p-4 text-lg"
                  ref={(input) => (emailRef = input)}
                />
              </div>
              <div className="pb-2 pt-4">
                <input
                  className="block w-full rounded-sm bg-black p-4 text-lg"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  ref={(input) => (passwordRef = input)}
                />
              </div>
              <div className=" pb-2 pt-4">
                <SubmitButton
                  submit={submit}
                  onClick={formSubmit}
                  text="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginComponent;
