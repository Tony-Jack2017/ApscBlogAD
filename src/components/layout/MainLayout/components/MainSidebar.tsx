import { FC } from "react";
import Divider from '@mui/material/Divider';
import Logo from "@/assets/logo/logo-brand.png"
import { MenuItem, MenuList } from "@mui/material";

interface MainSidebarItf extends ComponentType {
  sidebarMenu: []
}

const MainSidebar: FC<MainSidebarItf> = (props) => {
  const {
    sidebarMenu, style
  } = props;

  const innerStyle = Object.assign({
  }, style ? style : {})

  return (
    <div className="sidebar" style={innerStyle}>
      <div className="sidebar-header">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <Divider />
      <div className="sidebar-content">
        <MenuList>
          {
            sidebarMenu.map((item, index) => (
              <MenuItem key={index}>
                { item }
              </MenuItem>
            ))
          }
        </MenuList>
      </div>
      <div className="sidebar-footer">

      </div>
    </div>
  );
};

export default MainSidebar;
