import { Outlet } from "react-router";
import Container from "../../common/Container";
import MainSidebar from "./components/MainSidebar";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import { CSSProperties, useEffect, useRef, useState } from "react";

const MainLayout = () => {

  const sidebar = useRef<HTMLDivElement | null>(null)
  const header = useRef<HTMLDivElement | null>(null)

  const [layoutStyle, setLayoutStyle] = useState<{
    left: CSSProperties | undefined
    content: CSSProperties | undefined
  }>({
    left: undefined,
    content: undefined
  })

  useEffect(() => {
    if(sidebar.current && header.current) {
      setLayoutStyle({
        left: { marginLeft: sidebar.current.offsetWidth },
        content: { paddingTop: header.current.offsetHeight },
      })
    }
  }, [])

  return (
    <Container className="main-layout" type="page">
      <div ref={sidebar} className="main-sidebar layout-left">
        <MainSidebar sidebarMenu={[]} />
      </div>
      <div className="layout-right" style={{...layoutStyle!.left, position: "relative", height: "100vh"}}>
        <div ref={header} className="main-header">
          <MainHeader />
        </div>
        <div style={layoutStyle!.content} className="main-content">
          <Outlet />
        </div>
        <div className="main-footer">
          <MainFooter />
        </div>
      </div>
    </Container>
  );
};

export default MainLayout;
