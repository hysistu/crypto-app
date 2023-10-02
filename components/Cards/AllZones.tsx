import {
  Box,
  Button,
  Card,
  ClickAwayListener,
  Divider,
  IconButton,
  keyframes,
  Typography,
} from "@mui/material";
import ZoneSidebar from "components/Layout/components/ZoneSidebar";
import { IconDot, IconClose, IconZone } from "components/svg/icons";
import { formatDistance } from "date-fns";
import React, { useEffect, useState } from "react";
import { getSectorsWithIncident } from "requests/incidentReport";
import theme from "src/theme";
import { colors } from "src/utils/colors";
import IconBuildingMap from "src/assets/IconBuildingMap";

interface CustomTextProps {
  title: any;
  text: any;
}
const CustomText: React.FC<CustomTextProps> = (props) => {
  const { title, text } = props;
  return (
    <Box display="flex" my={2}>
      <Typography>{title}: </Typography>
      <Typography sx={{ ml: 1, fontWeight: "500" }}>{text}</Typography>
    </Box>
  );
};
interface CustomTooltipInterface {
  _id?: number | string;
  name: string;
  description: string;
  updatedAt: Date;
  incidents: number | string;
  zone_id: any;
  coordinate_x: number;
  coordinate_y: number;
  openModal: any;
  closeTooltip: any;
}
const CustomTooltip: React.FC<CustomTooltipInterface> = (props) => {
  const {
    name,
    description,
    updatedAt,
    incidents,
    zone_id,
    coordinate_x,
    coordinate_y,
    openModal,
    closeTooltip,
  } = props;
  return (
    <Card
      sx={{
        position: "absolute",
        width: "260px",
        top: "30px",
        left: "50%",
        ml:
          coordinate_x < 10 ? "-60px" : coordinate_x > 80 ? "-200px" : "-130px",
        mt: coordinate_y < 30 ? "-20px" : "",
        border: `1px solid ${colors.borderColor}`,
        pt: 2,
        px: 3,
        zIndex: "1000",
      }}
      elevation={0}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box
          display="flex"
          alignItems="center"
          sx={{ "> .iconDot": { ml: 1, mr: 2 } }}
        >
          <IconZone fontSize="40" />
          <IconDot className="iconDot" fontSize="small" />
          <Typography fontSize={16} fontWeight={600} color={colors.dark}>
            {name}
          </Typography>
        </Box>
        <IconButton size="small" onClick={closeTooltip}>
          <IconClose />
        </IconButton>
      </Box>
      <CustomText title="Total Incidents" text={incidents} />
      <CustomText title="Location" text={`${name} / ${zone_id?.name}a`} />
      <CustomText title="Description" text={description} />
      <CustomText title="Level" text="1" />
      <Divider />
      <CustomText
        title="Reported"
        text={formatDistance(new Date(updatedAt), new Date(), {
          addSuffix: true,
        })}
      />
      <Button variant="contained" sx={{ my: 2 }} onClick={openModal}>
        View More
      </Button>
    </Card>
  );
};

const AllZones = () => {
  const [openTooltip, setOpenTooltip] = useState<number | undefined>(undefined);
  const [openModal, setOpenModal] = useState<string>("");
  const [sectorsWithIncident, setSectorsWithIncident] = useState<any | []>([]);

  const getSectors = async () => {
    const sectors: any = await getSectorsWithIncident();
    if (sectors) {
      setSectorsWithIncident(
        sectors.map((sector: any) => {
          return {
            ...sector.sector,
            incidents: sector.incidentsNumber,
          };
        })
      );
    }
  };

  useEffect(() => {
    getSectors();
  }, []);

  const blink = keyframes`
  from { opacity: 1; }
  to { opacity: 0.5; }
`;

  const zonesBg = [
    {
      name: "Zone 1",
      left: 0,
      right: "63.5%",
      bgColor: "rgba(255, 245, 225, 0.3)",
    },
    {
      name: "Zone 2",
      left: "36.9%",
      right: "41.2%",
      bgColor: "rgba(255, 205, 255, 0.4)",
    },
    {
      name: "Zone 3",
      left: "59.2%",
      right: "25%",
      bgColor: "rgba(130, 158, 245, 0.2)",
    },
    {
      name: "Zone 4",
      left: "75.4%",
      right: 0,
      bgColor: "rgba(127, 78, 142, 0.1)",
    },
  ];
  return (
    <Box
      sx={{
        mt: 5,
        width: "100%",
        backgroundColor: "#fff",
        backgroundSize: "cover",
        borderRadius: theme.shape,
        p: { lg: 5 },
        pt: { xs: 5, md: 0 },
        px: 2,
        position: "relative",
        "> svg": { width: "100%", height: "100%" },
      }}
    >
      {zonesBg.map((zone, i) => (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: zone.left,
            right: zone.right,
            zIndex: 1,
            backgroundColor: zone.bgColor,
          }}
          key={i}
        >
          <Typography
            sx={{
              mt: 1,
              textAlign: "center",
              fontWeight: {
                md: 500,
              },
              fontSize: {
                md: 20,
              },
            }}
          >
            {zone.name}
          </Typography>
        </Box>
      ))}
      <Box sx={{ zIndex: 3, position: "relative" }}>
        <IconBuildingMap />
      </Box>
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => setOpenTooltip(undefined)}
      >
        <Box>
          {sectorsWithIncident &&
            sectorsWithIncident.map((sector: any) => {
              return (
                <Box
                  sx={{
                    position: "absolute",
                    left: {
                      xs: `calc(${sector.coordinate_x}% - 6px)`,
                      sm: `${sector.coordinate_x}%`,
                    },
                    bottom: {
                      xs: `calc(${sector.coordinate_y}% - 25px)`,
                      sm: `calc(${sector.coordinate_y}% - 15px)`,
                      md: `${sector.coordinate_y}%`,
                    },
                    zIndex: 4,
                  }}
                  key={sector._id}
                >
                  <IconButton
                    sx={{
                      p: { xs: 0.5, sm: 1 },
                      backgroundColor: "rgba(159, 159, 159, 0.5)",
                      ":hover": {
                        animation: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.08)",
                      },
                      "> svg": {
                        width: { xs: "5px", sm: "0.4em", lg: "0.5em" },
                        height: { xs: "5px", sm: "0.4em", lg: "0.5em" },
                        "> circle": {
                          fill:
                            sector.incidents > 10
                              ? "#F03738"
                              : sector.incidents > 5
                              ? "#F3BB1C"
                              : "#3CC13B",
                        },
                      },
                      animation: `${blink} 1s linear infinite`,
                      animationDuration: "500ms",
                      animationIterationCount: "infinite",
                      animationDirection: "alternate",
                      animationTimingFunction: "ease-in-out",
                    }}
                    onClick={() => setOpenTooltip(sector._id)}
                  >
                    <IconDot />
                  </IconButton>
                  {openTooltip === sector._id && (
                    <CustomTooltip
                      {...sector}
                      openModal={() => {
                        setOpenModal(sector._id);
                        setOpenTooltip(undefined);
                      }}
                      closeTooltip={() => setOpenTooltip(undefined)}
                    />
                  )}
                </Box>
              );
            })}
          <ZoneSidebar
            id={openModal}
            close={() => setOpenModal("")}
            reloadData={getSectors}
            sector
          />
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default AllZones;
