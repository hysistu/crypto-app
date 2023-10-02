import { CircularProgress } from "@material-ui/core";
import {
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Tooltip as MuiTooltip,
  Typography,
} from "@mui/material";
import AddCheckListModal from "components/Modals/AddCheckListModal";
import ChecklistModal from "components/Modals/ChecklistModal";
import { IconAdd, IconDelete, IconEdit, IconSave } from "components/svg/icons";
import useAuth from "context/useAuth";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import {
  checklistStatistic,
  deleteChecklist,
  getAllChecklist,
  updateChecklist,
} from "requests/checklist";
import { colors } from "src/utils/colors";
import { has } from "src/utils/helper";

const ComplianceContainer = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [openedModal, setOpenedModal] = useState<any>("");
  const [checklists, setChecklists] = useState<any>([]);
  const [addCheckList, setAddCheckList] = useState<boolean>(false);
  const [newChecklist, setNewChecklist] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const [editableChecklist, setEditableChecklist] = useState<any>("");
  const [editableName, setEditableName] = useState<string>("");
  const [checklistsStats, setChecklistsStats] = useState<any>([]);

  const radialBarColors: any = {
    Conformat: colors.green,
    Nonconformat: colors.dark,
    To_be_Advides: colors.primary,
    Not_applicable: colors.secondary,
    Observation: colors.purple,
    Follow_up: colors.yellow,
    Yes: colors.blue,
    No: colors.danger,
  };

  useEffect(() => {
    invokeData();
  }, [newChecklist]);

  const invokeData = useCallback(async () => {
    const _checklists = await getAllChecklist();
    if (_checklists) {
      setChecklists(_checklists.Checklist);
    }
  }, []);

  const getNewChecklistsStats = async () => {
    setChecklistsStats([]);
    checklists.map(async (checklistsa: any) => {
      checklistsa?.checklists?.map(async (checklist: any) => {
        const _oneChecklistStats = await checklistStatistic(checklist._id);
        if (_oneChecklistStats) {
          setChecklistsStats((prevState: any) => [
            ...prevState,
            {
              name: checklist.name,
              result: _oneChecklistStats,
            },
          ]);
        }
      });
    });
  };

  useEffect(() => {
    setChecklistsStats([]);
    getNewChecklistsStats();
  }, [checklists]);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  const handleDeleteChecklist = async (id: any) => {
    const response = await deleteChecklist(id);
    if (response) {
      toast.info(response);
      invokeData();
    }
  };
  const handleUpdateChecklist = async (id: any) => {
    const response = await updateChecklist(id, {
      name: editableName,
    });
    if (response) {
      toast.success(response);
      invokeData();
      setEditableName("");
    }
    setEditableChecklist("");
  };

  return (
    <>
      <Box textAlign="end" sx={{ mt: { xs: 2, sm: 0 } }}>
        <Button
          variant="contained"
          startIcon={<IconAdd />}
          sx={{ textTransform: "none", mr: 1.5 }}
          onClick={() => {
            setAddCheckList(true);
            setEditable(false);
          }}
          disableElevation
        >
          Add Checklist
        </Button>
        {!editable && (
          <Button
            variant="outlined"
            startIcon={<IconEdit />}
            sx={{ textTransform: "none" }}
            onClick={() => {
              setEditable(!editable);
              setEditableChecklist("");
            }}
            disableElevation
          >
            Edit Checklists
          </Button>
        )}
      </Box>
      {addCheckList && (
        <Box mt={5} pb={5} borderBottom={`1px solid ${colors.borderColor}`}>
          <AddCheckListModal
            open={addCheckList}
            closeModal={() => setAddCheckList(false)}
            setNewChecklist={setNewChecklist}
            newChecklist={newChecklist}
          />
        </Box>
      )}

      {checklists.map((item: any, index: any) => {
        return (
          <Fade direction="down" key={index} delay={index * -100} triggerOnce>
            <Box mt={5} pb={5} borderBottom={`1px solid ${colors.borderColor}`}>
              <Box>
                <Typography fontSize={22} fontWeight={500} mb={2}>
                  {item.checklist_type.name}
                </Typography>
              </Box>
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "30px",
                  flexWrap: "wrap",
                }}
              >
                {item.checklists.map((checklist: any, index: any) => {
                  return (
                    <Fade
                      direction="left"
                      delay={index * -50}
                      key={index}
                      triggerOnce
                    >
                      <Box>
                        <Box
                          sx={{
                            " >div": {
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            },
                          }}
                        >
                          {editable ? (
                            editableChecklist === checklist._id ? (
                              <Box>
                                <TextField
                                  defaultValue={checklist.name}
                                  onChange={(e) =>
                                    setEditableName(e.target.value)
                                  }
                                  sx={{
                                    minWidth: { md: "200px" },
                                    fontSize: "18px",
                                    p: { xs: 2, md: 3 },
                                    backgroundColor: "#fff",
                                    color: "#262B2B",
                                    textTransform: "capitalize",
                                    mb: 0.5,
                                    border: `1px solid ${colors.borderColor}`,
                                  }}
                                />
                                <Button
                                  variant="contained"
                                  onClick={() =>
                                    handleUpdateChecklist(checklist._id)
                                  }
                                >
                                  Save
                                </Button>
                              </Box>
                            ) : (
                              <Box>
                                <Button
                                  onClick={() => {
                                    !editable && setOpenedModal(checklist._id);
                                  }}
                                  sx={{
                                    minWidth: { md: "200px" },
                                    fontSize: "18px",
                                    p: { xs: 2, md: 3 },
                                    backgroundColor: "#fff",
                                    color: "#262B2B",
                                    textTransform: "capitalize",
                                    mb: 0.5,
                                    border: `1px solid ${colors.borderColor}`,
                                  }}
                                >
                                  {checklist.name}
                                </Button>
                                <Box>
                                  <MuiTooltip title="Edit">
                                    <IconButton
                                      onClick={() =>
                                        setEditableChecklist(checklist._id)
                                      }
                                    >
                                      <IconEdit />
                                    </IconButton>
                                  </MuiTooltip>
                                  <MuiTooltip title="Delete">
                                    <IconButton
                                      onClick={() =>
                                        handleDeleteChecklist(checklist._id)
                                      }
                                      sx={{
                                        ml: 1,
                                        " svg path": { stroke: colors.primary },
                                      }}
                                    >
                                      <IconDelete />
                                    </IconButton>
                                  </MuiTooltip>
                                </Box>
                              </Box>
                            )
                          ) : (
                            <Button
                              onClick={() => {
                                !editable && setOpenedModal(checklist._id);
                              }}
                              sx={{
                                minWidth: { md: "200px" },
                                fontSize: "18px",
                                p: { xs: 2, md: 3 },
                                backgroundColor: "#fff",
                                color: "#262B2B",
                                textTransform: "capitalize",
                                mb: 0.5,
                                border: `1px solid ${colors.borderColor}`,
                              }}
                            >
                              {checklist.name}
                            </Button>
                          )}
                        </Box>
                        <ChecklistModal
                          open={openedModal === checklist._id}
                          checklist_ID={checklist._id}
                          data={checklist}
                          closeModal={() => {
                            setOpenedModal(false);
                            getNewChecklistsStats();
                          }}
                        />
                      </Box>
                    </Fade>
                  );
                })}
              </Box>
            </Box>
          </Fade>
        );
      })}
      {editable && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="outlined"
            startIcon={<IconSave />}
            sx={{ textTransform: "none" }}
            onClick={() => {
              setEditable(!editable);
              setEditableChecklist("");
            }}
            disableElevation
          >
            Save Checklist
          </Button>
        </Box>
      )}
      <Box sx={{ mt: 2 }}>
        <Typography
          fontSize={24}
          letterSpacing={2}
          fontWeight={500}
          textAlign="center"
        >
          Results
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {has(checklistsStats) ? (
            checklistsStats.map((checklista: any, index: any) => {
              return (
                <Box
                  sx={{
                    width: { xs: "100%", sm: "31%", md: "23%" },
                    minWidth: "240px",
                    mt: 4,
                  }}
                  key={index}
                >
                  <Card
                    sx={{
                      p: { xs: 2, md: 1 },
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        height: { sm: "70px" },
                        mb: 2,
                        textAlign: "center",
                      }}
                    >
                      {checklista.name}
                    </Typography>
                    {has(checklista.result) ? (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { sm: "column" },
                          width: "100%",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <PieChart width={162} height={160}>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#04103B",
                              borderRadius: "10px",
                              border: "none",
                            }}
                            labelStyle={{ color: "#fff" }}
                            itemStyle={{ color: "#fff" }}
                            isAnimationActive={false}
                          />
                          <Pie
                            data={checklista?.result}
                            width={250}
                            height={160}
                            cx={76}
                            cy={76}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="total"
                          >
                            {checklista?.result &&
                              checklista?.result.map(
                                (entry: any, index: any) => {
                                  return (
                                    <Cell
                                      name={entry._id}
                                      key={`cell-${index}`}
                                      fill={
                                        radialBarColors[
                                          entry._id.replace(/ /g, "_")
                                        ]
                                      }
                                    />
                                  );
                                }
                              )}
                          </Pie>
                        </PieChart>
                        <Box sx={{ mt: 4, mb: 2 }}>
                          {checklista?.result &&
                            checklista?.result.map((entry: any, index: any) => (
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                                key={index}
                              >
                                <Box
                                  sx={{
                                    width: "10px",
                                    height: "10px",
                                    mr: 1,
                                    borderRadius: "50%",
                                    backgroundColor:
                                      radialBarColors[
                                        entry._id.replace(/ /g, "_")
                                      ],
                                  }}
                                />
                                <Typography>
                                  {entry.total} {entry._id}
                                </Typography>
                              </Box>
                            ))}
                        </Box>
                      </Box>
                    ) : (
                      <Typography>No Data</Typography>
                    )}
                  </Card>
                </Box>
              );
            })
          ) : (
            <CircularProgress />
          )}
        </Box>
      </Box>
    </>
  );
};

export default ComplianceContainer;
