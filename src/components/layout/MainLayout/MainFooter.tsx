import { ComponentType } from "@/types/common";
import { FC } from "react";

interface MainFooterItf extends ComponentType {}

const MainFooter: FC<MainFooterItf> = (props) => {
  const { style } = props;

  return (
    <div style={style} className="footer">
      <p>MADE BY ❤ APSC BUILDER</p>
    </div>
  );
};

export default MainFooter;
