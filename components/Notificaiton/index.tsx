import React, { useEffect, useState } from "react";
import { Box, Badge, Typography } from "@mui/material";
import { colors } from "src/utils/colors";
import useSocket from "hooks/useSocket";
import { useRouter } from "next/router";
import { getNotifiations } from "requests/notification";
import getData from "hooks/getData";
import NotificationItem from "./NotificationItem";

const NotificationSidebar: React.FC = () => {
  const [_page, setPage] = useState<number>(1);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { socket, connected, source } = useSocket();
  const router = useRouter();
  const { loader, records, page, totalPage, reloadData, data } = getData(
    getNotifiations,
    "Notification",
    _page
  );

  useEffect(() => {
    if (data) {
      const _data = data
        .map((item) => {
          if (item.incident_report_id) {
            return item;
          }
          return null;
        })
        .filter((item) => !!item);
      setNotifications(_data);
    }
  }, [data]);

  useEffect(() => {
    if (source?._id) {
      reloadData();
    }
  }, [source]);

  if (loader) {
    return null;
  }
  return (
    <Box sx={{ pb: 4, mb: 4, pt: 4, height: "100%" }}>
      <Badge color="error" variant="dot" invisible={!notifications.length}>
        <Typography color={colors.dark} fontWeight="500">
          Notifications
        </Typography>
      </Badge>
      {notifications.length ? (
        <>
          <Typography color="#667085">
            You have got new notifications
          </Typography>
          <Box
            sx={{
              maxHeight: "80vh",
              overflowY: "scroll",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {notifications.map(
              (notification_item: Notification, index: number) => (
                <NotificationItem
                  key={index}
                  notification={notification_item}
                />
              )
            )}
          </Box>
        </>
      ) : (
        <Typography color="#667085">
          You have got no new notifications
        </Typography>
      )}
    </Box>
  );
};

export default NotificationSidebar;
