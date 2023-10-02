import { Breadcrumbs, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import theme from "src/theme";

interface Props {
  links: {
    route: string;
    title: string;
  }[];
  currentRoute: string;
}
const BreadCrumbs: React.FC<Props> = (props) => {
  const { links, currentRoute } = props;

  return (
    <Breadcrumbs sx={{ mb: 2 }}>
      {links.map((link, index) => (
        <Link key={index} href={link.route}>
          <Typography
            sx={{
              textTransform: "none",
              backgroundColor: "#F5F5F5",
              py: 0.2,
              px: 1,
              borderRadius: 9.5,
              color: theme.palette.secondary.main,
              fontSize: 12,
              fontWeight: 500,
              lineHeight: 1.75,
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#dcdcdc",
              },
            }}
          >
            {link.title}
          </Typography>
        </Link>
      ))}
      <Typography
        sx={{
          textTransform: "none",
          backgroundColor: "#F5F5F5",
          py: 0.2,
          px: 1,
          borderRadius: 9.5,
          color: theme.palette.secondary.main,
          fontSize: 12,
          fontWeight: 500,
          lineHeight: 1.75,
        }}
      >
        {currentRoute}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
