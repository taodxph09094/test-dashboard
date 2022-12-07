import React, { useEffect, useState, Fragment } from "react";
import { Page, Card } from "@shopify/polaris";
import { Link } from "react-router-dom";
import { Table, Button, Input, Popover } from "antd";
import axios from "axios";
const Posts = () => {
  const [getData, setGetData] = useState("");
  const [searchByTitle, setSearchByTitle] = useState("");
  async function getDataFake() {
    if (searchByTitle === "") {
      const { data } = await axios.get(
        ` https://jsonplaceholder.typicode.com/posts`
      );
      setGetData(data);
    } else if (searchByTitle !== "") {
      const { data } = await axios.get(
        ` https://jsonplaceholder.typicode.com/posts?title=${searchByTitle}`
      );
      setGetData(data);
    }
  }

  useEffect(() => {
    getDataFake(searchByTitle);
  }, [searchByTitle]);
  const data = [];
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
      <div className="filterTitle">
        <h3>Search</h3>{" "}
        <Input
          placeholder="Search by title"
          onChange={(e) => setSearchByTitle(e.target.value)}
        />
      </div>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default Posts;
