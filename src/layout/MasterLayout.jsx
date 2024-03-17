"use client"; 
import React, { useState } from "react";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";
const MasterLayout = (props) => {
  const pathname = usePathname();
  const [sidebar, setSidebar] = useState(false);

  const sidebarControl = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      <div className="bg-img"></div>
      {/* Header Section */}
      <header className="relative z-[999]">
        <div className=" container mx-auto  pt-[30px]">
          <div className=" flex justify-between rounded-[10px] bg-card px-[15px]  py-[30px] md:px-[30px]">
            <div className="logo flex items-center ">
              <Link href={"/"}>
                <img src={"/assets/images/logo.svg"} alt="" />
              </Link>
            </div>
            <menu className="hidden items-center lg:flex">
              <ul className="flex  gap-[40px]">
                <li className={pathname === "/" ? "navActive" : "navNotActive"}>
                  <Link href={"/"}>Home</Link>
                </li>
                <li
                  className={
                    pathname === "/about" ? "navActive" : "navNotActive"
                  }
                >
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li
                  className={
                    pathname === "/portfolio" ? "navActive" : "navNotActive"
                  }
                >
                  <Link href={"/portfolio"}>Portfolio</Link>
                </li>
                <li
                  className={
                    pathname === "/service" ? "navActive" : "navNotActive"
                  }
                >
                  <Link href={"/service"}>Service</Link>
                </li>
                <li
                  className={
                    pathname.split("/").slice(0, 2).join("/") === "/blog"
                      ? "navActive"
                      : "navNotActive"
                  }
                >
                  <Link href={"/blog/1"}>Blog</Link>
                </li>
                <li
                  className={
                    pathname === "/contact" ? "navActive" : "navNotActive"
                  }
                >
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </menu>
            <div className="block lg:hidden">
              <div className="flex items-center gap-4	 px-[10px]">
                <span
                  onClick={sidebarControl}
                  className="rounded-full border border-[#919295] p-[10px] text-[25px] "
                >
                  <BiMenuAltRight className="text-text " />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* sidebar intro */}
      <div
        className={`sidebar fixed ${
          sidebar ? "left-0" : "left-[100%]"
        }  top-0 z-[9999]  h-full w-full bg-btn/60 transition-all duration-500`}
      >
        <div className="ml-auto h-full min-h-[750px] w-[300px] bg-card  px-[30px] pt-[60px] md:min-h-[700px]">
          <div className="relative flex justify-center">
            <span
              onClick={sidebarControl}
              className="group absolute left-[-78px] rounded-lg bg-card   px-[15px] py-[10px] text-[26px]"
            >
              <FaXmark className="text-white  transition-all duration-500  group-hover:rotate-90 group-hover:text-theme" />
            </span>
            <div>
              <img src="/assets/images/logo.svg" alt="" />
            </div>
          </div>
          <div className="my-[30px] border-t border-[#ddd] "></div>
          <menu className=" items-center lg:hidden">
              <ul className="grid  gap-[20px]">
                <li className={pathname === "/" ? "navActive text-[20px]" : "navNotActive text-[20px]"}>
                  <Link href={"/"}>Home</Link>
                </li>
                <li
                  className={
                    pathname === "/about" ? "navActive text-[20px]" : "navNotActive text-[20px]"
                  }
                >
                  <Link href={"/about"}>About Us</Link>
                </li>
                <li
                  className={
                    pathname === "/portfolio" ? "navActive text-[20px]" : "navNotActive text-[20px]"
                  }
                >
                  <Link href={"/portfolio"}>Portfolio</Link>
                </li>
                <li
                  className={
                    pathname === "/service" ? "navActive text-[20px]" : "navNotActive text-[20px]"
                  }
                >
                  <Link href={"/service"}>Service</Link>
                </li>
                <li
                  className={
                    pathname.split("/").slice(0, 2).join("/") === "/blog"
                      ? "navActive text-[20px]"
                      : "navNotActive text-[20px]" 
                  }
                >
                  <Link href={"/blog/1"}>Blog</Link>
                </li>
                <li
                  className={
                    pathname === "/contact" ? "navActive text-[20px]" : "navNotActive text-[20px]"
                  }
                >
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </menu>
          <div className="my-[30px] border-t border-[#ddd] "></div>

          <div className="contact mt-[40px] pb-[20px] md:mt-[0px]">
            <div>
              <p className="text-[20px] font-semibold  text-white">
                Follow Me:
              </p>

              <div className="mt-[20px] flex gap-3">
                <Link href={"/"}>
                  <button className="boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme ">
                    <FaFacebookF />
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme ">
                    <FaTwitter />
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme ">
                    <FaLinkedinIn />
                  </button>
                </Link>
                <Link href={"/"}>
                  <button className="boxShadow rounded-lg bg-btn  p-[10px] text-[18px] text-text shadow-none transition duration-300  hover:text-theme ">
                    <FaInstagram />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Info Card Section */}
      <section className="relative z-[999]">
        <div className="main__body">{props.children}</div>
      </section>
      {/* Footer Section */}
      <footer className="relative z-[999]">
        <div className="container mx-auto  flex justify-center pb-[40px]">
          <div>
            <p className="text-center text-text">
              Copyright <span className="text-theme">pucu</span> ©2023. All
              rights reserved
            </p>
            <div className="mt-[20px] flex justify-center text-center">
              <img src="/assets/images/logo.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MasterLayout;
