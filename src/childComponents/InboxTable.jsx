"use client"; 

import { DeleteAlert } from "@/utility/DeleteAlert";

import client_api from "@/utility/api_fetch_fun";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

import { FaTrashCan } from "react-icons/fa6";

function InboxTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    client_api.get("/api/dashboard/message/read-all").then((res) => {
      if (res?.status === true) {
        setData(res?.data);
      }
    });
  }, []);

  const DeleteMessage = (id) => {
    DeleteAlert(`/api/dashboard/message/delete?id=${id}`).then(async (res) => {
      if (res) {
        await client_api.get("/api/dashboard/message/read-all").then((res) => {
          if (res?.status === true) {
            setData(res?.data);
          }
        });
      }
    });
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row?.name,
    },
    {
      name: "Email",
      selector: (row) => row?.email,
    },
    {
      name: "View Message",
      selector: (row) => (
        <div className=" cursor-pointer	bg-purple-50 text-purple-600 px-[10px] py-0 rounded-full">
          <Link href={`/dashboard/inbox/details/${row?.id}`}>View</Link>
        </div>
      ),
    },
    {
      name: "Date",
      selector: (row) => row?.createAt.substring(0, 10),
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="p-2 cursor-pointer	">
          <FaTrashCan onClick={() => DeleteMessage(row?.id)} />
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-xl bg-[#36404A] p-[30px] m-[30px]">
      <h2 className="text-slate-700 text-2xl font-semibold mb-2">
        All Message
      </h2>
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

export default InboxTable;
