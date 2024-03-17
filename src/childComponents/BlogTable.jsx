"use client"; 

import { DeleteAlert } from "@/utility/DeleteAlert";
import Link from "next/link";
import { FaComment, FaPenToSquare } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaTrashCan } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
import client_api from "@/utility/api_fetch_fun";

function BlogTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    client_api.get("/api/dashboard/blog/read-all-with-comment").then((res) => {
      if (res.status === true) {
        setData(res?.data);
      }
    });
  }, []);

  const DeleteBlog = (id) => {
    DeleteAlert(`/api/dashboard/blog/delete?id=${id}`).then(async (res) => {
      if (res) {
        await client_api.get("/api/dashboard/blog/read-all-with-comment").then((res) => {
          if (res?.status === true) {
            setData(res?.data);
          }
        });
      }
    });
  };



  const columns = [
    {
      name: `Id  - Title`,
      selector: (row) => row?.id + "-" + row.title,
    },

    {
      name: "Last update",
      selector: (row) => row?.updateAt.substring(0, 10),
    },
    {
      name: "Total Comments",
      selector: (row) => (
        <div className=" flex gap-2 item-center">
          {row?.comment.length} <FaComment />
        </div>
      ),
    },
    {
      name: "View Blog",
      selector: (row) => (
        <div className=" cursor-pointer	bg-purple-50 text-purple-600 px-[10px] py-0 rounded-full">
          <Link
            href={`/blog-details/${row?.title
              .replace(/[^a-zA-Z0-9-.\s]/g, "")
              .replace(/ /g, "-")}?id=${row?.id}`}
            target="_blank"
          >
            View
          </Link>
        </div>
      ),
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-2 item-center">
          <div className="p-2 cursor-pointer	">
            <Link href={`/dashboard/blog/edit-blog/${row?.id}`}>
              <FaPenToSquare />
            </Link>
          </div>
          <div className="p-2 cursor-pointer	">
            <FaTrashCan onClick={() => DeleteBlog(row?.id)} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-xl bg-[#36404A] p-[30px] m-[30px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-slate-700 text-2xl font-semibold mb-2">All Blog</h2>
      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="600px"
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
}

export default BlogTable;
