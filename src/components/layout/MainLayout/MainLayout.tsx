import { CSSProperties, Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router";

import MainSidebar from "./MainSidebar";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { IconCalendarEvent } from "@tabler/icons-react";
import MainLoadingPage from "@/pages/common/loading";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import ErrorPage from "@/pages/common/error";

const MainLayout = () => {
  const location = useLocation();

  const sidebar = useRef<HTMLDivElement | null>(null);
  const header = useRef<HTMLDivElement | null>(null);

  const [layoutStyle, setLayoutStyle] = useState<{
    left: CSSProperties | undefined;
    content: CSSProperties | undefined;
  }>({
    left: undefined,
    content: undefined,
  });

  useEffect(() => {
    const setLayout = () => {
      if (sidebar.current && header.current) {
        setLayoutStyle({
          left: { marginLeft: sidebar.current.offsetWidth },
          content: { paddingTop: header.current.offsetHeight },
        });
      }
    };
    window.addEventListener("resize", setLayout);
    setLayout();
    return () => {
      window.removeEventListener("resize", setLayout);
    };
  }, []);

  return (
    <ErrorBoundary errorUI={<ErrorPage />}>
      <div className="main-layout">
        <div ref={sidebar} className="main-sidebar layout-left">
          <MainSidebar />
        </div>
        <div
          className="layout-right"
          style={{
            ...layoutStyle!.left,
            position: "relative",
            height: "100vh",
          }}
        >
          <div ref={header} className="main-header">
            <MainHeader />y
          </div>
          <div style={layoutStyle!.content} className="main-content">
            <Suspense fallback={<MainLoadingPage />}>
              <div className="page-header">
                <p className="page-title">
                  {location.state ? location.state.title : "APSC BUILDER"}
                </p>
                <div className="page-date">
                  <IconCalendarEvent strokeWidth={2} />
                  <span> January, 25, 2025</span>
                </div>
              </div>
              <Outlet />
            </Suspense>
          </div>
          <div className="main-footer">
            <MainFooter />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default MainLayout;
