import React, { useEffect, useState } from "react";
import { Page, Card, DataTable } from "@shopify/polaris";
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
  console.log(getData.length);
  const rows = [];
  getData &&
    getData.forEach((item) => {
      // setPrice(item.price);
      rows.push({
        id: item._id,
        userId: item.userId,
        title: item.title,
      });
    });
  return (
    <Page title="Sales by product">
      <Card>
        {/* <DataTable
          columnContentTypes={["numeric", "numeric", "text", "numeric"]}
          headings={["ID", "User ID", "Title", "Action"]}
          rows={rows}
        /> */}
      </Card>
    </Page>
  );
};

export default Posts;
