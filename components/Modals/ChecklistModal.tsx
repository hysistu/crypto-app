import {
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

import {
  IconAttach,
  IconCalendarColor,
  IconDownload,
  IconMoreCircle,
  IconAdd,
  IconSave,
  IconEdit,
  IconDelete,
} from "components/svg/icons";
import React, { useEffect, useState } from "react";
import { addChecklistItem } from "requests/checklistItem";
import { colors } from "src/utils/colors";
import { has } from "src/utils/helper";
import { toast } from "react-toastify";
import {
  CHECKLIST_ITEM_TEMPLATE_SOME_ERROR_ACCURED,
  CreateCheckListItemTemplate,
  CHECKLIST_ITEM_TEMPLATE_ADD,
} from "components/Checklist/ChecklistItemTemplate/Interface";
import {
  CHECKLIST_ITEM_ADD,
  CHECKLIST_ITEM_SOME_ERROR_ACCURED,
} from "components/Checklist/ChecklistItem/Interface";
import {
  getChecklistItemTemplate,
  createChecklistItemTemplate,
  deleteChecklistItemTemplate,
  updateChecklistItemTemplate,
} from "requests/checklistItemTemplate";
import InputMUI from "components/Form/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { BASE_URL_SCHEDULE_API } from "src/utils/consts";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", md: "80%" },
  borderRadius: "10px",
  boxShadow: 24,
  background: "#fff",
  p: { xs: 2, sm: 4 },
  maxHeight: "80vh",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
};

