import { Box, IconButton, styled, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import { navbarHeight, sidebarWidth } from "src/utils/sidebarController";
import { colors } from "src/utils/colors";
import { IconArrowHorizontally } from "components/svg/icons";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: navbarHeight,
  height: "100%",
}));

const Layout: React.FC<LayoutProps> = (props) => {
  const { title, children } = props;
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    // defaultMatches: true,
    // noSsr: false,
  });
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(lgUp);
  const [rightSidebarOpen, setRightSidebarOpen] = useState<boolean>(lgUp);

  useEffect(() => {
    setLeftSidebarOpen(lgUp);
    setRightSidebarOpen(lgUp);
  }, [lgUp]);

  return (
    <LayoutRoot
      sx={{
        transition: `all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms`,
        marginLeft: {
          lg: `${leftSidebarOpen ? sidebarWidth : 0}px`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          backgroundColor: "#FBFBFB",
          width: "100%",
          borderLeft: "1px solid",
          borderRight: "1px solid",
          borderColor: colors.borderColor,
          height: `calc(100vh - ${navbarHeight}px)`,
          overflowX: "hidden",
          overflowY: "scroll",
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Box
          component="main"
          sx={{
            py: 3,
            px: { xs: 3, lg: 5 },
          }}
        >
          <IconButton
            sx={{
              zIndex: (theme) => theme.zIndex.appBar + 101,
              width: "40px",
              height: "40px",
              position: "fixed",
              left: leftSidebarOpen ? `calc(${sidebarWidth}px - 20px)` : 0,
              backgroundColor: "#fff",
              top: "200px",
              border: `1px solid ${colors.borderColor}`,
              transform: leftSidebarOpen ? "" : "rotate(180deg)",
              display: { xs: "none", lg: "inline-flex" },
            }}
            onClick={() => {
              setLeftSidebarOpen(!leftSidebarOpen);
            }}
          >
            <IconArrowHorizontally fontSize="small" />
          </IconButton>

          {children}
        </Box>
      </Box>
      <Navbar
        setLeftSidebarOpen={setLeftSidebarOpen}
        setRightSidebarOpen={setRightSidebarOpen}
        title={title}
        leftSidebarOpen={leftSidebarOpen}
        rightSidebarOpen={rightSidebarOpen}
      />
      <LeftSidebar setSidebarOpen={setLeftSidebarOpen} open={leftSidebarOpen} />
      {/* <RightSidebar
        setSidebarOpen={setRightSidebarOpen}
        open={rightSidebarOpen}
      /> */}
    </LayoutRoot>
  );
};

export default Layout;
