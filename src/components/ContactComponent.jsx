"use client"; 
import React from "react";
import { FaRegEnvelope } from "react-icons/fa6";
import { useState, useRef } from "react";
import { Toaster } from "react-hot-toast";
import SubmitButton from "@/childComponents/SubmitButton";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import client_api from "@/utility/api_fetch_fun";

const ContactComponent = ({ data }) => {
  let contact_page_data = data?.contact_page_data[0];
  const [submit, setSubmit] = useState(false);
  let nameRef,
    emailRef,
    websiteRef,
    long_desRef = useRef();

  const formSubmit = async () => {
    setSubmit(true);
    let name = nameRef.value;
    let email = emailRef.value;
    let website = websiteRef.value;
    let long_des = long_desRef.value;

    if (IsEmpty(email)) {
      ErrorToast("Email Required!");
      setSubmit(false);
    } else if (IsEmail(email)) {
      ErrorToast("Email address is not valid!");
      setSubmit(false);
    } else if (IsEmpty(name)) {
      ErrorToast("Name Required!");
      setSubmit(false);
    } else if (IsEmpty(long_des)) {
      ErrorToast("Msg Required!");
      setSubmit(false);
    } else {
      client_api.create("/api/dashboard/message/create", { name, email, website, long_des }).then(
        (res) => {
          if (res) {
            SuccessToast("Message send success!");
            setSubmit(false);
          }
        }
      );
      nameRef.value = "";
      emailRef.value = "";
      websiteRef.value = "";
      long_desRef.value = "";
    }
  };

  return (
    <section className="py-[30px] md:py-[80px]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="menuBox">
          <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
            <div className="flex items-center gap-[6px]">
              <span>
                <FaRegEnvelope className="fa-light fa-user text-[14px] text-white" />
              </span>
              <span className="pl-[6px] text-[14px] text-white">Contact</span>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-[10px] md:mt-[20px]">
          <h2 className="text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px] md:w-[70%]">
            {contact_page_data?.heading_title}
            <span className="text-theme">
              {" "}
              {contact_page_data?.heading_title_color}
            </span>
          </h2>
          <p className="mt-[20px] text-text lg:w-[60%]">
            {contact_page_data?.heading_title_des}
          </p>
        </div>

        <div className="mt-[60px] md:mt-[80px]">
          <div>
            <h2 className="text-[32px] font-semibold">
              {contact_page_data?.contact_form_heading}
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-[30px]">
            <div className="col-span-12 mt-[30px] lg:col-span-7">
              <div className="contact-form">
                <div className="grid gap-[30px] md:flex">
                  <input
                    ref={(input) => (nameRef = input)}
                    className="inputBox"
                    type="text"
                    placeholder="Enter Your Name"
                    required="required"
                  />
                  <input
                    ref={(input) => (emailRef = input)}
                    className="inputBox"
                    type="email"
                    id="email"
                    name="email"
                    required="required"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mt-[30px]">
                  <input
                    ref={(input) => (websiteRef = input)}
                    className="inputBox"
                    placeholder="Website Link:"
                    type="url"
                    id="website"
                    name="website"
                    required="required"
                  />
                </div>
                <div className="mt-[30px]">
                  <textarea
                    ref={(input) => (long_desRef = input)}
                    name="message"
                    id="massage"
                    placeholder="Enter Your Massage"
                    required=""
                    rows={10}
                    cols={50}
                    className="w-full rounded-lg border bg-transparent p-[15px] pl-[10px] text-text focus:outline-none dark:border-btn"
                    defaultValue={""}
                  />
                </div>
                <div
                  className="wow fadeIn  animated mt-[30px]"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <SubmitButton
                    submit={submit}
                    onClick={formSubmit}
                    text="Send Message"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="mt-[30px] rounded-xl bg-card p-[10px]">
                <div className="contact-map">
                  <iframe
                    title="map"
                    src={contact_page_data?.contact_info_google_map}
                    height={390}
                    width={"100%"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
