// @ts-nocheck
import {
  Close as MuiClose,
  Download as MuiDownload,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Chip,
  Dialog,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { OpenFile, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import AddDocumentsFile from "components/AddDocumentsFile";
import AddDocumentsType from "components/AddDocumentsType";
import {
  IconClose,
  IconEdit,
  IconHazard,
  IconManual,
  IconStandardOperatingProcedures,
  IconVideo,
} from "components/svg/icons";
import { version } from "pdfjs-dist";
import React, { useCallback, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import {
  deleteDocumentsFile,
  getAllDocuments,
  getDocumentsByType,
} from "requests/document";
import { colors } from "src/utils/colors";
import { BASE_URL_INCIDENT_API } from "src/utils/consts";
import { has } from "src/utils/helper";

interface DocumentModalProps {
  id: string;
  name: string;
  openedModal?: any;
  closeModalHandler: any;
}

const DocumentModal: React.FC<DocumentModalProps> = (props) => {
  const { id, name, openedModal, closeModalHandler } = props;
  const getFilePluginInstance = getFilePlugin({
    fileNameGenerator: (file: OpenFile) => {
      return `${name}.pdf`;
    },
  });
  const { Download } = getFilePluginInstance;
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={openedModal}
      onClose={closeModalHandler}
    >
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            display: "flex",
            padding: "4px",
          }}
        >
          <Download>
            {(props: any) => (
              <Button
                variant="outlined"
                startIcon={<MuiDownload />}
                disableElevation
                sx={{
                  color: "#000",
                  textTransform: "capitalize",
                  backgroundColor: "#EBEFFF",
                }}
                onClick={props.onClick}
              >
                Download
              </Button>
            )}
          </Download>
          <Button
            variant="outlined"
            startIcon={<MuiClose />}
            disableElevation
            sx={{
              color: "#000",
              textTransform: "capitalize",
              backgroundColor: "#EBEFFF",
            }}
            onClick={closeModalHandler}
          >
            Close
          </Button>
        </div>
        <div
          style={{
            flex: 1,
            overflow: "hidden",
          }}
        >
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`}
          >
            <Viewer
              fileUrl={`${BASE_URL_INCIDENT_API}/documentFile/file/${id}`}
              plugins={[getFilePluginInstance]}
            />
          </Worker>
        </div>
      </div>
    </Dialog>
  );
};

interface CustomCardProps {
  _id: string;
  name: string;
  index: string;
  openedCard: any;
  onExpand: any;
}
const CustomCard: React.FC<CustomCardProps> = (props) => {
  const { _id, name, index, openedCard, onExpand } = props;
  const [documentsByType, setDocumentsByType] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalToShow, setModalToShow] = useState<string>("");
  const [editable, setEditable] = useState<string>("");
  const [newDocFileModal, setNewDocFileModal] = useState<string>("");

  const handleAllDocumentsType = async (id: string) => {
    const _documentsByType = await getDocumentsByType(id);
    if (_documentsByType) {
      setDocumentsByType(_documentsByType.Document);
    }
  };

  const deleteDocument = async (id: string) => {
    try {
      const document: any = await deleteDocumentsFile(id);
      if (document.status) {
        handleAllDocumentsType(_id);
        toast.success(document.message);
      } else {
        toast.error(document.message);
      }
    } catch (error: any) {
      toast.error("Something went wrong!");
    }
  };
  useEffect(() => {
    console.log("edit", editable);
  }, [editable]);

  return (
    <>
      <Card
        sx={{
          p: { xs: 1, sm: 3 },
          mt: { xs: 2, sm: 4 },
        }}
        elevation={0}
        onClick={(e: any) => e.stopPropagation()}
      >
        <Box
          sx={{
            mb: 2.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              flexDirection: { xs: "column", sm: "row" },
              " > svg": {
                fontSize: 30,
                mr: 2,
              },
            }}
          >
            <IconStandardOperatingProcedures />
            <Typography sx={{ fontWeight: 500, fontSize: "22px" }}>
              {name}
            </Typography>
          </Box>
          {editable !== _id ? (
            <IconButton
              size="small"
              onClick={() => {
                if (!openedCard) {
                  onExpand();
                  setEditable(_id);
                  handleAllDocumentsType(_id);
                } else {
                  setEditable(_id);
                  handleAllDocumentsType(_id);
                }
              }}
            >
              <IconEdit />
            </IconButton>
          ) : (
            <IconButton
              size="small"
              onClick={(prev: any) => {
                setEditable("");
              }}
            >
              <IconClose />
            </IconButton>
          )}
        </Box>
        <Accordion
          elevation={0}
          sx={{
            m: 0,
            " ::before": {
              all: "initial",
            },
          }}
          expanded={openedCard}
        >
          <AccordionSummary
            sx={{
              m: 0,
              minHeight: 0,
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Chip
                  label="Video"
                  icon={<IconVideo width="1.5em" height="1.5em" />}
                  sx={{
                    pl: 0.5,
                    border: `1px solid ${colors.green}`,
                    backgroundColor: "rgba(60, 193, 59, 0.1)",
                  }}
                />
                <Box sx={{ mx: 1 }}>/</Box>
                <Chip
                  label="Manual"
                  icon={<IconManual width="1.5em" height="1.5em" />}
                  sx={{
                    pl: 0.5,
                    border: `1px solid ${colors.yellow}`,
                    backgroundColor: "rgba(243, 187, 28, 0.1)",
                  }}
                />
              </Box>
              {editable === _id ? (
                <Box sx={{ height: "36.5px" }} />
              ) : openedCard ? (
                <Button
                  onClick={() => {
                    onExpand();
                  }}
                  endIcon={<IconClose width="0.6em" height="0.6em" />}
                  sx={{
                    textTransform: "capitalize",
                    color: colors.secondary,
                    " svg path": {
                      stroke: colors.secondary,
                    },
                    ":hover": {
                      textDecoration: "underline",
                      color: colors.primary,
                      " svg path": {
                        stroke: colors.primary,
                      },
                    },
                  }}
                >
                  Close
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleAllDocumentsType(_id);
                    setEditable("");
                    if (!openedCard) {
                      onExpand();
                    }
                  }}
                  endIcon={<IconHazard width="0.6em" height="0.6em" />}
                  sx={{
                    textTransform: "capitalize",
                    color: colors.secondary,
                    " svg path": {
                      stroke: colors.secondary,
                    },
                    ":hover": {
                      textDecoration: "underline",
                      color: colors.primary,
                      " svg path": {
                        stroke: colors.primary,
                      },
                    },
                  }}
                >
                  Check Now
                </Button>
              )}
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ pb: 0 }}>
            {editable === _id && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "50%",
                  mx: "auto",
                }}
              >
                <Typography fontSize="20px">Add new item</Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    setNewDocFileModal(_id);
                  }}
                >
                  Add
                </Button>
              </Box>
            )}
            {has(documentsByType) ? (
              documentsByType.map((document: any) => (
                <Box
                  key={document._id}
                  sx={{
                    mt: 3,
                    border: `1.5px solid ${colors.borderColor}`,
                    py: 1,
                    px: 2,
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      wordBreak: "break-word",
                      textAlign: "center",
                      width: "100%",
                      mr: 2,
                    }}
                  >
                    {document.name}
                  </Typography>
                  {editable === _id ? (
                    <Box
                      sx={{
                        my: 1,
                        display: "flex",
                      }}
                    >
                      {/* <Button variant="outlined" size="small" sx={{ mr: 0.5 }}>
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => deleteDocument(document._id)}
                      >
                        Delete
                      </Button> */}
                    </Box>
                  ) : (
                    <Button
                      sx={{ my: 1 }}
                      variant="outlined"
                      onClick={() => {
                        setShowModal(true);
                        setModalToShow(document._id);
                      }}
                    >
                      View
                    </Button>
                  )}
                  <DocumentModal
                    id={modalToShow}
                    name={document.name}
                    openedModal={showModal}
                    closeModalHandler={() => {
                      setShowModal(false);
                      setModalToShow("");
                    }}
                  />
                </Box>
              ))
            ) : (
              <Typography sx={{ textAlign: "center" }}>
                No Checklists
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      </Card>
      <AddDocumentsFile
        open={newDocFileModal ? true : false}
        documentsTypeName={name}
        onClose={() => setNewDocFileModal("")}
        document_type_id={_id}
        handleDocuments={() => handleAllDocumentsType(_id)}
      />
    </>
  );
};

const KnowledgeGateContainer = () => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [newDocTypeModal, setNewDocTypeModal] = useState<boolean>(false);

  const invokeData = useCallback(async () => {
    const _documents = await getAllDocuments();
    if (_documents) {
      setDocuments(_documents.Documents.results);
    }
  }, []);

  useEffect(() => {
    invokeData();
  }, []);

  const [expandedCard, setExpandedCard] = useState<string>();

  return (
    <>
      <Button
        onClick={() => setNewDocTypeModal(!newDocTypeModal)}
        variant="outlined"
        sx={{ display: "flex", ml: "auto" }}
      >
        Create new category
      </Button>
      <AddDocumentsType
        open={newDocTypeModal}
        onClose={() => setNewDocTypeModal(false)}
        handleDocumentsType={() => invokeData()}
      />
      <Grid
        container
        spacing={2}
        justifyContent={{ sm: "center", md: "initial" }}
      >
        {has(documents) &&
          documents.map((document: any, index) => (
            <Grid item xs={12} sm={8} md={6} key={index}>
              <Fade>
                <CustomCard
                  {...document}
                  openedCard={document._id === expandedCard}
                  onExpand={() => {
                    setExpandedCard((prev) =>
                      prev !== document._id ? document._id : ""
                    );
                  }}
                />
              </Fade>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default KnowledgeGateContainer;
