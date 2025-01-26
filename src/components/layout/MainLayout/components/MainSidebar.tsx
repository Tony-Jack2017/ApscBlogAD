import { FC, Fragment, ReactNode } from "react";
import Logo from "@/assets/logo/logo-brand.png"
import { Divider, Menu, MenuItem, MenuList, Typography } from "@mui/material";
import {
  IconLayoutDashboard,
  IconArticle,
  IconBubbleText,
  IconUsers,
  IconSettingsCog
} from "@tabler/icons-react";

import { ComponentType } from "@/types/common";


export type SidebarItemType = {
  type?: "item" | "group"
  icon?: ReactNode
  path?: string
  title: string
  children?: SidebarItemType[]
}

interface MainSidebarItf extends ComponentType {
}

interface SidebarMenuItf extends ComponentType {
  sidebarMenu: SidebarItemType[]
}

const sidebarMenu: SidebarItemType[] = [
  {
    type: "group",
    title: "Application",
    children: [
      { icon: <IconLayoutDashboard />, title: "Dashboard", path: "/home/dashboard" },
      { icon: <IconArticle />, title: "Article", path: "/article" },
      { icon: <IconBubbleText />, title: "Message", path: "/message" },
    ]
  },
  {
    type: "group",
    title: "Other",
    children: [
      { icon: <IconUsers />, title: "User", path: "/user" },
      { icon: <IconSettingsCog />, title: "Setting", path: "/setting" },
    ]
  }
]

const SidebarMenu: FC<SidebarMenuItf> = (props) => {
  const {
    sidebarMenu
  } = props

  return (
    <MenuList id="sidebar-menu">
      {
        sidebarMenu.map((group, indexGroup) => {
          return (
            <Fragment key={indexGroup}>
              <Divider />
              {
                group.children?.map((item, indexItem) => (
                  <MenuItem key={indexItem}>
                    {item.icon}
                    <Typography>{item.title}</Typography>
                  </MenuItem>
                ))
              }
            </Fragment>
          )
        })
      }
    </MenuList>
  )
}

const MainSidebar: FC<MainSidebarItf> = (props) => {
  const {
    style
  } = props;

  const innerStyle = Object.assign({
  }, style ? style : {})

  return (
    <div className="sidebar" style={innerStyle}>
      <div className="sidebar-header">
        <img className="logo" src={Logo} alt="logo" />
      </div>
      <div className="sidebar-content">
        <SidebarMenu sidebarMenu={sidebarMenu} />
      </div>
      <div className="sidebar-footer">
        V 1.0.0
      </div>
    </div>
  );
};

export default MainSidebar;