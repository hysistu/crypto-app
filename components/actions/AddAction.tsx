import { FC, ReactElement } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import { colors } from "src/utils/colors";

type AddActionProps = {
  url?: string;
  label?: string;
  id?: string;
  icon?: ReactElement;
};

const AddAction: FC<AddActionProps> = ({ url, id, label = "Add", icon }) => {
  return (
    <Link href={id ? `/${url}/?id=${id}` : `/${url}`} passHref>
      <Button
        sx={{
          textTransform: "capitalize",
          background: "transparent",
          borderRadius: "10px",
          color: "#262B2B",
          border: "1px solid",
          borderColor: "transparent",
          "&:hover": {
            color: "#3E66FB",
            borderColor: colors.primary,
            svg: {
              stroke: "#3E66FB",
              " path": {
                stroke: "#3E66FB",
              },
              " circle": {
                stroke: "#3E66FB",
              },
            },
          },
        }}
        startIcon={icon}
        variant="text"
      >
        {label}
      </Button>
    </Link>
  );
};

export default AddAction;
