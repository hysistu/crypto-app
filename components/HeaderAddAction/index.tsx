import { Box, Button, Typography } from "@mui/material";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import {
  IconAdd,
  IconAddTask,
  IconCategoriesNavbar,
  IconDangerSquared,
  IconHi,
} from "components/svg/icons";
import useAuth from "context/useAuth";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import AddModal from "./AddModal";

const HeaderAddAction = () => {
  const { user } = useAuth();
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const modalsOpenHandler = () => {
    setAddModalOpen(!addModalOpen);
  };

  const addModalData = [
    {
      icon: <IconDangerSquared />,
      title: "Incident",
      description: "Proin fermentum aliquam sem et tempor.",
      link: "/reporting",
    },
    {
      icon: <IconAddTask />,
      title: "Task",
      description: "Proin fermentum aliquam sem et tempor.",
      link: "/task",
    },
    {
      icon: <IconCategoriesNavbar className="categoriesIcon" />,
      title: "Categories",
      description: "Proin fermentum aliquam sem et tempor.",
      link: "/categories",
    },
    {
      icon: <PlaylistPlayIcon />,
      title: "Ticket",
      description: "Proin fermentum aliquam sem et tempor.",
      link: "/ticket/add",
    },
  ];

  return (
    <>
      <Fade direction="down" triggerOnce>
        <Box>
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            gap="5px"
          >
            <Typography fontSize={16} fontWeight={400}>
              <IconHi />
            </Typography>
            <Typography fontSize={16} fontWeight={400}>
              Hello
            </Typography>
            <Typography fontSize={16} fontWeight={700}>
              {user?.firstName}
            </Typography>
          </Box>
          <Typography fontSize={14} fontWeight={400} color="secondary">
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </Box>
      </Fade>
    </>
  );
};

export default HeaderAddAction;
