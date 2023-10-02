import { FC, useState, ReactElement, useEffect } from "react";
import { Box, Avatar, Button, Divider, Typography } from "@mui/material";
import { formatDistance } from "date-fns";
import { colors } from "src/utils/colors";
import { Notification } from "./Interface";
import { User } from "components/User/Interface";

type NotificationProps = {
  notification: Notification | any;
  children?: ReactElement;
};

const NotificationItem: FC<NotificationProps> = ({ notification }) => {
  const [user, setUser] = useState<User>();
  const getNameInitials = (
    first_name: string | any,
    last_name: string | any
  ) => {
    return first_name[0] + last_name[0];
  };

  useEffect(() => {
    if (notification?.incident_report_id?.employee_id) {
      setUser(notification?.incident_report_id?.employee_id);
    } else {
      setUser(notification?.incident_report_id?.reporter_id);
    }
  }, [notification]);

  if (!user) {
    return null;
  }

  return (
    <Button
      sx={{
        mt: 2,
        border: "1.5px solid",
        borderColor: "#F0F2F4",
        py: 1.5,
        px: 2,
        width: "100%",
        textAlign: "left",
        justifyContent: "initial",
        ":hover": {
          borderColor: colors.primary,
        },
      }}
    >
      <Avatar>{getNameInitials(user?.first_name, user?.last_name)}</Avatar>

      <Divider sx={{ mx: 1.5, height: "30px" }} orientation="vertical" />
      <Box sx={{ textTransform: "none" }}>
        <Typography sx={{ fontWeight: 500, color: colors.dark }}>
          {user?.first_name} {user?.last_name}
        </Typography>
        <Typography color="#667085" fontSize="0.8rem">
          {formatDistance(new Date(notification.createdAt), new Date(), {
            addSuffix: true,
          })}
        </Typography>
      </Box>
    </Button>
  );
};

export default NotificationItem;
