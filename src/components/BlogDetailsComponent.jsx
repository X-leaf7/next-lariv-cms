import React from "react"; 
import { FaBlog, FaClockRotateLeft, FaRegCommentDots } from "react-icons/fa6";

import Social_share from "@/childComponents/Social_share";

import parse from "html-react-parser";
import Comment from "@/childComponents/Comment";
const BlogDetailsComponent = ({ data }) => {
  let blog = data?.blog_data;

  return (
    <>
      <section className="py-[30px] md:py-[80px]">
        <div className="container">
          <div className="menuBox">
            <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
              <div className="flex items-center gap-[6px]">
                <span>
                  <FaBlog className="fa-light fa-user text-[14px] text-white" />
                </span>
                <span className="pl-[6px] text-[14px] text-white">
                  Blog Details
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[60px]  ">
            <div>
              <div className="w-full overflow-hidden lg:h-[720px]">
                <img
                  src={blog?.img}
                  alt=""
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="title mt-[40px]">
                <h2 className="text-[26px] font-semibold capitalize leading-[36px] text-white md:text-[32px] md:leading-[42px]">
                  {blog?.title}
                </h2>
              </div>
              <div className="mt-[20px] flex items-center gap-[20px]">
                <div className="flex items-center gap-[10px]">
                  <span>
                    <FaClockRotateLeft className="text-base text-theme" />
                  </span>
                  <span className="text-sm text-text">
                    {blog?.createAt?.toDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-[10px]">
                  <span>
                    <FaRegCommentDots className="text-base text-theme" />
                  </span>
                  <span className="text-sm text-text">
                    {blog?.comment.length} Comments
                  </span>
                </div>
              </div>
              <div className="mt-[30px]">
                <div>{parse(blog?.long_des)}</div>
              </div>
              <div className="mt-[30px]">
                <div className="grid items-center justify-between md:flex">
                  <div>
                    <p className="text-[18px] font-semibold text-white">
                      By Admin
                    </p>
                  </div>
                  <div className="mt-[20px] md:mt-0">
                    <Social_share />
                  </div>
                </div>
              </div>
              <div className="mt-[30px] md:mt-[10px]">
                <div>
                  <h2 className="text-[22px] font-semibold text-white">
                    {blog?.comment.length} Comments
                  </h2>
                </div>
                <div className="my-[15px] border-t border-[#ddd] " />
                <div className="parent mt-[40px] grid gap-[30px]">
                  {blog?.comment.map((item, index) => (
                    <div key={index} className="flex w-full gap-[40px]">
                      <div className="w-[20%] md:w-auto">
                        <img
                          src="/assets/images/user/user-1.png"
                          alt=""
                          className="w-[60px] rounded-full"
                        />
                      </div>
                      <div className="w-[80%] md:w-auto">
                        <div className="flex w-full justify-between">
                          <div>
                            <h2 className="text-[18px] font-medium text-white">
                              {item?.name}
                            </h2>
                          </div>
                        </div>
                        <div className="mt-[10px]">
                          <p className="text-text">{item?.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Comment id={blog?.id} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsComponent;
