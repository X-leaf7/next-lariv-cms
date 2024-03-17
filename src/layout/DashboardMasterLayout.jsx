"use client"; 
import Link from "next/link";
import {
  FaBlog,
  FaChartSimple,
  FaExpand,
  FaHouseChimneyMedical,
  FaNetworkWired,
  FaRegEnvelope,
  FaRegEnvelopeOpen,
  FaTransgender,
  FaUserCheck,
  FaUserPen,
  FaTextWidth,
  FaHive,
} from "react-icons/fa6";
import { usePathname } from "next/navigation";

const DashboardMasterLayout = (props) => {
  const pathname = usePathname();

  return (
    <section className="bg-[#303841]">
      <div className="flex  ">
        <div className="w-[280px] h-screen fixed overflow-y-scroll ">
          <div className=" border-r border-[#4b5563] bg-[#36404A] p-4 shadow-xl">
            <div className=" p-4">
              <img src="/assets/images/logo.svg" alt="" className="w-[180px]" />
            </div>

            {/* Inner Nav */}

            <ul className="mt-8 grid gap-4">
              <li className="border-b border-border">
                <Link href="#">
                  <ul className="grid gap-[5px]  py-[10px]">
                    <li>
                      <Link
                        href="/dashboard"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaHive /> Dashboard
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="border-b border-border">
                <Link href="#" className="text-base text-text">
                  Pages
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/home-page-content-edit"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/home-page-content-edit"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaHouseChimneyMedical />
                        Home Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/about-page-content-edit"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/about-page-content-edit"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaUserPen />
                        About Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/portfolio-page-content-edit"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/portfolio-page-content-edit"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaTransgender />
                        Portfolio Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/service-page-content-edit"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/service-page-content-edit"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaNetworkWired />
                        Service Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/blog-page-content-edit"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/blog-page-content-edit"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaBlog />
                        Blog Page
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/contact-page-content-edit"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/contact-page-content-edit"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaRegEnvelopeOpen />
                        Contact Page
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="border-b border-border">
                <Link href="#" className="text-base text-text">
                  Profile
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/my-profile"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/my-profile"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaUserCheck />
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/dashboard/inbox"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/inbox"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaRegEnvelope />
                        Inbox
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="border-b border-border">
                <Link href="#" className="text-base text-text">
                  Blog
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/blog/create-new-blog"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/blog/create-new-blog"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaTextWidth />
                        Create new blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/blog/all-blog"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/blog/all-blog"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaExpand />
                        All blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/blog/all-comment"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/blog/all-comment"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaExpand />
                        All comment
                      </Link>
                    </li>
                  </ul>
                </Link>
                <Link href="#" className="text-base text-text">
                  Portfolio
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/portfolio/create-new-portfolio"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname ==
                          "/dashboard/portfolio/create-new-portfolio"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaTextWidth />
                        Create new portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/portfolio/all-portfolio"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/portfolio/all-portfolio"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaExpand />
                        All portfolio
                      </Link>
                    </li>
                  </ul>
                </Link>
                <Link href="#" className="text-base text-text">
                  Service
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/service/create-new-service"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/service/create-new-service"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaTextWidth />
                        Create new service
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/service/all-service"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/service/all-service"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaExpand />
                        All Service
                      </Link>
                    </li>
                  </ul>
                </Link>
                <Link href="#" className="text-base text-text">
                  Working Experience
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/experience/create-new-experience"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname ==
                          "/dashboard/experience/create-new-experience"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaTextWidth />
                        Create experience
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/experience/all-experience"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/experience/all-experience"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaExpand />
                        All experience
                      </Link>
                    </li>
                  </ul>
                </Link>
                <Link href="#" className="text-base text-text">
                  Education
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/education/create-new-education"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname ==
                          "/dashboard/education/create-new-education"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaTextWidth />
                        Create education
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/education/all-education"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/education/all-education"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaExpand />
                        All education
                      </Link>
                    </li>
                  </ul>
                </Link>
                <Link href="#" className="text-base text-text">
                  Skill
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/skill/create-new-skill"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/skill/create-new-skill"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaTextWidth />
                        Create skill
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/skill/all-skill"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/skill/all-skill"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaExpand />
                        All skill
                      </Link>
                    </li>
                  </ul>
                </Link>
                <Link href="#" className="text-base text-text">
                  Review
                  <ul className="] grid gap-[5px] py-[10px]">
                    <li>
                      <Link
                        href="/dashboard/review/create-new-review"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/review/create-new-review"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaTextWidth />
                        Create review
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dashboard/review/all-review"
                        className={`flex items-center gap-3 px-4 py-2 text-base text-text transition-all duration-300 hover:text-white ${
                          pathname == "/dashboard/review/all-review"
                            ? "text-theme font-semibold"
                            : "text-base"
                        }`}
                      >
                        <FaExpand />
                        All review
                      </Link>
                    </li>
                  </ul>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-[280px] w-full min-h-screen bg-[#303841]">
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default DashboardMasterLayout;
