import React from "react"; 
import { FaCodeMerge } from "react-icons/fa6";
import Link from "next/link";
const PortfolioComponent = ({ data }) => {
  let portfolio_page_data = data?.portfolio_page_data[0];
  let portfolio_data = data?.portfolio_data;

  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        <div className="menuBox">
          <div className=" inline-block rounded-full border border-text px-[20px] py-[5px]">
            <div className="flex items-center gap-[6px]">
              <span>
                <FaCodeMerge className="fa-light fa-user text-[14px] text-white" />
              </span>
              <span className="pl-[6px] text-[14px] text-white">Portfolio</span>
            </div>
          </div>
        </div>
        <br />
        <div className=" mt-[10px] md:mt-[20px]">
          <h2 className="text-[32px] font-semibold uppercase  leading-tight text-white md:text-[52px] md:w-[70%]">
            {portfolio_page_data?.heading_title}
            <span className="text-theme">
              {" "}
              {portfolio_page_data?.heading_title_color}
            </span>
          </h2>
          <p className="mt-[20px] text-text lg:w-[60%]">
            {portfolio_page_data?.heading_title_des}
          </p>
        </div>

        <div className="mt-[60px] md:mt-[80px]">
          <div className="grid  gap-y-[30px] md:grid-cols-12  md:gap-x-[30px]">
            {portfolio_data.map((item, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="group rounded-2xl bg-btn p-[30px] ">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={item?.img}
                      alt=""
                      className="w-full object-cover transition-all duration-500 group-hover:scale-[110%]"
                    />
                  </div>
                  <div>
                    <p className="mt-[16px] text-[14px] text-text">
                      {item?.category}
                    </p>
                    <div className="portfolio-button-open cursor-pointer  text-white transition-all  duration-300 hover:text-theme">
                      <Link href={`${item?.link}`} target="_blank">
                        <h2 className="mt-[15px] text-[20px] font-medium capitalize md:text-[20px]">
                          {item?.title}
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioComponent;
