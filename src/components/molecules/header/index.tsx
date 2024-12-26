import React, { useState } from "react";
import { Drawer, Flex, Layout, Space } from "antd";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import {
  CloseCircleFilled,
  DownOutlined,
  GlobalOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import headerStyle from "./index.module.scss";
import Button from "~/components/atoms/button/index.tsx";
import NavigationList from "../nav/index.tsx";

const Header = () => {
  const isSp = useMediaQuery({ maxWidth: 1024 });
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return (
    <Layout.Header className={classNames(headerStyle.antHeader)}>
      <Flex
        justify="space-between"
        align="center"
        className={headerStyle.header}
      >
        {!isSp ? (
          <NavigationList />
        ) : (
          <React.Fragment>
            <MenuOutlined className={headerStyle.leftIcon} onClick={toggle} />
            <Drawer
              open={visible}
              width={262}
              placement="left"
              className={headerStyle.myDrawer}
              onClose={toggle}
              closeIcon={<CloseCircleFilled className={headerStyle.leftIcon} />}
            >
              <NavigationList onClick={toggle} />
            </Drawer>
          </React.Fragment>
        )}

        <Flex align="center" gap={40}>
          <Button color="secondary">Connect Wallet</Button>
          <Space>
            <GlobalOutlined className={headerStyle.rightIcon} />
            <DownOutlined className={headerStyle.rightIcon} />
          </Space>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};

export default Header;
