"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBlog, FaClockRotateLeft, FaRegCommentDots } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import client_api from "@/utility/api_fetch_fun";
const BlogComponent = ({ page, data }) => {
  let blog_page_data = data?.blog_page_data[0];
  const router = useRouter();
  let [blog, setBlog] = useState([]);
  let [totalBlog, setTotalBlog] = useState(0);

  let perPage = 6;
  useEffect(() => {
    const fetchData = async () => {
      await client_api
        .get(`/api/user/blog/read-pagination?page=${parseInt(page)}`)
        .then((res) => {
          if (res) {
            setBlog(res?.data?.blog);
            setTotalBlog(res?.data?.totalBlogCount);
          }
        });
    };
    fetchData();
  }, []);

  const handelPageClick = async (event) => {
    let pageNo = await event.selected;
    router.replace(`/blog/${pageNo + 1}`);
  };

  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        <div className="menuBox">
          <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
            <div className="flex items-center gap-[6px]">
              <span>
                <FaBlog className="fa-light fa-user text-[14px] text-white" />
              </span>
              <span className="pl-[6px] text-[14px] text-white">Blog</span>
            </div>
          </div>
        </div>
        <br />
        <div className="mt-[10px] md:mt-[20px]">
          <h2 className="text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px] md:w-[70%]">
            {blog_page_data?.heading_title}
            <span className="text-theme">
              {" "}
              {blog_page_data?.heading_title_color}
            </span>
          </h2>
          <p className="mt-[20px] text-text lg:w-[60%]">
            {blog_page_data?.heading_title_des}
          </p>
        </div>

        {blog?.length > 0 ? (
          <div className="mt-[60px] md:mt-[80px]">
            <div className="grid  gap-y-[30px] md:grid-cols-12  md:gap-x-[30px]">
              {blog?.map((item, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-6 lg:col-span-4 "
                >
                  <div className="group rounded-xl bg-card p-[25px]">
                    <div className="h-[260px] w-full overflow-hidden rounded-2xl">
                      <img
                        src={item?.img}
                        alt=""
                        className="h-full w-full   object-cover transition-all duration-500 group-hover:scale-[110%]"
                      />
                    </div>
                    <div>
                      <Link
                        href={`/blog-details/${item?.title
                          .replace(/[^a-zA-Z0-9-.\s]/g, "")
                          .replace(/ /g, "-")}?id=${item?.id}`}
                      >
                        <h2 className="mt-[12px] text-[20px] font-semibold transition-all duration-300 hover:text-theme md:text-[24px]">
                          {item?.title.slice(0, 45)}
                        </h2>
                      </Link>

                      <p className="mt-[14px] text-base text-text">
                        {item?.short_des.slice(0, 70)} ...
                      </p>
                      <div className="mt-[20px] flex items-center gap-[20px]">
                        <div className="flex items-center gap-[10px]">
                          <span>
                            <FaClockRotateLeft className="text-base text-theme" />
                          </span>
                          <span className="text-sm text-text">
                            {item?.createAt.substring(0, 10)}
                          </span>
                        </div>
                        <div className="flex items-center gap-[10px]">
                          <span>
                            <FaRegCommentDots className="text-base text-theme" />
                          </span>
                          <span className="text-sm text-text">
                            {item?.comment.length} Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-[60px] flex justify-center">
              <ReactPaginate
                className="flex gap-2"
                previousLabel="<"
                nextLabel=">"
                activeLinkClassName="focus:shadow-outline p-[10px] rounded-full text-white border-[#17b978] bg-theme text-btn transition-colors duration-150"
                pageLinkClassName="focus:shadow-outline flex h-10 w-10  items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                previousLinkClassName="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                nextLinkClassName="focus:shadow-outline flex h-10 w-10 items-center justify-center rounded-full bg-btn text-[#fff] transition-colors duration-150  hover:bg-theme"
                breakLabel="..."
                pageCount={totalBlog / perPage}
                initialPage={parseInt(page) - 1}
                pageRangeDisplayed={3}
                onPageChange={handelPageClick}
                type="button"
              />
            </div>
          </div>
        ) : (
          <div className="mt-[60px] md:mt-[80px]">
            <div className="grid grid-cols-12 md:gap-[30px]">
              {[...Array(6).keys()].map((item, index) => (
                <div className="col-span-12 md:col-span-4" key={index}>
                  <SkeletonTheme baseColor="#1D1C22" highlightColor="#36404A">
                    <p>
                      <Skeleton count={10} />
                    </p>
                  </SkeletonTheme>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogComponent;
