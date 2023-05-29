import React, { useEffect, useState, useRef } from "react";
import { Typography, Input, DatePicker, Form, Button } from "antd";
const { Title } = Typography;

const InvoiceDetails = (props: any) => {
  const { setInvoiceData, invoiceData, formRef, setInvoiceActive } = props;
  const [mounted, setMounted] = useState<boolean>(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  //   Validation message
  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values: any) => {
    setInvoiceActive(true); //  Update the invoiceActive state to True in the parent component
    setInvoiceData(values); // Update the form values in the parent component
  };

  if (!mounted) {
    return null;
  }
  return (
    <>
      <Form
        ref={formRef}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className=""
        layout="vertical"
      >
        <Title level={3} className="text-gray-700 tracking-wider">
          Add New Invoice{" "}
          <p className="text-sm text-[#6B7280] tracking-wide	text-light">
            To add a new invoice, please fill the fields given below.{" "}
          </p>
        </Title>

        <div className="flex flex-row flex-wrap w-full ">
          <Form.Item
            label="Customer Name"
            name="customername"
            rules={[{ required: true }]}
            className=" mb-5 w-4/12"
          >
            <Input
              placeholder="Customer Name"
              className="border border-[#ABABAB] rounded w-11/12  h-11 "
            />
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true }]}
            className=" mb-5 w-4/12  "
          >
            <Input
              placeholder="Amount"
              className="border  border-[#ABABAB] rounded w-11/12  h-11 "
            />
          </Form.Item>
          <Form.Item
            label="GST Number"
            name="gstnumber"
            rules={[{ required: true }]}
            className="w-4/12 mb-5  "
          >
            <Input
              placeholder="GST Number"
              className="border border-[#ABABAB] rounded w-11/12  h-11 "
            />
          </Form.Item>

          <Form.Item
            label="Fuel levy"
            name="fuellevy"
            rules={[{ required: true }]}
            className="w-4/12 mb-5  "
          >
            <Input
              placeholder="Fuel levy"
              className="border border-[#ABABAB] rounded w-11/12  h-11 "
            />
          </Form.Item>

          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: false }]}
            className=" w-4/12 mb-5  flex flex-col"
          >
            <span>From</span>
            <DatePicker
              className="border border-[#ABABAB] rounded ml-5 w-9/12 h-11"
              format="YYYY-MM-DD"
              placeholder="MM/DD/YYYY"
            />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: false }]}
            className=" w-4/12 mb-3  flex flex-col "
          >
            <span className="ml-5">To</span>

            <DatePicker
              className="border border-[#ABABAB] rounded  ml-5   w-9/12 h-11 "
              format="YYYY-MM-DD"
              placeholder="MM/DD/YYYY"
            />
          </Form.Item>

          <Form.Item
            label="Due date for Payment"
            name="duedate"
            rules={[{ required: true }]}
            className=" w-4/12 mb-3  flex flex-col"
          >
            <DatePicker
              className="border border-[#ABABAB] rounded    w-11/12 h-11 "
              format="YYYY-MM-DD"
              placeholder="MM/DD/YYYY"
            />
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default InvoiceDetails;
