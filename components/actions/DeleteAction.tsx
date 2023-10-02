import { FC } from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { IconDelete } from "components/svg/icons";
import { colors } from "src/utils/colors";

type DeleteActionProps = {
  actionDelete: any;
  reloadData?: any;
  id: string;
  deleteText?: string;
  btnStyle?: string;
};

const DeleteAction: FC<DeleteActionProps> = ({
  actionDelete,
  reloadData,
  id,
  deleteText,
  btnStyle,
}) => {
  if (id) {
    return (
      <Button
        sx={{
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
        variant="text"
        startIcon={<IconDelete />}
        style={{ textTransform: "capitalize" }}
        onClick={() => {
          actionDelete(id).then(() => {
            reloadData();
            toast.warning(deleteText);
          });
        }}
      >
        Delete
      </Button>
    );
  }
  return <></>;
};

export default DeleteAction;
