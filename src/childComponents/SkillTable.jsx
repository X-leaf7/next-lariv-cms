"use client"; 

import { DeleteAlert } from "@/utility/DeleteAlert";
import Link from "next/link";
import { FaPenToSquare } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { FaTrashCan } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
import client_api from "@/utility/api_fetch_fun";

function SkillTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    client_api.get("/api/dashboard/skill/read-all").then((res) => {
      if (res.status === true) {
        setData(res?.data);
      }
    });
  }, []);

  const Delete = (id) => {
    DeleteAlert(`/api/dashboard/skill/delete?id=${id}`).then(async (res) => {
      if (res) {
        await client_api.get("/api/dashboard/skill/read-all").then((res) => {
          if (res.status === true) {
            setData(res?.data);
          }
        });
      }
    });
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row?.title,
    },
    {
      name: "Category",
      selector: (row) => row?.category,
    },

    {
      name: "Last update",
      selector: (row) => row?.updateAt.substring(0, 10),
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-2 item-center">
          <div className="p-2 cursor-pointer  ">
            <Link href={`/dashboard/skill/edit-skill/${row?.id}`}>
              <FaPenToSquare />
            </Link>
          </div>
          <div className="p-2 cursor-pointer    ">
            <FaTrashCan onClick={() => Delete(row?.id)} />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-xl bg-[#36404A] p-[30px] m-[30px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-slate-700 text-2xl font-semibold mb-2">All skill</h2>
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

export default SkillTable;
