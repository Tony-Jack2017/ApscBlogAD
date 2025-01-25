import { ComponentType } from "@/types/common";
import classNames from "classnames";
import { forwardRef } from "react";

interface CardItf extends ComponentType {}

const ComCard = forwardRef<HTMLDivElement, CardItf>((props, ref) => {
  const { children, className, style } = props;

  const classes = classNames(className, `"card"`);

  const innerStyle = Object.assign({}, style);
  return (
    <div ref={ref} className={classes} style={innerStyle}>
      {children}
    </div>
  );
});

export default ComCard;
