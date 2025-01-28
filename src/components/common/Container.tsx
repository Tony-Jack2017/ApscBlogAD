import { forwardRef } from "react";
import { ComponentType } from "@/types/common";
import classNames from "classnames";

interface ContainerItf extends ComponentType {
  type: "page" | "section";
  layout?: "grid"
}

const ComContainer = forwardRef<HTMLDivElement, ContainerItf>((props, ref) => {
  const { type, className, style, children } = props;

  const classes = classNames(className, "container", `container-type_${type}`);

  const innerStyle = Object.assign({}, style);

  return (
    <div ref={ref} className={classes} style={innerStyle}>
      {children}
    </div>
  );
});

export default ComContainer;
