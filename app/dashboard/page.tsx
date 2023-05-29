"use client";
import { Typography } from "antd";
import React, { useState, useRef } from "react";
import { StarOutlined } from "@ant-design/icons";
import InvoiceHeader from "../components/InvoiceHeader";
import InvoiceDetails from "../components/InvoiceDetails";
import GeneratedInvoice from "../components/GeneratedInvoice";
const Page = () => {
  const [invoiceActive, setInvoiceActive] = useState<boolean>(false);
  const [invoiceData, setInvoiceData] = useState<any | null>(null);
  const formRef = useRef<any>(null);

  const onSubmitInvoiceDetails = () => {
    formRef.current.submit();
  };

  return (
    <div className=" text-seconadry-90 w-full h-screen   flex flex-row  overflow-hidden ">
      {/* LEFT SIDE ICONS AND SIDE-MENU COMPONENT  INSIDE DASHBOARD*/}
      <div className="  flex flex-row text-center justify-center items-center">
        <div className="w-14 bg-gray-200 h-full">icons</div>
        <div className="w-64 bg-gray-200 h-full">side nav</div>
      </div>

      <div className=" w-full h-full p-10">
        <InvoiceHeader
          onSubmitInvoiceDetails={onSubmitInvoiceDetails}
          invoiceActive={invoiceActive}
          setInvoiceActive={setInvoiceActive}
        />
        {/* CONDITIONALY SHOW & HIDE THE GENERATED INVOICE */}
        {invoiceActive ? (
          <GeneratedInvoice invoiceData={invoiceData} />
        ) : (
          <InvoiceDetails
            formRef={formRef}
            setInvoiceActive={setInvoiceActive}
            setInvoiceData={setInvoiceData}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
