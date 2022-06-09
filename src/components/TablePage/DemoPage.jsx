import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { Pagination, Table, PaginationProps, Button } from "antd";
import React, { useState } from "react";

function page() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const dataSouces = [
    {
      key: "1",
      name: "Paras",
      age: "19",
      address: "10 downing street",
    },
    {
      key: "2",
      name: "Bhavay",
      age: "19",
      address: "10 downing street",
    },
    {
      key: "3",
      name: "shilesh",
      age: "18",
      address: "10 downing street",
    },
    {
      key: "4",
      name: "Jenish",
      age: "23",
      address: "10 downing street",
    },
    {
      key: "5",
      name: "Raj",
      age: "24",
      address: "10 downing street",
    },
    {
      key: "6",
      name: "Harsh",
      age: "22",
      address: "10 downing street",
    },
    {
      key: "7",
      name: "Rajveer",
      age: "24",
      address: "10 downing street",
    },
    {
      key: "8",
      name: "Dev",
      age: "20",
      address: "10 downing street",
    },
    {
      key: "9",
      name: "Karan",
      age: "18",
      address: "10 downing street",
    },
    {
      key: "10",
      name: "Kirtan",
      age: "20",
      address: "10 downing street",
    },
    {
      key: "11",
      name: "Milan",
      age: "19",
      address: "10 downing street",
    },
    {
      key: "12",
      name: "Dishan",
      age: "19",
      address: "10 downing street",
    },
    {
      key: "13",
      name: "Vishal",
      age: "21",
      address: "10 downing street",
    },
    {
      key: "14",
      name: "Sahil",
      age: "19",
      address: "10 downing street",
    },
    {
      key: "15",
      name: "Suresh",
      age: "17",
      address: "10 downing street",
    },
    {
      key: "16",
      name: "Mahesh",
      age: "19",
      address: "10 downing street",
    },
    {
      key: "17",
      name: "Goti",
      age: "22",
      address: "10 downing street",
    },
    {
      key: "18",
      name: "Pratik",
      age: "25",
      address: "10 downing street",
    },
    {
      key: "19",
      name: "Romik",
      age: "19",
      address: "10 downing street",
    },
    {
      key: "20",
      name: "Chirag",
      age: "21",
      address: "10 downing street",
    },
    {
      key: "21",
      name: "Taarak",
      age: "25",
      address: "10 downing street",
    },
    {
      key: "22",
      name: "Yash",
      age: "21",
      address: "10 downing street",
    },
    {
      key: "23",
      name: "Raghu",
      age: "23",
      address: "10 downing street",
    },
  ];

  return (
    <div>
      <h1>Table Pagination</h1>
      <Table
        columns={columns}
        dataSource={dataSouces}
        pagination={{ total: dataSouces.length }}
      />
    </div>
  );
}

export default page;
