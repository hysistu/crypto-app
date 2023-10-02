import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { IconAccordion } from "components/svg/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllChecklist } from "requests/checklist";
import { colors } from "src/utils/colors";

const ComplianceRecordsContainer = () => {
  const [checklists, setChecklists] = useState<any>([]);
  const [openedCard, setOpenedCard] = useState<string>("");
  const getChecklists = async () => {
    const _checklists = await getAllChecklist();
    if (_checklists) {
      setChecklists(_checklists.Checklist);
    }
  };

  useEffect(() => {
    getChecklists();
  }, []);

  return (
    <div>
      {checklists.map((checklist: any, index: any) => {
        return (
          <Accordion
            key={index}
            onChange={() => {
              setOpenedCard((prev) =>
                prev !== checklist.checklist_type._id
                  ? checklist.checklist_type._id
                  : ""
              );
            }}
            elevation={0}
            sx={{
              border: `1px solid ${colors.borderColor}`,
              py: 2,
              px: 1,
              m: 0,
              mb: 2,
              " ::before": {
                all: "initial",
              },
            }}
            expanded={checklist.checklist_type._id === openedCard}
          >
            <AccordionSummary
              expandIcon={
                <IconButton sx={{ mx: { sm: 2 }, pointerEvents: "auto" }}>
                  <IconAccordion fontSize="small" />
                </IconButton>
              }
              sx={{
                m: 0,
                minHeight: 0,
                pointerEvents: "none",
                "&.Mui-expanded": {
                  minHeight: 0,
                },
                ".MuiAccordionSummary-content": {
                  m: 0,
                  "&.Mui-expanded": {
                    margin: "0",
                  },
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {checklist.checklist_type.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 4, pb: 0 }}>
              {checklist.checklists.map((checkl: any) => (
                <Box
                  key={checkl._id}
                  sx={{
                    pb: 1.5,
                    pt: 1,
                    px: { xs: 1, sm: 2 },
                    display: "flex",
                    alignItems: { sm: "center" },
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: { sm: "space-between" },
                    borderBottom: `1px solid ${colors.borderColor}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    {checkl.name}
                  </Typography>
                  <Link href={`compliance-records/${checkl._id}`} passHref>
                    <Button
                      sx={{
                        width: "fit-content",
                        mt: { xs: 2 },
                      }}
                      variant="outlined"
                    >
                      See more
                    </Button>
                  </Link>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default ComplianceRecordsContainer;
