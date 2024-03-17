"use client"; 

import { DeleteAlert } from "@/utility/DeleteAlert";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import {
  ThemeProvider,
  Popover,
  PopoverHandler,
  PopoverContent, Checkbox
} from "@/helpers/MaterialTailwind";
import { FaTrashCan } from "react-icons/fa6";
import client_api from "@/utility/api_fetch_fun";

function CommentTable() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await client_api.get("/api/dashboard/comment/read-all").then((res) => {
      if (res.status === true) {
        setData(res?.data);
      }
    });
  }, []);

  const DeleteComment = (id) => {
    DeleteAlert(`/api/dashboard/comment/delete?id=${id}`).then(async (res) => {
      if (res) {
        await client_api.get("/api/dashboard/comment/read-all").then((res) => {
          if (res?.status === true) {
            setData(res?.data);
          }
        });
      }
    });
  };

  const approveControl = (id, e) => {
    const { checked } = e.target;
    client_api.update(`/api/dashboard/comment/update?id=${id}`, { approve: checked }).then((res) => {
      if (res.status === true) {
        client_api.get("/api/dashboard/comment/read-all").then((res) => {
          if (res.status === true) {
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
      name: "Blog Id",
      selector: (row) => row?.blogId,
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="flex justify-center items-center">
          <div>
            <Checkbox
              defaultChecked={row?.approve === true ? true : false}
              onChange={(e) => approveControl(row?.id, e)}
            />
          </div>
          <div>
            {row?.approve === true ? (
              <span className="bg-green-50 text-green-600 px-[10px] text-[12px] py-0 rounded-full">
                Approve
              </span>
            ) : (
              <span className="bg-red-50 text-[12px] text-red-600 px-[10px] py-0 rounded-full">
                Pending
              </span>
            )}
          </div>
        </div>
      ),
    },

    {
      name: "View Comment",
      selector: (row) => (
        <Popover
          placement="bottom"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <PopoverHandler>
            <span className="bg-purple-50 text-[12px] cursor-pointer text-purple-600 px-[10px] py-0 rounded-full">
              View
            </span>
          </PopoverHandler>
          <PopoverContent>{row?.comment}</PopoverContent>
        </Popover>
      ),
    },
    {
      name: "Date",
      selector: (row) => row?.createAt.substring(0, 10),
    },

    {
      name: "Action",
      selector: (row) => (
        <div className="p-2 cursor-pointer  ">
          <FaTrashCan onClick={() => DeleteComment(row?.id)} />
        </div>
      ),
    },
  ];

  return (
    <ThemeProvider><div className="rounded-xl bg-[#36404A] p-[30px] m-[30px]">
      <h2 className="text-slate-700 text-2xl font-semibold mb-2">
        All comments
      </h2>
      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="600px"
        columns={columns}
        data={data}
        pagination
      />
    </div></ThemeProvider>

  );
}

export default CommentTable;
