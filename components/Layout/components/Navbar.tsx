import React from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { navbarHeight, sidebarWidth } from "src/utils/sidebarController";
import {
  IconCalendarColor,
  IconAccordion,
  IconNotificationsColor,
  IconProfileBw,
  IconLogoutBw,
} from "components/svg/icons";
import Link from "next/link";
import useAuth from "context/useAuth";
import { colors } from "src/utils/colors";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface NavbarProps {
  title: string;
  setLeftSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRightSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  leftSidebarOpen: boolean;
  rightSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const {
    title,
    setLeftSidebarOpen,
    setRightSidebarOpen,
    leftSidebarOpen,
    rightSidebarOpen,
  } = props;

  const { user } = useAuth();

  const currentDate = new Intl.DateTimeFormat("en-GB").format(new Date());
  const { logout } = useAuth();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#fff",
        minHeight: navbarHeight,
        boxShadow: 0,
        display: "flex",
        justifyContent: "center",
        transition: `all 225ms cubic-bezier(0, 0, 0.2, 1) 0ms`,
        borderBottom: `1px solid ${colors.borderColor}`,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: "100%",
          left: 0,
          px: 2,
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <IconButton
              onClick={() => {
                if (rightSidebarOpen) {
                  setRightSidebarOpen(false);
                }
                setLeftSidebarOpen(!leftSidebarOpen);
              }}
              sx={{ display: { xs: "inline-flex", lg: "none" } }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>
            <Link href="/dashboard">
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  ml: { xs: 2, lg: 1 },
                  cursor: "pointer",
                }}
              >
                <img src="/images/logo.png" alt="logo" height="60px" />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.primary}
                  ml={2}
                >
                  Crypto
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
              position: { lg: "absolute" },
              left: { lg: sidebarWidth },
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                color: colors.dark,
                fontWeight: 600,
                fontSize: {
                  xs: "22px",
                  sm: "32px",
                },
              }}
            >
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "flex" }, alignItems: "center" }}>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                mr: { sm: 1, md: 1, lg: 20 },
                "> svg": {
                  width: "1.5em",
                  height: "1.5em",
                },
              }}
            >
              <IconCalendarColor />
              <Typography
                fontWeight={500}
                color="primary"
                sx={{ ml: { sm: 1 }, fontSize: "16px" }}
              >
                {currentDate}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  if (leftSidebarOpen) {
                    setLeftSidebarOpen(false);
                  }
                  setRightSidebarOpen(!rightSidebarOpen);
                }}
                sx={{ display: { lg: "none" }, mr: 1 }}
              >
                <Badge
                  color="primary"
                  variant="dot"
                  sx={{ "> svg path": { fill: colors.primary } }}
                >
                  <IconNotificationsColor />
                </Badge>
              </IconButton>
              <Box
                sx={{
                  mx: 1,
                  display: { xs: "none", md: "initial" },
                }}
              >
                <Box display="flex" gap="5px">
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "17px",
                      fontWeight: "500",
                      color: colors.dark,
                    }}
                  >
                    {user?.firstName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      lineHeight: "17px",
                      fontWeight: "500",
                      color: colors.dark,
                    }}
                  >
                    {user?.lastName}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="end" gap="5px">
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: "12px",
                      lineHeight: "15px",
                      fontWeight: "400",
                      color: colors.dark,
                    }}
                  >
                    {user?.role}
                  </Typography>
                </Box>
              </Box>
              <Avatar
                sx={{
                  height: 40,
                  width: 40,
                }}
              >
                {user?.firstName.charAt(0)}
                {user?.lastName.charAt(0)}
              </Avatar>
              <IconButton
                sx={{
                  px: { xs: 0.5, md: 1 },
                  py: { xs: 0.5, md: 1 },
                }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <IconAccordion fontSize="large" />
              </IconButton>
              <Menu
                sx={{
                  marginTop: "5px",
                }}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={open}
                onClose={handleClose}
              >
                <Link href={`/profile/`} passHref>
                  <MenuItem
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400",
                    }}
                    onClick={handleClose}
                  >
                    <ListItemIcon>
                      <IconProfileBw fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>Profile</ListItemText>
                  </MenuItem>
                </Link>
                <MenuItem onClick={() => logout()}>
                  <ListItemIcon>
                    <IconLogoutBw fontSize="large" />
                  </ListItemIcon>
                  <ListItemText>Log Out</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