interface Props {
  open: boolean;
  closeModal: any;
  data: any;
  checklist_ID: string;
}
const ChecklistModal: React.FC<Props> = (props) => {
  const { open, closeModal, data, checklist_ID } = props;
  const [checklistItems, setChecklistItems] = useState<any>();
  const [answersData, setAnswersData] = useState<any>({
    checklist_template_id: data._id,
  });
  const [showComment, setShowComment] = useState<string | undefined>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [item, setItem] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);
  const [editQuestion, setEditQuestion] = useState<any>("");
  const [editableQuestion, setEditableQuestion] = useState<any>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false);
  const answers = [
    { id: "Conformat", title: "Conformant" },
    { id: "Nonconformat", title: "Nonconformant" },
    { id: "To be Advides", title: "To be advides" },
    { id: "Not applicable", title: "Not applicable" },
    { id: "Observation", title: "Observation" },
    { id: "Follow up", title: "Follow up" },
  ];
  const currentDate = new Intl.DateTimeFormat("en-GB").format(
    new Date(data.createdAt)
  );

  const getChecklistItem = async (id: string) => {
    const _checklistItem = await getChecklistItemTemplate(id);
    if (_checklistItem.ChecklistItemTemplate) {
      setChecklistItems(_checklistItem.ChecklistItemTemplate);
    } else {
      toast.error(CHECKLIST_ITEM_TEMPLATE_SOME_ERROR_ACCURED);
    }
  };

  const validation = yup.object({
    name: yup.string().required("Name is required"),
  });

  const formAction = useFormik<CreateCheckListItemTemplate>({
    initialValues: {
      name: "",
      checklist_template_id: data._id,
      description: "pershkrimi",
    },
    validationSchema: validation,
    onSubmit: async (values: any, { resetForm }) => {
      setLoading(true);
      try {
        createChecklistItemTemplate(values).then((data) => {
          if (data.status === 0) {
            toast.error(
              "Ekziston nje checklist item me emer te njejte ose " +
                " " +
                CHECKLIST_ITEM_TEMPLATE_SOME_ERROR_ACCURED
            );
          } else {
            toast.success(CHECKLIST_ITEM_TEMPLATE_ADD);
            getChecklistItem(answersData.checklist_template_id);
            resetForm();
            const newAnswer = answersData.daily_items?.map((answer: any) => {
              return { ...answer, result: "", description: "" };
            });
            setAnswersData((prevState: any) => ({
              ...prevState,
              daily_items: newAnswer,
            }));
            setItem(false);
          }
          setLoading(false);
        });
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    getChecklistItem(data._id);
  }, []);

  useEffect(() => {
    const answersID = checklistItems?.map((checklist: any) => {
      return {
        checklist_item_template_id: checklist._id,
        result: "",
        description: "",
      };
    });
    setAnswersData((prevState: any) => ({
      ...prevState,
      daily_items: answersID,
    }));
  }, [checklistItems]);

  const onSubmit = () => {
    if (answersData.daily_items.find((a: any) => a.result === "")) {
      setShowError(true);
    } else {
      setShowError(false);
      try {
        addChecklistItem(answersData).then((data: any) => {
          if (data.status === 0) {
            toast.error(CHECKLIST_ITEM_SOME_ERROR_ACCURED);
          } else {
            toast.success(CHECKLIST_ITEM_ADD);
            const newAnswer = answersData.daily_items?.map((answer: any) => {
              return { ...answer, result: "", description: "" };
            });

            setAnswersData({
              checklist_template_id: answersData.checklist_template_id,
              daily_items: newAnswer,
            });
            closeModal();
            setShowComment("");
          }
        });
      } catch (e: any) {
        toast.error(e.message);
      }
    }
  };

  const handleDeleteChecklistItemTemplate = async (id: any) => {
    const response = await deleteChecklistItemTemplate(id);
    if (response) {
      toast.info(response);
      getChecklistItem(data._id);
    }
  };

  const handleUpdateChecklistItemTemplate = async (id: any) => {
    const response = await updateChecklistItemTemplate(id, {
      name: editableQuestion,
    });
    if (response) {
      toast.success(response);
      getChecklistItem(data._id);
      setEditableQuestion("");
    }
    setEditQuestion("");
  };

  const downloadChecklist = async (id: string) => {
    try {
      setDownloadLoading(true);
      await axios({
        url: `${BASE_URL_SCHEDULE_API}/checklistItems/downloadPDf?id=${id}`,
        method: "GET",
        responseType: "blob", // important
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${data.name.split(" ").join("_")}._checklist.pdf`
        );
        document.body.appendChild(link);
        link.click();
      });
      toast.success("Checklist downloaded successfully");
      setDownloadLoading(false);
    } catch (error) {
      console.log("error", error);
      toast.error("Ka ndodhur nje gabim me te dhena");
      setDownloadLoading(false);
    }
  };

  return (
    <>
      <Modal
        keepMounted
        open={open}
        onClose={() => {
          closeModal();
          setItem(false);
        }}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: { md: "flex-end" },
              flexDirection: { xs: "column", md: "row" },
              pb: 4,
            }}
            borderBottom={`1px solid ${colors.borderColor}`}
          >
            <Box>
              <Typography fontSize={20} fontWeight={500}>
                {data.name}
              </Typography>
              <Typography fontSize={16} fontWeight={400} sx={{ mt: 1 }}>
                {data.description}
              </Typography>
              <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
                <IconCalendarColor />
                <Typography
                  fontWeight={500}
                  color="primary"
                  sx={{ ml: { lg: 1 } }}
                >
                  {currentDate}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                mt: { xs: 1, md: 0 },
                alignItems: { xs: "start" },
              }}
            >
              <LoadingButton
                loading={downloadLoading}
                variant="contained"
                startIcon={<IconDownload />}
                disableElevation
                sx={{
                  color: "#000",
                  textTransform: "capitalize",
                  backgroundColor: "#EBEFFF",
                }}
                onClick={() => downloadChecklist(checklist_ID)}
              >
                Download
              </LoadingButton>
              {has(checklistItems) && (
                <>
                  <Button
                    variant="contained"
                    startIcon={<IconAdd />}
                    sx={{
                      textTransform: "none",
                      mx: 1.5,
                    }}
                    disableElevation
                    onClick={() => setItem(!item)}
                  >
                    Add Checklist Item
                  </Button>
                  {!editable && (
                    <Button
                      variant="outlined"
                      startIcon={<IconEdit />}
                      sx={{ textTransform: "none", mt: { xs: 1, sm: 0 } }}
                      onClick={() => setEditable(!editable)}
                      disableElevation
                    >
                      Edit Checklists
                    </Button>
                  )}
                </>
              )}
            </Box>
          </Box>
          {item && (
            <Box
              component="form"
              onSubmit={formAction.handleSubmit}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                p: { xs: 0, md: 4 },
                width: "100%",
                alignItems: "center",
                position: "relative",
              }}
            >
              <InputMUI
                label={"Item Name"}
                placeholder={"name"}
                name={"name"}
                formAction={formAction}
                sx={{
                  width: { xs: "100%", md: "30%" },
                  ">div": {
                    mb: 0,
                  },
                }}
              />
              <LoadingButton
                sx={{
                  textTransform: "none",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  lineHeight: "120%",
                  letterSpacing: "0.005em",
                  height: "56px",
                  width: { xs: "40%", md: "15%" },
                  ml: 4,
                }}
                variant="contained"
                type="submit"
              >
                Create
              </LoadingButton>
            </Box>
          )}
          {has(checklistItems) ? (
            checklistItems.map((item: any, index: any) => (
              <Box
                py={4}
                borderBottom={`1px solid ${colors.borderColor}`}
                key={index}
              >
                <Box
                  key={item._id}
                  sx={{
                    display: "flex",
                    alignItems: { sm: "center" },
                    justifyContent: { xs: "center", sm: "space-between" },
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  {editQuestion === item._id ? (
                    <>
                      <TextField
                        defaultValue={item.name}
                        onChange={(e) => setEditableQuestion(e.target.value)}
                      />
                    </>
                  ) : (
                    <Typography
                      fontSize={16}
                      fontWeight={500}
                      sx={{
                        mb: { xs: 1, md: 0 },
                        maxWidth: { xs: "100%", sm: "55%", md: "65%" },
                      }}
                    >
                      {item.name}
                    </Typography>
                  )}
                  {editQuestion === item._id ? (
                    <Button
                      variant="outlined"
                      sx={{ mt: { xs: 1, sm: 0 } }}
                      onClick={() =>
                        handleUpdateChecklistItemTemplate(item._id)
                      }
                    >
                      Save
                    </Button>
                  ) : editable ? (
                    <Box
                      sx={{
                        " svg path": { stroke: colors.primary },
                        height: "56px",
                      }}
                    >
                      <Tooltip title="Edit">
                        <IconButton
                          sx={{ mr: 1 }}
                          onClick={() => setEditQuestion(item._id)}
                        >
                          <IconEdit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          onClick={() =>
                            handleDeleteChecklistItemTemplate(item._id)
                          }
                        >
                          <IconDelete />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: { xs: "100%", sm: "initial" },
                        justifyContent: { xs: "space-between" },
                      }}
                    >
                      {data.yes_or_no ? (
                        <FormControl sx={{ width: { md: 300 } }}>
                          <Select
                            sx={{
                              width: {
                                xs: "250px",
                                sm: "180px",
                                md: "initial",
                              },
                            }}
                            value={
                              answersData && answersData.daily_items
                                ? answersData.daily_items[index]?.result
                                : ""
                            }
                            onChange={(e: SelectChangeEvent) => {
                              const newAnswer = answersData.daily_items?.map(
                                (answer: any) =>
                                  answer.checklist_item_template_id === item._id
                                    ? { ...answer, result: e.target.value }
                                    : answer
                              );
                              setAnswersData((prevState: any) => ({
                                ...prevState,
                                daily_items: newAnswer,
                              }));
                            }}
                          >
                            <MenuItem value="Yes">Yes</MenuItem>
                            <MenuItem value="No">No</MenuItem>
                          </Select>
                        </FormControl>
                      ) : (
                        <FormControl sx={{ width: { md: 300 } }}>
                          <Select
                            sx={{
                              width: {
                                xs: "250px",
                                sm: "180px",
                                md: "initial",
                              },
                            }}
                            value={
                              answersData && answersData.daily_items
                                ? answersData.daily_items[index]?.result
                                : ""
                            }
                            onChange={(e: SelectChangeEvent) => {
                              const newAnswer = answersData.daily_items?.map(
                                (answer: any) =>
                                  answer.checklist_item_template_id === item._id
                                    ? { ...answer, result: e.target.value }
                                    : answer
                              );
                              setAnswersData((prevState: any) => ({
                                ...prevState,
                                daily_items: newAnswer,
                              }));
                            }}
                          >
                            {answers.map((answer, index) => (
                              <MenuItem value={answer.id} key={index}>
                                {answer.title}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                      <Box>
                        <IconButton
                          sx={{ ml: { md: 1 } }}
                          onClick={() =>
                            setShowComment(
                              showComment === item._id ? "" : item._id
                            )
                          }
                        >
                          <IconMoreCircle />
                        </IconButton>
                        <IconButton>
                          <IconAttach />
                        </IconButton>
                      </Box>
                    </Box>
                  )}
                </Box>
                {showComment === item._id && (
                  <TextField
                    multiline={true}
                    rows={5}
                    sx={{ width: { xs: "100%", lg: 700 }, mt: 3 }}
                    label="Write you comment here"
                    value={
                      answersData && answersData.daily_items
                        ? answersData.daily_items[index]?.description
                        : ""
                    }
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const newAnswer = answersData.daily_items?.map(
                        (answer: any) =>
                          answer.checklist_item_template_id === item._id
                            ? { ...answer, description: e.target.value }
                            : answer
                      );
                      setAnswersData((prevState: any) => ({
                        ...prevState,
                        daily_items: newAnswer,
                      }));
                    }}
                  />
                )}
              </Box>
            ))
          ) : !item ? (
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography>This Checklist do not have Checklist Item</Typography>{" "}
              <Button
                variant="contained"
                startIcon={<IconAdd />}
                sx={{
                  textTransform: "none",
                  mt: 2,
                }}
                disableElevation
                onClick={() => setItem(!item)}
              >
                Add Checklist Item
              </Button>
            </Box>
          ) : (
            ""
          )}
          {has(checklistItems) && (
            <Box
              sx={{
                mt: 2,
                textAlign: "right",
              }}
            >
              {!editable ? (
                <>
                  {showError && (
                    <Typography sx={{ mb: 2, color: colors.danger }}>
                      All answers are required!
                    </Typography>
                  )}
                  <Button
                    variant="outlined"
                    sx={{ mr: 2 }}
                    onClick={() => {
                      const newAnswer = answersData.daily_items?.map(
                        (answer: any) => {
                          return { ...answer, result: "", description: "" };
                        }
                      );
                      closeModal();
                      setShowComment("");
                      setAnswersData((prevState: any) => ({
                        ...prevState,
                        daily_items: newAnswer,
                      }));
                    }}
                  >
                    Discard
                  </Button>
                  <Button variant="contained" onClick={onSubmit}>
                    Save Drafts
                  </Button>
                </>
              ) : (
                <Button
                  variant="outlined"
                  startIcon={editable ? <IconSave /> : <IconEdit />}
                  sx={{ textTransform: "none" }}
                  onClick={() => setEditable(!editable)}
                  disableElevation
                >
                  {editable ? "Save Checklist" : "Edit Checklists"}
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ChecklistModal;
