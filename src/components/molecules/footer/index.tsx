import {
  Row,
  Col,
  Typography,
  Layout,
  Space,
  Flex,
  Divider,
  Input,
} from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

import footerStyle from "./index.module.scss";
import Button from "~/components/atoms/button/index.tsx";

const Footer = () => {
  return (
    <Layout.Footer className={footerStyle.container}>
      <Row justify="space-between" className={footerStyle.containerRow}>
        <Col xs={24} xxl={8}>
          <Typography.Title className={footerStyle.title} level={4}>
            Navigation
          </Typography.Title>
          <Flex gap={48}>
            <Flex vertical gap={12}>
              <Typography.Text className={footerStyle.text}>
                Home
              </Typography.Text>
              <Typography.Text className={footerStyle.text}>
                About us
              </Typography.Text>
              <Typography.Text className={footerStyle.text}>
                Our teams
              </Typography.Text>
            </Flex>

            <Flex vertical gap={12}>
              <Typography.Text className={footerStyle.text}>
                Whitepaper
              </Typography.Text>
              <Typography.Text className={footerStyle.text}>
                Marketplace
              </Typography.Text>
              <Typography.Text className={footerStyle.text}>
                Roadmap
              </Typography.Text>
            </Flex>

            <Flex vertical gap={12}>
              <Typography.Text className={footerStyle.text}>
                FAQs
              </Typography.Text>
              <Typography.Text className={footerStyle.text}>
                News
              </Typography.Text>
              <Typography.Text className={footerStyle.text}>
                Community
              </Typography.Text>
            </Flex>
          </Flex>
        </Col>

        <Col xs={24} xxl={6}>
          <Typography.Title className={footerStyle.title} level={4}>
            Contact Us
          </Typography.Title>
          <Flex vertical gap={16}>
            <Space>
              <PhoneOutlined />

              <Typography.Text className={footerStyle.text}>
                01234568910
              </Typography.Text>
            </Space>
            <Space>
              <MailOutlined />

              <Typography.Text className={footerStyle.text}>
                tymex-talent@tyme.com
              </Typography.Text>
            </Space>
          </Flex>
        </Col>

        <Col xs={24} xxl={8}>
          <Typography.Title className={footerStyle.title} level={4}>
            Subscribe to receive our latest update
          </Typography.Title>
          <Flex gap={32}>
            <Input
              className={footerStyle.email}
              placeholder="Your email address"
            />
            <Button
              color="secondary"
              type="primary"
              className={footerStyle.subscribeBtn}
            >
              Subscribe
            </Button>
          </Flex>
        </Col>
      </Row>

      <Divider className={footerStyle.divider} />

      <Row gutter={2} justify="space-between">
        <Col xs={24} lg={12} xl={12} xxl={16}>
          <Typography.Text className={footerStyle.text}>
            ©2023 Tyme - Edit. All Rights reserved.
          </Typography.Text>
        </Col>

        <Col xs={24} lg={10} xl={12} xxl={6}>
          <Flex gap={48}>
            <Typography.Text className={footerStyle.text}>
              Security
            </Typography.Text>
            <Typography.Text className={footerStyle.text}>
              Legal
            </Typography.Text>
            <Typography.Text className={footerStyle.text}>
              Privacy
            </Typography.Text>
          </Flex>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
