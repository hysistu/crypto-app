import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  ListItem,
} from "@mui/material";
import { IconAccordion } from "components/svg/icons";
import useAuth from "context/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { colors } from "src/utils/colors";
import { has } from "src/utils/helper";

interface Propsat {
  route: any;
  icon: any;
  activeIcon: any;
  title: any;
  parent: any;
  nested?: any;
  hideOn?: any;
}
const NavItemButtonStyled: React.FC<any> = (props) => {
  const { route, icon, activeIcon, title, parent, text, toggleAcordion } =
    props;
  const router = useRouter();
  const sameRoute = router.pathname === route;
  const { user } = useAuth();
  return !props?.hideOn?.includes(user?.role_id?.name) ? (
    text ? (
      <Button
        component="a"
        onClick={toggleAcordion}
        startIcon={sameRoute || parent ? activeIcon : icon}
        sx={{
          px: 3,
          py: 1.3,
          minWidth: "100%",
          fontSize: "16px",
          textTransform: "none",
          border: "1px solid",
          borderRadius: "0 !important",
          borderColor: "transparent",
          color: "white",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: "transparent",
            color: "white",
            borderColor: "transparent",
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    ) : (
      <Link href={route}>
        <Button
          component="a"
          startIcon={sameRoute || parent ? icon : icon}
          sx={{
            px: 3,
            py: 1.3,
            minWidth: "100%",
            fontSize: "16px",
            textTransform: "none",
            borderColor: "#fff",
            color: sameRoute || parent ? "black" : "white",
            backgroundColor: sameRoute || parent ? "white" : "",
            "&:hover": {
              backgroundColor: sameRoute ? "transparent" : "white",
              color: sameRoute || parent ? "white" : "black",
              borderColor: sameRoute
                ? "#fff"
                : (theme) => theme.palette.primary.main,
            },
          }}
        >
          <Box sx={{ flexGrow: 1 }}>{title}</Box>
        </Button>
      </Link>
    )
  ) : (
    <Box></Box>
  );
};

interface NavItemButtonType {
  parent: any;
  route: any;
  icon: any;
  activeIcon: any;
  title: any;
  nestedRoutes?: any;
}
const NavItemButtonType: React.FC<NavItemButtonType> = (props) => {
  const { parent, route, icon, activeIcon, title, nestedRoutes } = props;
  const [expand, setExpand] = React.useState<boolean>(false);
  const toggleAcordion = () => {
    setExpand((prev) => !prev);
  };

  useEffect(() => {
    if (parent && !expand) {
      setExpand(true);
    }
  }, [parent]);

  return has(nestedRoutes) ? (
    <Accordion elevation={0} expanded={expand}>
      <AccordionSummary
        expandIcon={
          <IconButton onClick={toggleAcordion}>
            <IconAccordion fontSize="small" />
          </IconButton>
        }
        sx={{
          p: 0,
          minHeight: 0,
          "&.Mui-expanded": {
            minHeight: 0,
            m: 0,
          },
          ".MuiAccordionSummary-content": {
            m: 0,
            flexGrow: "initial",
            "&.Mui-expanded": {
              margin: "0",
            },
          },
        }}
      >
        <NavItemButtonStyled {...props} toggleAcordion={toggleAcordion} />
      </AccordionSummary>
      <AccordionDetails>
        {nestedRoutes.map((nestedR: any, index: any) => (
          <NavItemButtonStyled {...nestedR} nested key={index} />
        ))}
      </AccordionDetails>
    </Accordion>
  ) : (
    <NavItemButtonStyled {...props} />
  );
};

interface NavItemProps {
  item: any;
}
const NavItem: React.FC<NavItemProps> = (props) => {
  const { item } = props;
  const [parent, setParent] = React.useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    item?.mainRoutes?.map((routeItem: any) => {
      if (routeItem?.nestedRoutes?.length) {
        const _parent = routeItem?.nestedRoutes.filter(
          (child: any) => child.route === router.pathname
        );
        setParent(_parent.length > 0);
      }
    });
  }, []);
  const { user } = useAuth();

  return (
    <>
      {!item?.hideOn?.includes(user?.role_id?.name) && (
        <ListItem
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            borderRadius: "0  !important",
            mx: "auto",
            width: "100%",
            ":last-of-type": {
              borderBottom: "none",
            },
            ":first-of-type": {
              pt: 0,
            },
          }}
        >
          {has(item.mainRoutes) &&
            item.mainRoutes.map((route: any, index: any) => (
              <NavItemButtonType parent={parent} {...route} key={index} />
            ))}
        </ListItem>
      )}
    </>
  );
};
export default NavItem;
