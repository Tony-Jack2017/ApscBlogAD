import { ComponentType } from "@/types/common";
import { FC } from "react";

interface MainHeaderItf extends ComponentType {}

interface NavBarItf {}

const NavBar: FC<NavBarItf> = (props) => {
  const {} = props;

  return <nav></nav>;
};

const MainHeader: FC<MainHeaderItf> = (props) => {
  const {} = props;
  return (
    <div className="header">
      This is header
      <NavBar />
    </div>
  );
};

export default MainHeader;
