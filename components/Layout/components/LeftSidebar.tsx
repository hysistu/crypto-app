import { QrCode, ReceiptLong, AssessmentOutlined } from "@mui/icons-material";
import { Drawer, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import {
  IconCategoriesNavbar,
  IconCategoriesNavbarColor,
  IconComplianceNavbar,
  IconComplianceNavbarColor,
  IconDashboardNavbar,
  IconDashboardNavbarColor,
  IconDataNavbar,
  IconDataNavbarColor,
  IconDepartmentsNavbar,
  IconDepartmentsNavbarColor,
  IconGraphNavbar,
  IconGraphNavbarColor,
  IconIncidentNavbar,
  IconIncidentNavbarColor,
  IconLearnNavbar,
  IconLearnNavbarColor,
  IconRatingsNavbar,
  IconRatingsNavbarColor,
  IconReportingNavbar,
  IconReportingNavbarColor,
  IconRolesNavbar,
  IconRolesNavbarColor,
  IconSectorsNavbar,
  IconSectorsNavbarColor,
  IconSettingsNavbar,
  IconSettingsNavbarColor,
  IconStatusesNavbar,
  IconStatusesNavbarColor,
  IconTaskNavbar,
  IconTaskNavbarColor,
  IconTypesNavbar,
  IconTypesNavbarColor,
  IconUserNavbar,
  IconUserNavbarColor,
  IconZoneNavbar,
  IconZoneNavbarColor,
} from "components/svg/icons";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
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
        nestedRoutes: [
          {
            route: "/data",
            icon: <IconDataNavbar />,
            activeIcon: <IconDataNavbarColor />,
            title: "Data",
          },
          {
            route: "/task",
            icon: <IconTaskNavbar />,
            activeIcon: <IconTaskNavbarColor />,
            title: "Task",
          },
        ],
      },
    ],
  },
  {
    mainRoutes: [
      {
        route: "/ticket",
        icon: <PlaylistAddCheckIcon />,
        activeIcon: <PlaylistAddCheckIcon />,
        title: "Tickets",
        nestedRoutes: [
          {
            route: "/ticket/add",
            icon: <AddTaskIcon />,
            activeIcon: <AddTaskIcon />,
            title: "Add Ticket",
          },
          {
            route: "/ticket/report",
            icon: <PlaylistAddCheckIcon />,
            activeIcon: <PlaylistAddCheckIcon />,
            title: "Ticket Report",
          },
        ],
      },
    ],
  },
  {
    mainRoutes: [
      {
        route: "/reporting",
        icon: <IconReportingNavbar />,
        activeIcon: <IconReportingNavbarColor />,
        title: "Reporting",
      },
      {
        route: "/incidents",
        icon: <IconIncidentNavbar />,
        activeIcon: <IconIncidentNavbarColor />,
        title: "Incidents",
      },
      // {
      //   route: "/risk-managment",
      //   icon: <IconRiskNavbar />,
      //   activeIcon: <IconRiskNavbarColor />,
      //   title: "Risk Managment",
      // },
    ],
  },
  {
    mainRoutes: [
      // {
      //   route: "/compliance",
      //   icon: <IconComplianceNavbar />,
      //   activeIcon: <IconComplianceNavbarColor />,
      //   title: "Compliance",
      // },
      {
        route: "/compliance-records",
        icon: <ReceiptLong />,
        activeIcon: <ReceiptLong />,
        title: "Records",
      },
      {
        route: "/knowledge-gate",
        icon: <IconLearnNavbar />,
        activeIcon: <IconLearnNavbarColor />,
        title: "Knowledge Gate",
      },
    ],
  },
  {
    mainRoutes: [
      {
        route: "/data",
        icon: <IconGraphNavbar />,
        activeIcon: <IconGraphNavbarColor />,
        title: "Data",
        text: true,
        nestedRoutes: [
          {
            route: "/users",
            icon: <IconUserNavbar />,
            activeIcon: <IconUserNavbarColor />,
            title: "Users",
            hideOn: [usersRoles.Guest, usersRoles.Simple, usersRoles.Manager],
          },
          {
            route: "/roles",
            icon: <IconRolesNavbar />,
            activeIcon: <IconRolesNavbarColor />,
            title: "Roles",
            hideOn: [
              usersRoles.Guest,
              usersRoles.Simple,
              usersRoles.Manager,
              usersRoles.Admin,
            ],
          },
          {
            route: "/departments",
            icon: <IconDepartmentsNavbar />,
            activeIcon: <IconDepartmentsNavbarColor />,
            title: "Departments",
            hideOn: [
              usersRoles.Guest,
              usersRoles.Simple,
              // usersRoles.Manager,
              // usersRoles.Admin,
            ],
          },
          {
            route: "/zones",
            icon: <IconZoneNavbar />,
            activeIcon: <IconZoneNavbarColor />,
            title: "Zones",
            hideOn: [
              usersRoles.Guest,
              usersRoles.Simple,
              usersRoles.Manager,
              usersRoles.Admin,
            ],
          },
          {
            route: "/sectors",
            icon: <IconSectorsNavbar />,
            activeIcon: <IconSectorsNavbarColor />,
            title: "Sectors",
            hideOn: [
              usersRoles.Guest,
              usersRoles.Simple,
              usersRoles.Manager,
              usersRoles.Admin,
            ],
          },
          // {
          //   route: "/qrcodes",
          //   icon: <QrCode />,
          //   activeIcon: <QrCode />,
          //   title: "QR Codes",
          // },
        ],
      },
    ],
  },
  {
    mainRoutes: [
      {
        route: "/settings",
        icon: <IconSettingsNavbar />,
        activeIcon: <IconSettingsNavbarColor />,
        title: "Settings",
        text: true,
        nestedRoutes: [
          {
            route: "/ticket-categories/categories",
            icon: <PlaylistPlayIcon />,
            activeIcon: <PlaylistPlayIcon />,
            title: "Ticket Categories",
          },
          {
            route: "/ticket-status/status",
            icon: <PlaylistPlayIcon />,
            activeIcon: <PlaylistPlayIcon />,
            title: "Ticket Status",
          },
          {
            route: "/categories",
            icon: <IconCategoriesNavbar />,
            activeIcon: <IconCategoriesNavbarColor />,
            title: "Categories",
          },
          {
            route: "/ratings",
            icon: <IconRatingsNavbar />,
            activeIcon: <IconRatingsNavbarColor />,
            title: "Ratings",
          },
          {
            route: "/status",
            icon: <IconStatusesNavbar />,
            activeIcon: <IconStatusesNavbarColor />,
            title: "Statuses",
          },
          {
            route: "/levels",
            icon: <AssessmentOutlined />,
            activeIcon: <IconStatusesNavbarColor />,
            title: "Levels",
          },
          {
            route: "/types",
            icon: <IconTypesNavbar />,
            activeIcon: <IconTypesNavbarColor />,
            title: "Types",
            hideOn: [
              usersRoles.Guest,
              usersRoles.Simple,
              usersRoles.Manager,
              usersRoles.Admin,
            ],
          },
        ],
      },
    ],
  },
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
