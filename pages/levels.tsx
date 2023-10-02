import { Box, Button, Card, TextField, Typography } from "@mui/material";
import AddAction from "components/actions/AddAction";
import { incidentNivelHeader } from "components/IncidentNivel/HeaderICN";
import Layout from "components/Layout";
import ReusableTable from "components/ReusableTable/ReusableTable";
import useAuth from "context/useAuth";
import getData from "hooks/getData";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addIncidentNivel, getAllIncidentNivel } from "requests/incidentNivel";
import { has } from "src/utils/helper";

const LevelsPage: NextPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [showIncForm, setShowIncForm] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const [_page, setPage] = useState<number>(1);
  const { loader, records, page, totalPage, reloadData, data } = getData(
    getAllIncidentNivel,
    "IncidentNivel",
    _page
  );

  const createIncidentNivel = async () => {
    const incidentNivels = await addIncidentNivel({ name, description });
    if (incidentNivels.status === 0) {
      toast.error(incidentNivels.message);
    } else {
      toast.success("Eshte shtuar me sukes");
      setName("");
      setDescription("");
      setShowIncForm(false);
      reloadData();
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, router, loading]);

  return (
    <Layout title="Incident Levels">
      {showIncForm && (
        <Card sx={{ width: "fit-content", mx: "auto", mb: 4, py: 2, px: 3 }}>
          <Typography sx={{ fontSize: "20px", fontWeight: "500", mb: 2 }}>
            New incident level
          </Typography>
          <Box>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ ml: 5 }}
            />
          </Box>
          <Box sx={{ textAlign: "right", mt: 4 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setName("");
                setDescription("");
                setShowIncForm(false);
              }}
            >
              Discard
            </Button>
            <Button
              variant="contained"
              sx={{ ml: 1 }}
              onClick={() => createIncidentNivel()}
            >
              Add
            </Button>
          </Box>
        </Card>
      )}

      {has(data) && (
        <ReusableTable
          columns={incidentNivelHeader(reloadData)}
          data={data}
          totalPage={totalPage}
          page={page}
          setPage={setPage}
          records={records}
          loader={loader}
        />
      )}
    </Layout>
  );
};

export default LevelsPage;
