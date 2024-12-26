import React from "react";
import { Layout, Image } from "antd";
import { Outlet } from "react-router-dom";

import layoutCommonStyle from "./index.module.scss";
import backgroundSrcImage from "~/images/market-place/background.png";
import Header from "~/components/molecules/header";
import Footer from "~/components/molecules/footer";

const CommonLayout: React.FC = () => {
  return (
    <Layout>
      <Header />

      <Layout.Content className={layoutCommonStyle.backgroundImg}>
        <Outlet />
        <Image
          preview={false}
          src={backgroundSrcImage}
          alt="background-src-image"
        />
      </Layout.Content>

      <Footer />
    </Layout>
  );
};

export default CommonLayout;
