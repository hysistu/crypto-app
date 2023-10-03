import { QrCode, ReceiptLong, AssessmentOutlined } from "@mui/icons-material";
import { Drawer, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import {
  IconDashboardNavbar,
  IconDashboardNavbarColor,
  IconGraphNavbar,
  IconGraphNavbarColor,
  IconIncidentNavbar,
  IconIncidentNavbarColor,
  IconReportingNavbar,
  IconReportingNavbarColor,
  IconUserNavbar,
  IconUserNavbarColor,
} from "components/svg/icons";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import React from "react";
import { navbarHeight, sidebarWidth } from "src/utils/sidebarController";
import { usersRoles } from "src/utils/usersRoles";
import NavItem from "./NavItem";

const items = [
  {
    mainRoutes: [
      {
        route: "/dashboard",
        icon: <IconDashboardNavbar />,
        activeIcon: <IconDashboardNavbarColor />,
        title: "Dashboard",
      },
    ],
  },
  {
    mainRoutes: [
      {
        route: "/case",
        icon: <PlaylistAddCheckIcon />,
        activeIcon: <PlaylistAddCheckIcon />,
        title: "Case ID",
      },
    ],
  },
  {
    mainRoutes: [
      {
        route: "/reporting",
        icon: <IconReportingNavbar />,
        activeIcon: <IconReportingNavbarColor />,
        title: "Notification",
      },
      {
        route: "/track",
        icon: <IconIncidentNavbar />,
        activeIcon: <IconIncidentNavbarColor />,
        title: "Track Status",
      },
    ],
  },

  {
    mainRoutes: [
      {
        route: "/users",
        icon: <IconUserNavbar />,
        activeIcon: <IconUserNavbarColor />,
        title: "Users",
      },
    ],
  },
  // {
  //   mainRoutes: [
  //     {
  //       route: "/settings",
  //       icon: <IconSettingsNavbar />,
  //       activeIcon: <IconSettingsNavbarColor />,
  //       title: "Settings",
  //       text: true,
  //       nestedRoutes: [
  //         {
  //           route: "/ticket-categories/categories",
  //           icon: <PlaylistPlayIcon />,
  //           activeIcon: <PlaylistPlayIcon />,
  //           title: "Ticket Categories",
  //         },
  //         {
  //           route: "/ticket-status/status",
  //           icon: <PlaylistPlayIcon />,
  //           activeIcon: <PlaylistPlayIcon />,
  //           title: "Ticket Status",
  //         },
  //         {
  //           route: "/categories",
  //           icon: <IconCategoriesNavbar />,
  //           activeIcon: <IconCategoriesNavbarColor />,
  //           title: "Categories",
  //         },
  //         {
  //           route: "/ratings",
  //           icon: <IconRatingsNavbar />,
  //           activeIcon: <IconRatingsNavbarColor />,
  //           title: "Ratings",
  //         },
  //         {
  //           route: "/status",
  //           icon: <IconStatusesNavbar />,
  //           activeIcon: <IconStatusesNavbarColor />,
  //           title: "Statuses",
  //         },
  //         {
  //           route: "/levels",
  //           icon: <AssessmentOutlined />,
  //           activeIcon: <IconStatusesNavbarColor />,
  //           title: "Levels",
  //         },
  //         {
  //           route: "/types",
  //           icon: <IconTypesNavbar />,
  //           activeIcon: <IconTypesNavbarColor />,
  //           title: "Types",
  //           hideOn: [
  //             usersRoles.Guest,
  //             usersRoles.Simple,
  //             usersRoles.Manager,
  //             usersRoles.Admin,
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];

interface SidebarProps {
  open: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { open, setSidebarOpen } = props;
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"), {
    // defaultMatches: true,
    // noSsr: false,
  });

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: `calc(100% - ${navbarHeight}px)`,
          pt: 5,
          background: "purple",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              maxHeight: `calc(100vh - ${navbarHeight}px - 40px)`,
              overflowY: "auto",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {items.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setSidebarOpen(false)}
        variant={open ? "permanent" : "temporary"}
        PaperProps={{
          sx: {
            top: navbarHeight,
            border: 0,
            backgroundColor: "#fff",
            color: "primary.main",
            width: open ? sidebarWidth : 0,
            "::-webkit-scrollbar": {
              display: "none",
            },
          },
        }}
        BackdropProps={{
          sx: {
            top: navbarHeight,
            display: { lg: "none" },
          },
        }}
        elevation={0}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={() => setSidebarOpen(false)}
      open={open}
      PaperProps={{
        sx: {
          top: navbarHeight,
          backgroundColor: "#fff",
          color: "primary.main",
          width: sidebarWidth,
        },
      }}
      BackdropProps={{
        sx: {
          top: navbarHeight,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100, top: navbarHeight }}
      variant="temporary"
      elevation={0}
    >
      {content}
    </Drawer>
  );
};

export default Sidebar;
