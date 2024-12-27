import { memo } from "react";
import { Tabs, TabsProps } from "antd";
import classNames from "classnames";

import CategoryStyle from "./index.module.scss";

type Option = { value: string; label: string };

interface IProductCategoryProps extends TabsProps {
  getListFn: (category?: string) => Promise<void>;
}

export const categoryList: Option[] = [
  { value: "", label: "All" },
  { value: "Upper Body", label: "Upper Body" },
  { value: "Lower Body", label: "Lower Body" },
  { value: "Hat", label: "Hat" },
  { value: "Shoes", label: "Shoes" },
  { value: "Accessory", label: "Accessory" },
  { value: "Legendary", label: "Legendary" },
  { value: "Mythic", label: "Mythic" },
  { value: "Epic", label: "Epic" },
  { value: "Rare", label: "Rare" },
];

const Category = ({ getListFn, className, ...props }: IProductCategoryProps) => {
  return (
    <Tabs
      {...props}
      className={classNames(CategoryStyle.container, className)}
      items={categoryList.map(({ value, label }) => ({
        label,
        key: value,
      }))}
      onChange={item => getListFn(item)}
      defaultActiveKey={categoryList[0].value}
      tabBarGutter={24}
    />
  );
};

export default memo(Category);

