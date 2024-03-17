"use client"; 
import React from "react";
import {
  FaBlog,
  FaCompress,
  FaRegEnvelope,
  FaComment,
  FaGoogleWallet,
  FaHourglassHalf,
} from "react-icons/fa6";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
} from "recharts";

const HomeDashboardComponent = ({ all_data }) => {
  const data = [
    {
      name: "Home",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "About",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Service",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Portfolio",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Blog",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Contact",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
  ];

  const data_sheet = [
    {
      name: "Blog",
      count: all_data?.all_blog.length,
    },
    {
      name: "Message",
      count: all_data?.all_message.length,
    },
    {
      name: "Comment",
      count: all_data?.all_comment.length,
    },
    {
      name: "Portfolio",
      count: all_data?.all_portfolio.length,
    },
  ];

  return (
    <>
      <div className="m-[30px] grid grid-cols-12 gap-[10px]">
        <div className="col-span-6 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaBlog className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Blog </p>
            <h2 className="text-[26px] font-semibold text-white">
              {all_data?.all_blog.length}
            </h2>
          </div>
        </div>
        <div className="col-span-6 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaRegEnvelope className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Message </p>
            <h2 className="text-[26px] font-semibold text-white">
              {all_data?.all_message.length}
            </h2>
          </div>
        </div>
        <div className="col-span-4 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaComment className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Comment </p>
            <h2 className="text-[26px] font-semibold text-white">
              {all_data?.all_comment.length}
            </h2>
          </div>
        </div>
        <div className="col-span-4 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaGoogleWallet className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Portfolio </p>
            <h2 className="text-[26px] font-semibold text-white">
              {all_data?.all_portfolio.length}
            </h2>
          </div>
        </div>
        <div className="col-span-4 flex items-center justify-between rounded-lg bg-[#36404A] p-[20px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-cyan-500">
            <FaHourglassHalf className="text-[20px]" />
          </div>
          <div className="text-end">
            <p className="text-base text-text">Total Unique Visitor </p>
            <h2 className="text-[26px] font-semibold text-white">
              {all_data?.visitor_data}
            </h2>
          </div>
        </div>
      </div>

      {/* Chat Overview */}
      <div className="mx-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-12">
          <div className=" h-[450px] w-full rounded-lg bg-[#36404A] px-[20px] py-[50px]">
            <div>
              <h2 className="mb-2 text-base">
                Data sheet in graph {" - "}
                <span className="text-sm text-white">
                  {new Date().toLocaleDateString()}
                </span>
              </h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={data_sheet}
                stroke="#00BCD4"
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" barSize={10} fill="#00BCD4" />
                <Line type="monotone" dataKey="count" stroke="#ddd" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="m-[30px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-7">
          <div className="mx-auto w-full  rounded-lg   bg-[#36404A] shadow-lg">
            <header className="-b  px-5 py-4">
              <h2 className="font-semibold text-text">Recent Blog</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="text-xs font-semibold uppercase text-text">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Title</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Date</div>
                      </th>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-center font-semibold">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {all_data?.all_blog.slice(0, 6).map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-left">
                            {item?.title.slice(0, 40)}
                          </div>
                        </td>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-left font-medium text-text">
                            {item?.updateAt.toDateString()}
                          </div>
                        </td>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-center text-sm">
                            <Link
                              href={`/blog-details/${item?.title
                                .replace(/[^a-zA-Z0-9-.\s]/g, "")
                                .replace(/ /g, "-")}?id=${item?.id}`}
                              target="_blank"
                            >
                              <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                                View Post
                              </span>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="mx-auto w-full  rounded-lg   bg-[#36404A] shadow-lg">
            <header className="-b  px-5 py-4">
              <h2 className="font-semibold text-text">Recent Projects</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="text-xs font-semibold uppercase text-text">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Title</div>
                      </th>

                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Date</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {all_data?.all_portfolio?.map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-left">
                            {item?.title?.slice(0, 40)}
                          </div>
                        </td>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-left font-medium text-text">
                            {item?.updateAt.toDateString()}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="mx-auto w-full  rounded-lg   bg-[#36404A] shadow-lg">
            <header className="-b  px-5 py-4">
              <h2 className="font-semibold text-text">Recent Message</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="text-xs font-semibold uppercase text-text">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Email</div>
                      </th>

                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Date</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {all_data?.all_message.slice(0, 6).map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-left">{item?.email}</div>
                        </td>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-left font-medium text-text">
                            {item?.updateAt.toDateString()}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="mx-auto w-full  rounded-lg   bg-[#36404A] shadow-lg">
            <header className="-b  px-5 py-4">
              <h2 className="font-semibold text-text">Recent Comments</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead className="text-xs font-semibold uppercase text-text">
                    <tr>
                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Email</div>
                      </th>

                      <th className="whitespace-nowrap p-2">
                        <div className="text-left font-semibold">Date</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {all_data?.all_comment.slice(0, 6).map((item, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-left">{item?.name}</div>
                        </td>
                        <td className="whitespace-nowrap p-4">
                          <div className="text-left font-medium text-text">
                            {item?.updateAt.toDateString()}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboardComponent;
