"use client";
import { Typography } from "antd";
import React, { useState } from "react";
import { StarOutlined } from "@ant-design/icons";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceDetails from "../components/InvoiceDetails";
const { Title } = Typography;

const Page = () => {
  // FOR TOGGLING BETWEEN NOTIFICATION & ACTIVITIES COMPONENTS TAB---
  const [isSelectedActivities, setIsSelectedActivities] =
    useState<boolean>(true);

  return (
    <div className=" text-seconadry-90 w-full h-screen   flex flex-row  overflow-hidden ">
      {/* LEFT SIDE ICONS AND SIDE-MENU COMPONENT  INSIDE DASHBOARD*/}
      <div className="  flex flex-row text-center justify-center items-center">
        <div className="w-14 bg-gray-200 h-full">icons</div>
        <div className="w-64 bg-gray-200 h-full">side nav</div>
      </div>

      <div className=" w-full h-full p-10">
        <InvoiceHeader />
        <InvoiceDetails />
      </div>
    </div>
  );
};

export default Page;
