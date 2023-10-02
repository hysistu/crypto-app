import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { IconClose } from "components/svg/icons";
import Link from "next/link";
import React, { ReactElement } from "react";
import { colors } from "src/utils/colors";

interface Props {
  addModalOpen: boolean;
  setAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addModalData: {
    icon: ReactElement;
    title: string;
    description: string;
    link: string;
    color?: string;
  }[];
  modalsOpenHandler: any;
}
const AddModal: React.FC<Props> = (props) => {
  const { addModalOpen, addModalData, modalsOpenHandler } = props;
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={addModalOpen}
      onClose={modalsOpenHandler}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { sm: 6, lg: 8 },
          pt: 4,
          pb: 0,
        }}
      >
        <Typography fontWeight={700} fontSize={22}>
          Add New
        </Typography>
        <IconButton onClick={modalsOpenHandler}>
          <IconClose />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ mt: 5, px: { sm: 6, lg: 8 }, pb: 8 }}>
        <Grid container rowSpacing={4} columnSpacing={5}>
          {addModalData.map((data, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Link href={data.link}>
                <Button
                  component="a"
                  sx={{
                    pt: 4,
                    pb: 3,
                    px: { xs: 5, sm: 8, md: 10 },
                    width: "100%",
                    border: `1px solid ${colors.borderColor}`,
                    display: "block",
                    textTransform: "none",
                    textAlign: "center",
                    " > svg": {
                      fontSize: "24px",
                      width: "1.2em",
                      height: "1.2em",
                      "&.categoriesIcon": {
                        " path": {
                          stroke: colors.primary,
                        },
                      },
                    },
                    " path": {
                      stroke: data.color && data.color,
                    },
                  }}
                  onClick={modalsOpenHandler}
                >
                  {data.icon}
                  <Typography color="#1C1C1C" fontWeight={500} mt={1} mb={0.5}>
                    {data.title}
                  </Typography>
                  <Typography fontSize={14} fontWeight={500} color="secondary">
                    {data.description}
                  </Typography>
                </Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AddModal;
