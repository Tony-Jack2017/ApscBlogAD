import { ComponentType } from "@/types/common";
import { CSSProperties, FC } from "react";

interface AuthHeaderItf extends ComponentType {
  background?: CSSProperties["background"]
}

const MainHeader: FC<AuthHeaderItf> = (props) => {
  const {
    style
  } = props;
  return (
    <div style={style}>
      MainHeader
    </div>
  )
};

export default MainHeader;