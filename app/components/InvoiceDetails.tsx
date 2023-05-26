import React, { useEffect, useState } from "react";
import { Typography, Input, DatePicker } from "antd";
const { Title } = Typography;

const InvoiceDetails = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);


  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };





  if (!mounted) {
    return null;
  }
  return (
    <div>
      <Title level={3} className="text-gray-700 tracking-wider">
        Add New Invoice{" "}
        <p className="text-sm text-[#6B7280] tracking-wide	text-light">
          To add a new invoice, please fill the fields given below.{" "}
        </p>
      </Title>

      <div className="   flex flex-row flex-wrap w-full ">
        <div className=" w-4/12 mb-5">
          <label htmlFor="input1" className="block mb-2 w-10/12">
            Customer Name{" "}
          </label>
          <Input
            id="Customer_Name"
            type="text"
            placeholder="Customer Name"
            className="border border-[#ABABAB] rounded w-11/12 h-10"
          />
        </div>
        <div className=" w-4/12 mb-5">
          <label htmlFor="input1" className="block mb-2 w-10/12">
            Amount{" "}
          </label>
          <Input
            id="input2"
            type="text"
            placeholder="Amount"
            className="border border-[#ABABAB] rounded w-11/12 h-10"
          />
        </div>
        <div className=" w-4/12 mb-5">
          <label htmlFor="input1" className="block mb-2 w-10/12">
            GST Number{" "}
          </label>
          <Input
            id="input3"
            type="text"
            placeholder="GST Number"
            className="border border-[#ABABAB] rounded w-11/12 h-10"
          />
        </div>
        <div className=" w-4/12 mb-5">
          <label htmlFor="input1" className="block mb-2 w-10/12">
            Fuel levy{" "}
          </label>
          <Input
            id="input3"
            type="text"
            placeholder="Fuel levy"
            className="border border-[#ABABAB] rounded h-10 w-11/12"
          />
        </div>{" "}
        <div className=" flex flex-col w-8/12 mb-5">
          <label htmlFor="input3" className="block mb-2 text-m">
            Date{" "}
          </label>
          <div className="flex flex-row  justify-center text-center items-center ">
            <p className=" mr-2">From </p>
            <DatePicker
              className="border border-[#ABABAB] rounded h-10 px-4 py-2  w-full"
              format="YYYY-MM-DD"
              placeholder="MM/DD/YYYY"
            />
            <p className="ml-10 mr-2">To </p>
            <DatePicker
              className="border border-[#ABABAB] rounded h-10  px-4 py-2  w-full mr-7"
              format="YYYY-MM-DD"
              placeholder="MM/DD/YYYY"
            />
          </div>
        </div>{" "}
        <div className=" w-4/12 mb-5">
          <label htmlFor="input3" className="block mb-2 text-m">
            Due date for Payment
          </label>{" "}
          <DatePicker
            className="border border-[#ABABAB] rounded h-10  px-4 py-2 w-11/12"
            format="YYYY-MM-DD"
            placeholder="Due date for Payment"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default InvoiceDetails;
