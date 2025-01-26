import { FC } from "react";
import Logo from "@/assets/logo/logo-brand.png";

import { ComponentType } from "@/types/common";
import SidebarMenu from "./components/SidebarMenu";

interface MainSidebarItf extends ComponentType {}

const MainSidebar: FC<MainSidebarItf> = (props) => {
  const { style } = props;

  const innerStyle = Object.assign({}, style ? style : {});

  return (
    <div className="sidebar" style={innerStyle}>
      <div className="sidebar-header">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="sidebar-content">
        <SidebarMenu />
      </div>
      <div className="sidebar-footer">V 1.0.0</div>
    </div>
  );
};

export default MainSidebar;
