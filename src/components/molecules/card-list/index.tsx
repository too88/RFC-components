import React, { memo } from "react";
import { Empty, Flex, Spin } from "antd";
import classNames from "classnames";

import cardListStyle from "./index.module.scss";
import ProductCard, { IProduct } from "../card";
import Button from "~/components/atoms/button/index.tsx";

interface IProductProps {
  data: IProduct[];
  loadMoreFn: () => Promise<void>;
  loading: boolean;
  isLoading: boolean;
}

const CardList = ({ data, loadMoreFn, isLoading, loading }: IProductProps) => {
  return (
    <React.Fragment>
      {!loading ? (
        <React.Fragment>
          {data?.length ? (
            <Flex className={classNames(cardListStyle.cardList, cardListStyle.scrollbar)} gap={40} wrap>
              {data.map((product, idx) => {
                return <ProductCard key={idx} product={product} />;
              })}
            </Flex>
          ) : (
            <Empty className={cardListStyle.empty} />
          )}
        </React.Fragment>
      ) : (
        <Flex align="center" className={cardListStyle.loading} justify="center">
          <Spin className={cardListStyle.loaderIcon} spinning={loading} />
        </Flex>
      )}

      {!!data?.length && !loading && (
        <Flex justify="center">
          <Button className={cardListStyle.readMoreBtn} color="secondary" loading={isLoading} onClick={loadMoreFn}>
            View More
          </Button>
        </Flex>
      )}
    </React.Fragment>
  );
};

export default memo(CardList);

