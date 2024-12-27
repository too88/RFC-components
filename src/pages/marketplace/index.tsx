import React from "react";
import { Col, Flex, Form, Row } from "antd";

import Hero from "~/components/organisms/hero";
import markerPlaceStyle from "./index.module.scss";
import Category from "~/components/molecules/category";
import SearchComponent, { FieldType } from "~/components/molecules/filter/index.tsx";
import CardList from "~/components/molecules/card-list/index.tsx";
import useMarketplaceActions from "~/hooks/index.ts";

const Marketplace = () => {
  const [form] = Form.useForm<FieldType>();
  const { addMoreDataFn, getProductList, data, loading, isLoading } = useMarketplaceActions(form);

  return (
    <React.Fragment>
      <Hero />

      <Row className={markerPlaceStyle.container}>
        <Col xs={24} md={24} lg={6} xl={5}>
          <SearchComponent form={form} loading={loading} getListFn={getProductList} />
        </Col>

        <Col xs={24} md={24} lg={16} xl={18}>
          <Flex gap={40} vertical>
            <Category getListFn={getProductList} />

            <CardList data={data} loadMoreFn={addMoreDataFn} loading={loading} isLoading={isLoading} />
          </Flex>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Marketplace;

