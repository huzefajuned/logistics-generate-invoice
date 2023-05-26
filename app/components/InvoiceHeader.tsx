"use client";
import React, { useState, useEffect } from "react";
import { Typography, Button } from "antd";
const { Title } = Typography;
import { StarOutlined } from "@ant-design/icons";
const InvoiceHeader = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div className=" h-28 flex flex-row">
      <div className=" w-8/12">
        <div className=" flex flex-row h-12">
          <Title
            style={{
              fontWeight: "250",
              fontSize: "32px",
              letterSpacing: "2px",
            }}
          >
            Customer’s Invoice{" "}
          </Title>
          <StarOutlined
            className="w-20 h-10 mt-1 ml-0"
            style={{
              fontSize: "32px",
              color: "gray",
              fontWeight: "200",
            }}
          />
        </div>
        <div className="">
          <span> Dashboard</span> |
          <span className="cursor-pointer text-[#2A7AE9] text-md ml-1">
            Customer’s Invoice{" "}
          </span>
        </div>
      </div>
      <div className=" flex flex-row justify-end  items-center text-end  w-4/12">
        <Button
          type="primary"
          ghost
          className=" text-lg text-blue-500  w-24 h-12 mr-5"
        >
          Cancel
        </Button>
        <Button className="text-md shad text-white bg-gradient-to-r from-blue-600 to-purple-700 w-36 h-12 ml-0">
          Generate Invoice
        </Button>
      </div>
    </div>
  );
};

export default InvoiceHeader;
