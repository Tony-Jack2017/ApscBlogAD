import { FC } from "react";
import classNames from "classnames";
import { IconCalendarEvent, IconSearch, IconBell } from "@tabler/icons-react";
import { Avatar} from "@mui/material";

import { ComponentType } from "@/types/common";
import ComIcon from "@/components/common/Icon";

interface MainHeaderItf extends ComponentType {}

interface NavBarItf extends ComponentType {}

const NavBar: FC<NavBarItf> = (props) => {
  const { className } = props;

  return (
    <nav className={classNames(className)}>
      <ComIcon>
        <IconSearch size={20} />
      </ComIcon>
      <ComIcon>
        <IconBell size={20} />
      </ComIcon>
      <Avatar sx={{ width: 36, height: 36 }} />
    </nav>
  );
};

const MainHeader: FC<MainHeaderItf> = (props) => {
  const {} = props;
  return (
    <div className="header">
      <div className="header-left">
        <IconCalendarEvent strokeWidth={2} />
        <span> January, 25, 2025</span>
      </div>
      <NavBar className="header-right" />
    </div>
  );
};

export default MainHeader;
