'use client' 
import DashboardMasterLayout from '@/layout/DashboardMasterLayout';
import client_api from '@/utility/api_fetch_fun';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
  let id = params.slug;
  const [data, setData] = useState([])
  useEffect(() => {

    client_api.get(`/api/dashboard/message/read-single?id=${id}`).then((res) => {
      if (res?.status === true) {
        setData(res?.data[0]);
      }
    })
  }, []);

  return (
    <main>
      <DashboardMasterLayout>
        <div className="rounded-xl bg-[#36404A] p-[30px] m-[30px]">
          <h2 className="text-white text-[20px]">Message from {data?.name}</h2>
          <p className="text-[14px]">Email: {data?.email}</p>
          <p className="text-[14px]">Website: {data?.website}</p>
          <p className="text-[14px]">Send Date: {data?.createAt?.substring(0, 10)} </p>
          <br />
          <div className="border p-[14px] rounded">
            <p>
              {data?.long_des}
            </p>
          </div>

        </div>

      </DashboardMasterLayout>
    </main>
  )
}

export default page