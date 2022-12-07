import React, { useEffect, useState, Fragment } from "react";
import { Page, Card } from "@shopify/polaris";
import { Link } from "react-router-dom";
import { Space, Table, Button, Modal, Popover } from "antd";
import axios from "axios";
const Posts = () => {
  const [getData, setGetData] = useState("");
  async function getDataFake() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setGetData(data);
  }
  useEffect(() => {
    getDataFake();
  }, []);
  console.log(getData);
  const data = [];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "User ID",
      dataIndex: "userId",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Popover
            content={
              <div>
                <span> User ID: {record.userId} </span>
                <div>Content: {record.body}</div>
              </div>
            }
            title={`Title: ${record.title}`}
            trigger="click"
          >
            <span>View detail</span>
          </Popover>
        </>
      ),
    },
  ];

  getData &&
    getData.forEach((item) => {
      data.push({
        key: item.id,
        id: item.id,
        userId: item.userId,
        title: item.title,
        body: item.body,
      });
    });

  return (
    <>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default Posts;
