import { ComponentType } from "@/types/common";
import { FC } from "react";

interface MainSidebarItf extends ComponentType {}

const MainSidebar: FC<MainSidebarItf> = (props) => {
  const {} = props;
  return (
    <div className="sidebar">
      MainSidebar
    </div>
  );
};

export default MainSidebar;
