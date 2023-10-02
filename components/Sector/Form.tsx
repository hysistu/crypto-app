import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import {
  Sector,
  sectorSchema,
  SECTOR_ADD,
  SECTOR_SOME_ERROR_ACCURED,
  SECTOR_UPDATED,
} from "./Interface";
import { SxProps } from "@mui/system";
import InputMUI from "components/Form/Input";
import SelectMUI from "components/Form/Select/SelectMUI";
import { Zone } from "components/Zone/Interface";
import { toast } from "react-toastify";
import SubmitForm from "components/Form/Button";
import { useRouter } from "next/router";

export type FormProps = {
  sx?: SxProps;
  model: Sector | undefined;
  zones: Zone[] | undefined;
  addAction: any;
  actionUpdate: any;
  // setMessage: () => void;
  // setStatus: () => void;
};

const Form: React.FC<FormProps> = ({
  sx,
  model,
  zones,
  addAction,
  actionUpdate,
  //   setMessage,
  //   setStatus,
}) => {
  const [newModel, setNewModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const formAction = useFormik<Sector>({
    initialValues: {
      name: "",
      description: "",
      zone_id: "",
      coordinate_x: "",
      coordinate_y: "",
    },
    validationSchema: sectorSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        if (!newModel) {
          actionUpdate(values).then((data: any) => {
            if (data.status === 0) {
              toast.error(SECTOR_SOME_ERROR_ACCURED);
            } else {
              router.push("sectors");
              toast.success(SECTOR_UPDATED);
            }
            setLoading(false);
          });
        } else {
          addAction(values).then((data: any) => {
            if (data.status === 0) {
              toast.error(SECTOR_SOME_ERROR_ACCURED);
            } else {
              router.push("sectors");
              toast.success(SECTOR_ADD);
            }
            setLoading(false);
          });
        }
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (model) {
      formAction.setValues(model);
      setNewModel(false);
    } else {
      setNewModel(true);
    }
  }, [model]);

  return (
    <>
      <Box component="form" sx={sx} onSubmit={formAction.handleSubmit}>
        <InputMUI
          label={"Name"}
          placeholder={"name"}
          name={"name"}
          formAction={formAction}
        />
        <InputMUI
          label={"Description"}
          placeholder={"description"}
          name={"description"}
          formAction={formAction}
        />
        <SelectMUI
          label={"Zone"}
          name={"zone_id"}
          options={zones}
          formAction={formAction}
        />
        {/* <InputMUI
          label={"Coordinate X"}
          placeholder={"Coordinate X"}
          name={"coordinate_x"}
          formAction={formAction}
        />
        <InputMUI
          label={"Coordinate Y"}
          placeholder={"Coordinate Y"}
          name={"coordinate_y"}
          formAction={formAction}
        /> */}
        <SubmitForm status={newModel} loading={loading} />
      </Box>
    </>
  );
};

export default Form;
