import { memo } from "react";
import { FormInstance, FormProps, Flex, Form, Input, Select, Slider, Typography } from "antd";
import Icon, { SearchOutlined } from "@ant-design/icons";

import { PRICE_RANGE } from "~/libs/constants.ts";
import Button from "~/components/atoms/button/index.tsx";
import FilterStyle from "./index.module.scss";
import { ResetIcon } from "~/components/atoms/icon/index.tsx";
import { SortOrder } from "antd/es/table/interface";

export interface FieldType {
  title: string;
  price: [number, number];
  tier: string;
  theme: string;
  createAtOrder: SortOrder;
  priceSortOrder: SortOrder;
}

interface FormFilterProps {
  form: FormInstance;
  getListFn: (category?: string) => Promise<void>;
  loading?: boolean;
}

const initialStore = {
  title: "",
  tier: "",
  theme: "",
  price: PRICE_RANGE,
  priceSortOrder: "desc",
  createAtOrder: "asc",
};

export const priceFilterOption = [
  { value: "asc", label: "Low to High" },
  { value: "desc", label: "High to Low" },
];

type Option = { value: string; label: string };

export const tierList: Option[] = [
  { value: "", label: "All" },
  { value: "Basic", label: "Basic" },
  { value: "Premium", label: "Premium" },
  { value: "Deluxe", label: "Deluxe" },
];

export const themeList: Option[] = [
  { value: "", label: "All" },
  { value: "Dark", label: "Dark" },
  { value: "Light", label: "Light" },
  { value: "Colorful", label: "Colorful" },
  { value: "Halloween", label: "Halloween" },
];

export const periodSortOption = [
  { value: "asc", label: "Latest" },
  { value: "desc", label: "Oldest" },
];

const SearchComponent = ({ form, getListFn, loading }: FormFilterProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onFinishFn: FormProps<FieldType>["onFinish"] = _ => {
    getListFn();
  };

  const resetFn = () => {
    form.resetFields();
    getListFn();
  };

  return (
    <Form name="filter" form={form} layout="vertical" className={FilterStyle.container} onFinish={onFinishFn} initialValues={initialStore} autoComplete="off" labelCol={{ span: 8 }}>
      <Form.Item<FieldType> name="title">
        <Input placeholder="Quick Search" className={FilterStyle.searchInput} prefix={<SearchOutlined className={FilterStyle.inputSearchIcon} />} />
      </Form.Item>

      <Form.Item<FieldType> name="price" label="price" className={FilterStyle.filterInput}>
        <Slider
          range
          min={0}
          max={200}
          rootClassName={FilterStyle.range}
          tooltip={{
            placement: "top",
            rootClassName: FilterStyle.tooltip,
            formatter: value => `${value} ETH`,
          }}
        />
      </Form.Item>
      <Flex justify="space-between">
        <Typography.Text className={FilterStyle.ETHPrice}>0.01 ETH</Typography.Text>

        <Typography.Text className={FilterStyle.ETHPrice}>200 ETH</Typography.Text>
      </Flex>

      <Form.Item<FieldType> name="tier" label="tier" className={FilterStyle.filterInput}>
        <Select className={FilterStyle.formSelect} options={tierList} />
      </Form.Item>

      <Form.Item<FieldType> name="theme" label="theme" className={FilterStyle.filterInput}>
        <Select className={FilterStyle.formSelect} options={themeList} />
      </Form.Item>

      <Form.Item<FieldType> name="createAtOrder" label="time" className={FilterStyle.filterInput}>
        <Select className={FilterStyle.formSelect} options={periodSortOption} />
      </Form.Item>

      <Form.Item<FieldType> name="priceSortOrder" label="price" className={FilterStyle.filterInput}>
        <Select className={FilterStyle.formSelect} options={priceFilterOption} />
      </Form.Item>

      <Form.Item>
        <Flex align="center" gap={48}>
          <Button className={FilterStyle.resetBtn} type="text" onClick={resetFn} disabled={loading}>
            <Icon component={ResetIcon} />
            <Typography.Text>Reset Filter</Typography.Text>
          </Button>
          <Button className={FilterStyle.searchBtn} type="primary" disabled={loading} htmlType="submit" color="secondary">
            Search
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
};

export default memo(SearchComponent);

