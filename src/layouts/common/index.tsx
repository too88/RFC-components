import React from "react";
import { Layout } from "antd";

import "./index.scss";

const { Content } = Layout;

const CommonLayout: React.FC = () => {
  return (
    <Layout className="">
      <Content className=""></Content>
    </Layout>
  );
};

export default CommonLayout;
