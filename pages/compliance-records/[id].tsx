import { DesktopDatePicker, LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Layout from "components/Layout";
import { IconDownload } from "components/svg/icons";
import { User } from "components/User/Interface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  checklistStatisticRecords,
  checklistStatisticRecordsAnswer,
} from "requests/checklist";
import { getAllEmployees } from "requests/user";
import { colors } from "src/utils/colors";
import { BASE_URL_SCHEDULE_API } from "src/utils/consts";

interface ComplianceRecordModalProps {
  data: any;
  opened: any;
  closeModal: any;
  id?: any;
  name?: any;
  userName?: any;
}
const ComplianceRecordModal: React.FC<ComplianceRecordModalProps> = ({
  data,
  opened,
  closeModal,
  id,
  name,
  userName,
}) => {
  const [downloadLoading, setDownloadLoading] = useState<boolean>(false);

  const downloadResults = async (id: string) => {
    try {
      setDownloadLoading(true);
      await axios({
        url: `${BASE_URL_SCHEDULE_API}/dailyChecklistItems/downloadDailyChecklist?id=${id}`,
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
          `Result_of_${name}_Checklist_from_${userName}._checklist.pdf`
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
    <Modal keepMounted open={opened} onClose={closeModal}>
      <Box
        sx={{
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
        }}
      >
        <Box
          sx={{
            mx: 1,
            mb: 3,
            display: "flex",
            aligItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
              <Typography>Name:</Typography>
              <Typography sx={{ ml: 1, fontSize: 20, fontWeight: 500 }}>
                {name}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography>Answered by:</Typography>
              <Typography sx={{ ml: 1, fontSize: 20, fontWeight: 500 }}>
                {userName}
              </Typography>
            </Box>
          </Box>
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
            onClick={() => downloadResults(id)}
          >
            Download
          </LoadingButton>
        </Box>
        {data &&
          data.map((check: any, index: any) => (
            <Box
              key={index}
              sx={{
                borderBottom: `1px solid ${colors.borderColor}`,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                mb: 2,
                p: 1,
              }}
            >
              <Box sx={{ width: { md: "75%" } }}>
                <Typography sx={{ fontSize: 19, fontWeight: 500, mb: 1 }}>
                  Question:
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {check.checklist_item_template_id.name}
                </Typography>
              </Box>
              <Box sx={{ width: { md: "20%" }, mt: { xs: 1, md: 0 } }}>
                <Typography sx={{ fontSize: 19, fontWeight: 500, mb: 1 }}>
                  Answer:
                </Typography>
                <Typography sx={{ fontSize: "16px" }}>
                  {check.result}
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
    </Modal>
  );
};

const ComplianceOneRecord = () => {
  const router = useRouter();
  const [checklistStatRec, setChecklistStatRec] = useState<any>([]);
  const [checklistStatRecName, setChecklistStatRecName] = useState<any>([]);
  const [checklistStatRecAnsw, setChecklistStatRecAnsw] = useState<any>([]);
  const [selectedEmp, setSelectedEmp] = useState<any>("");
  const [employees, setEmployees] = useState<User[] | any>([]);
  const [openedModal, setOpenedModal] = useState<boolean>(false);
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [resultID, setResultID] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");

  const getChecklistsRecords = async (id: string) => {
    const response: any = await checklistStatisticRecords(id, {
      employee: selectedEmp,
      startDate: dateFrom,
      endDate: dateTo,
    });
    if (response) {
      setChecklistStatRec(response?.dailyChecklists);
      setChecklistStatRecName(response?.checklistModel.name);
    }
  };

  const getEmployees = async () => {
    const response: any = await getAllEmployees();
    if (response) {
      setEmployees(
        response?.User.results.map((user: any) => {
          user.name = user.first_name + " " + user.last_name;
          return user;
        })
      );
    }
  };

  const getChecklistsRecordsAnswers = async (id: string) => {
    const response: any = await checklistStatisticRecordsAnswer(id);
    if (response) {
      setChecklistStatRecAnsw(response);
      setOpenedModal(true);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    if (router.isReady) {
      getChecklistsRecords(router.query?.id as string | "");
    }
  }, [
    router.isReady,
    router.query?.id,
    selectedEmp,
    selectedEmp,
    dateFrom,
    dateTo,
  ]);
  return (
    <Layout title="Specific Record">
      <Box
        sx={{
          display: "flex",
          alignItems: { md: "center" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <FormGroup sx={{ width: { xs: "100%", md: "30%" }, mb: { xs: 1.5 } }}>
          <FormLabel sx={{ color: "#868B9F", ml: 1, fontSize: 14 }}>
            Employees
          </FormLabel>
          <Select
            name="employees"
            value={selectedEmp}
            size="small"
            displayEmpty
            onChange={(event: SelectChangeEvent) => {
              setSelectedEmp(event.target.value as string);
            }}
          >
            <MenuItem value="" disabled>
              Search by employees
            </MenuItem>
            {employees.map((item: any, index: number) => {
              return (
                <MenuItem key={index} value={item._id as string}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormGroup>
        <FormGroup sx={{ width: { xs: "100%", md: "28%" }, mb: { xs: 1.5 } }}>
          <FormLabel sx={{ color: "#868B9F", ml: 1, fontSize: 14 }}>
            Date From
          </FormLabel>
          <DesktopDatePicker
            inputFormat="dd/MM/yyyy"
            value={dateFrom}
            onChange={(newValue: Date | null) => {
              setDateFrom(newValue);
            }}
            renderInput={(params: any) => {
              return (
                <TextField
                  size="small"
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "Select Date",
                  }}
                />
              );
            }}
          />
        </FormGroup>
        <FormGroup sx={{ width: { xs: "100%", md: "28%" }, mb: { xs: 1.5 } }}>
          <FormLabel sx={{ color: "#868B9F", ml: 1, fontSize: 14 }}>
            Date To
          </FormLabel>
          <DesktopDatePicker
            inputFormat="dd/MM/yyyy"
            maxDate={new Date()}
            value={dateTo}
            onChange={(newValue: Date | null) => {
              setDateTo(newValue);
            }}
            renderInput={(params: any) => {
              return (
                <TextField
                  size="small"
                  {...params}
                  inputProps={{
                    ...params.inputProps,
                    placeholder: "Select Date",
                  }}
                />
              );
            }}
          />
        </FormGroup>
        <Button
          variant="outlined"
          sx={{ fontSize: "small", width: "fit-content" }}
          onClick={() => {
            setSelectedEmp("");
            setDateFrom(null);
            setDateTo(null);
          }}
        >
          Clear All
        </Button>
      </Box>
      <Box>
        {checklistStatRec &&
          checklistStatRec.map((checkStatRec: any) => {
            let createdDate = new Date(
              checkStatRec.createdAt
            ).toLocaleDateString("en-us", {
              day: "2-digit",
              year: "numeric",
              month: "short",
            });
            return (
              <Box
                key={checkStatRec._id}
                sx={{
                  border: `1px solid ${colors.borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  px: 1,
                  py: 1.5,
                  my: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography>
                    {checkStatRec.user_id.first_name}{" "}
                    {checkStatRec.user_id.last_name}
                  </Typography>
                  <Typography sx={{ mx: 1 }}>-</Typography>
                  <Typography>{createdDate}</Typography>
                </Box>
                <Button
                  variant="contained"
                  onClick={() => {
                    getChecklistsRecordsAnswers(checkStatRec._id);
                    setResultID(checkStatRec._id);
                    setUserName(
                      checkStatRec.user_id.first_name +
                        " " +
                        checkStatRec.user_id.last_name
                    );
                  }}
                  sx={{ mt: { xs: 1, md: 0 } }}
                >
                  See Details
                </Button>
              </Box>
            );
          })}
      </Box>
      <ComplianceRecordModal
        data={checklistStatRecAnsw}
        opened={openedModal}
        id={resultID}
        name={checklistStatRecName}
        userName={userName}
        closeModal={() => setOpenedModal(false)}
      />
    </Layout>
  );
};

export default ComplianceOneRecord;
