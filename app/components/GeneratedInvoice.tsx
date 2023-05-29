import React, { useEffect, useState } from "react";
import { Typography, Table } from "antd";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const { Title } = Typography;
import { CloudDownloadOutlined } from "@ant-design/icons";

interface GeneratedInvoiceProps {
  invoiceData: any;
}

const columns = [
  {
    title: "item",
    dataIndex: "item",
  },
  {
    title: "Qty.",
    dataIndex: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Total (USD)",
    dataIndex: "total",
  },
];

interface DataInterface {
  key: string;
  item: string;
  quantity: number;
  price: number;
  total: number;
}

const data: DataInterface[] = [
  {
    key: "1",
    item: "JLorem ipsum dolor sit",
    quantity: 2,
    price: 2300,
    total: 2 * 2300,
  },
  {
    key: "2",
    item: "JLorem ipsum dolor sit",
    quantity: 4,
    price: 2300,
    total: 4 * 2300,
  },
  {
    key: "3",
    item: "JLorem ipsum dolor sit",
    quantity: 1,
    price: 2300,
    total: 1 * 2300,
  },
];

const GeneratedInvoice: React.FC<GeneratedInvoiceProps> = ({ invoiceData }) => {
  const { customername } = invoiceData;
  const [mounted, setMounted] = useState<boolean>(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  // CURRENT DATE
  const currentDate: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  //   FORMATTED CURRENT DATE AS MONTH, DAY AND YEAR
  const formattedTodayDate: string = currentDate.toLocaleDateString(
    "en-US",
    options
  );

  //   DOWNLOAD FORM AS PDFs
  const downloadPDF = () => {
    const element = document.getElementById("invoice-pdf");

    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");
      });
    }
  };

  if (!mounted) {
    return null;
  }
  return (
    <>
      <CloudDownloadOutlined
        className="font-bold text-4xl float-right text-blue-500 hover:text-green-400 mr-10"
        onClick={downloadPDF}
      />

      <div id="invoice-pdf" className="w-full h-full">
        <div className=" w-7/12 h-[90%] border-[1px] border-[#F6F6F6] shadow-custom rounded-lg">
          <div className="flex flex-row w-full justify-between text">
            <div className="flex flex-col w-6/12 p-7">
              <Title level={2}>LOGO</Title>

              <Title level={5} style={{ color: "gray", fontWeight: "normal" }}>
                Invoice for
              </Title>
              <p className="font-bold text-md">{customername}</p>
              <p className="text-[#6B7280]  mt-1 font-light">
                46, street park n0-1 <br /> ridge south
              </p>
            </div>
            <div className="bg-[url('/images/Rectangle619.png')] bg-cover bg-center bg-no-repeat w-6/12 p-8  float-right justify-end text-right">
              <Title
                level={5}
                style={{
                  color: "gray",
                  fontWeight: "normal",
                  marginTop: "70px",
                }}
              >
                Issued On
              </Title>
              <p className="font-bold text-md">{formattedTodayDate}</p>
            </div>
          </div>

          <div className="flex flex-row justify-between  h-6/12  border-[1px] border-[#717781] shadow-custom rounded-sm m-7">
            <Table
              className="w-full bg-transparent overflow-scroll p-5 text-center justify-center items-center"
              columns={columns}
              dataSource={data}
              pagination={false}
              footer={() => (
                <div className=" w-full">
                  <tr className=" flex flex-row justify-end w-full">
                    <th className="mr-5 text-[#6B7280] text-lg ">
                      Total Amounts
                    </th>
                    <th className="text-lg">
                      $ {data.reduce((total, item) => total + item.total, 0)}
                    </th>
                  </tr>
                </div>
              )}
            ></Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneratedInvoice;
