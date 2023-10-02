import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Layout from "components/Layout";
import { NextPage } from "next";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { getAllSector } from "requests/sectors";
import { colors } from "src/utils/colors";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import JSZip from "jszip";

const QrCodes: NextPage = () => {
  const [sectors, setSectors] = useState<any>([]);
  const [selectedSector, setSelectedSector] = useState<any>();
  const [qrTest, setQrTest] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  let oneRef = useRef<any>([]);
  let allRefs = useRef<any>([]);

  const getSectors = async () => {
    const _sectors: any = await getAllSector();
    if (_sectors) {
      setSectors(_sectors.Sector.results);
    }
  };

  const downloadQRCodes = async () => {
    setLoading(true);
    let zip = new JSZip();
    let qrCodesImg = [];
    let qrCodesLength = selectedSector === "all" ? sectors.length : 1;
    let qrCodesImgName = [];

    for (let i = 0; i < qrCodesLength; i++) {
      let htmlElement: any = document.getElementById(`qrCode${i}`);
      let htmlText: any = htmlElement?.innerText.split("\n");
      let oneQrCodeImg = await domtoimage.toBlob(htmlElement);
      qrCodesImg.push(oneQrCodeImg);
      qrCodesImgName.push(htmlText[2]);
    }
    if (qrCodesImg.length > 1) {
      for (let u = 0; u < qrCodesImg.length; u++) {
        zip?.file(
          `QR_Code_${qrCodesImgName[u].replace(/ /g, "_")}.png`,
          qrCodesImg[u],
          {
            base64: true,
          }
        );
      }
      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "QR_Codes.zip");
      });
    } else
      saveAs(
        qrCodesImg[0],
        `QR_Code_${qrCodesImgName[0].replace(/ /g, "_")}.png`
      );
    setLoading(false);
  };

  const generateQrCode = () => {
    if (selectedSector === "all") {
      setQrTest(
        sectors.map((sector: any, index: any) => (
          <QRCodeCanvas
            id={`qrCode${index}`}
            value={`${window.location.origin}/costumer-report/sector/${sector._id}`}
            size={200}
            bgColor={"#fff"}
            level={"H"}
            key={index}
          />
        ))
      );
    } else if (selectedSector) {
      setQrTest(
        <QRCodeCanvas
          id={`qrCode0`}
          value={`${window.location.origin}/costumer-report/sector?id=${selectedSector}`}
          size={200}
          bgColor={"#fff"}
          level={"H"}
        />
      );
    } else {
      toast.error("Duhet te zgjedhni se paku nje sektor");
    }
  };

  useEffect(() => {
    getSectors();
  }, []);

  return (
    <Layout title="QR Codes">
      {/* <Box sx={{ maxWidth: "800px", mx: "auto" }}>
        <Typography
          sx={{ fontWeight: 500, fontSize: "22px", textAlign: "center" }}
        >
          Here you can create QR Code for each sector you want
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: { xs: "center", md: "flex-end" },
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: { md: "80%" },
            mx: "auto",
            mt: { xs: 5, md: 10 },
            mb: 5,
          }}
        >
          <Box sx={{ width: "75%" }}>
            <FormLabel sx={{ color: "#868B9F", ml: 1, fontSize: 12 }}>
              Select sector
            </FormLabel>
            <FormControl
              fullWidth
              sx={{ color: "#323232", fontWeight: "bold" }}
            >
              <Select
                size="small"
                labelId="sectors"
                id="sectors"
                name="sectors"
                value={selectedSector}
                onChange={(e: any) => {
                  setSelectedSector(e.target.value);
                  setQrTest([]);
                }}
              >
                <MenuItem value="all">Generate for all sectors</MenuItem>
                {sectors.map((item: any, index: number) => {
                  return (
                    <MenuItem key={index} value={item._id as string}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          <Button
            onClick={() => generateQrCode()}
            sx={{ maxWidth: { md: "20%" }, mt: { xs: 2, md: "initial" } }}
            size="large"
            variant="contained"
          >
            Generate
          </Button>
        </Box>
        {qrTest && qrTest.length > 1 && (
          <LoadingButton
            sx={{ display: "flex", mx: "auto", mt: 2 }}
            onClick={() => downloadQRCodes()}
            variant="contained"
            loading={loading}
          >
            Download All
          </LoadingButton>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {qrTest.length > 1 ? (
          qrTest?.map((qr: any, i: any) => {
            return (
              <Box
                key={i}
                id={`qrCode${i}`}
                sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "fit-content",
                    height: "fit-content",
                    border: `2px solid ${colors.dark}`,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                    px: 3,
                    pt: 2,
                    pb: 3,
                  }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                    Prishtina Mall
                  </Typography>
                  <Typography
                    sx={{ mb: 2, fontSize: "16px", fontWeight: "400" }}
                  >
                    Sektori{" "}
                    {sectors
                      .find(
                        (sector: any) =>
                          sector._id === qr.props.value.split("sector/")[1]
                      )
                      ?.name.substring(1)}
                  </Typography>
                  {qr}
                </Box>
              </Box>
            );
          })
        ) : qrTest.length !== 0 ? (
          <Box>
            <Box
              id={`qrCode0`}
              ref={oneRef}
              sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                  border: `2px solid ${colors.dark}`,
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  px: 3,
                  pt: 2,
                  pb: 3,
                }}
              >
                <Typography sx={{ fontSize: "20px", fontWeight: "500" }}>
                  Prishtina Mall
                </Typography>
                <Typography sx={{ mb: 2, fontSize: "16px", fontWeight: "400" }}>
                  Sektori{" "}
                  {sectors
                    .find((sector: any) => sector._id === selectedSector)
                    ?.name.substring(1)}
                </Typography>
                {qrTest}
              </Box>
            </Box>
            <LoadingButton
              sx={{ display: "flex", mx: "auto", mt: 3 }}
              onClick={() => downloadQRCodes()}
              variant="contained"
              loading={loading}
            >
              Download
            </LoadingButton>
          </Box>
        ) : null}
      </Box> */}
      QR Codes
    </Layout>
  );
};

export default QrCodes;
