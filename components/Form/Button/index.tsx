import { FC } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export type FormProps = {
  status: boolean;
  loading: boolean;
  sx?: any;
};

const SubmitForm: FC<FormProps> = ({ status, loading, sx }) => (
  <LoadingButton
    loading={loading}
    style={{ float: "right" }}
    type={"submit"}
    variant="contained"
    sx={sx}
  >
    {status ? "add" : "update"}
  </LoadingButton>
);

export default SubmitForm;
