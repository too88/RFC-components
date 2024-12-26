import { Ref, forwardRef } from "react";
import { ButtonColorType } from "antd/es/button";
import { Button as AntdButton, ButtonProps as AntdProps } from "antd";
import classNames from "classnames";

import buttonStyle from "./index.module.scss";

interface TButton extends Omit<AntdProps, "color"> {
  color?: ButtonColorType | "secondary";
}

const mapping: Record<string, string> = {
  secondary: buttonStyle.secondary,
};

const Button = (props: TButton, ref: Ref<HTMLButtonElement>) => {
  const { className, children, color, loading, ...rest } = props;

  return (
    // prettier-ignore
    <AntdButton {...rest} ref={ref} loading={loading} className={classNames(className, mapping[color || ""])}>{!loading && children}</AntdButton>
  );
};

export default forwardRef(Button);
