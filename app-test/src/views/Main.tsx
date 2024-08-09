
import {
  FaBars,
  FaCircle,
  FaCross,
  FaFilter,
  FaHamburger,
} from "react-icons/fa";
import {
  SettingFilled,
  CaretDownOutlined,
  CaretUpOutlined,
  UserOutlined,
  DownloadOutlined,
  PoundCircleTwoTone,
} from "@ant-design/icons";
import { Avatar, Space, Slider, Progress, Table, Tag } from "antd";
import { ReactNode } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { FaEllipsis } from "react-icons/fa6";

export default function Main() {
  return (
    <div className="m-0">
      <div>
      <header className="flex justify-between items-center  mt-4 ">
          <div className="flex justify-between items-center space-x-2 p-4">
            <h1 className="text-xl font-semibold">Your Customers</h1>
            <button className="mt-1 text-blue-600 b border-2 rounded-full  w-18 text-center flex positio:relative pl-2 pr-2 border-blue-500">
              {" "}
              <FaCircle className="size-2 position:absolute mt-2 mr-2" /> New
            </button>
          </div>

          <div className="flex space-x-4 p-4">
            <button className="bg-gray-200 px-4 py-2 rounded-full flex gap-2">
              {" "}
              <FaFilter className="mt-1" /> Filter
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded-full">
              {" "}
              <SettingFilled /> Settings{" "}
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex gap-1">
              {" "}
              <FaCross className="mt-1 font-thin" /> Add User
            </button>
          </div>
        </header>

        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
}

const data = [
  {
    fullName: "Alice Smith",
    email: "@Alice",
    paymentMethod: "Ends with ***32 ",
    category: ["Art", "computer","Done"],
    clickThroughPercentage: 40,
  },
  {
    fullName: "Bob Johnson",
    email: "@bobJohnson",
    paymentMethod: "Ends with ***37 ",
    category: ["Books", "Music"],
    clickThroughPercentage: 10,
  },
  {
    fullName: "Cliare Garcia",
    email: "@cliaragarcia",
    paymentMethod: "Ends with ***46 ",
    category: ["Books"],
    clickThroughPercentage: 80,
  },
  {
    fullName: "Emma Lee",
    email: "@emmalee",
    paymentMethod: "Ends with ***45 ",
    category: ["Books", "Travel"],
    clickThroughPercentage: 60,
  },
  {
    fullName: "Grace Tayler",
    email: "@gracetayler",
    paymentMethod: "Ends with ***78 ",
    category: ["Furniture", "Home Decor"],
    clickThroughPercentage: 40,
  },
  {
    fullName: "Lubela Clark",
    email: "@lubelaclark",
    paymentMethod: "Ends with ***58",
    category: ["Lazy","football","love"],
    clickThroughPercentage: 80,
  },
  {
    fullName: "David Brown",
    email: "@davidbrown",
    paymentMethod: "Ends with ***45",
    category: ["Sports", "Fitness"],
    clickThroughPercentage: 40,
  },
  {
    fullName: "Frank Wong",
    email: "@frankwong",
    paymentMethod: "Ends with ***68",
    category: ["Jogging", "Health","love"],
    clickThroughPercentage: 20,
  },
  {
    fullName: "Sam Allen",
    email: "@Samallen",
    paymentMethod: "Ends with ***69",
    category: ["Travel", "Adventure","Done","Beston"],
    clickThroughPercentage: 40,
  },
];

const columns = [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (_: ReactNode, records: { fullName: string; email: string }) => {
      return (
        <div className="flex gap-2">
          <Avatar icon={<UserOutlined />} />{" "}
          <div className="flex flex-col items-start">
            <p>{records.fullName}</p>
            <p>{records.email}</p>
          </div>
        </div>
      );
    },
  },

  {
    title: "Payment Methods",
    dataIndex: "paymentMethod",
    key: "paymentMethod",
    render: (_: ReactNode, records: { paymentMethod: string }) => {
      return (
        <div className="flex gap-2">
          <PoundCircleTwoTone />
          <div>
            <p>{records.paymentMethod}</p>
          </div>
        </div>
      );
    },
  },

  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    render: (_: ReactNode, records: { category: string | string[] }) => {
      return (
        <div>
          {Array.isArray(records.category) ? (
            records.category.map((cat, index) => (
              <Tag color={index % 2 === 0 ? "blue" : "pink"} key={cat}>
                {cat}
              </Tag>
            ))
          ) : (
            <Tag color="blue">{records.category}</Tag>
          )}
        </div>
      );
    },
  },

  {
    title: "Click Through Percentage",
    dataIndex: "clickThroughPercentage",
    key: "clickThroughPercentage",
    render: (_: ReactNode, records: { clickThroughPercentage: number }) => {
      return (
        <Progress
          percent={records.clickThroughPercentage}
          strokeColor={"blue"}
        />
      );
    },
  },

  {
    title: "",
    dataIndex: "",
    key: "2",
    render: (_: ReactNode, records: { clickThroughPercentage: number }) => {
      return (
        <div className="flex gap-10 justify-end">
          <FaEllipsis className="rotate-90" />
          <DownloadOutlined />
          <IoTrashOutline />
        </div>
      );
    },
  },
];




// https://ant.design/components/table
// https://tailwindcss.com/docs/position