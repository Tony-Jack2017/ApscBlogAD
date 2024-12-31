import { ComponentType } from "@/types/common";
import { FC } from "react";

interface MainHeaderItf extends ComponentType {}

const MainHeader: FC<MainHeaderItf> = (props) => {
  const {} = props;
  return <div>MainHeader</div>;
};

export default MainHeader;
