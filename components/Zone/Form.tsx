import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { Zone, zoneSchema } from "./Interface";
import { SxProps } from "@mui/system";
import { Sector } from "components/Sector/Interface";
import InputMUI from "components/Form/Input";
import ZoneSectorsList from "./ZoneSectorsList";
import SubmitForm from "components/Form/Button";

export type FormProps = {
  sx?: SxProps;
  model: Zone | any;
  addAction: any;
  actionUpdate: any;
  sectors?: Sector[];
  sectorsZones?: Sector[];
};

const Form: React.FC<FormProps> = ({
  sx,
  model,
  addAction,
  actionUpdate,
  sectors = [],
  sectorsZones = [],
}) => {
  const [newModel, setNewModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const formAction = useFormik<Zone>({
    initialValues: {
      id: "",
      name: "",
      description: "",
    },
    validationSchema: zoneSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        if (!newModel) {
          actionUpdate(values).then((data: any) => {
            if (data.status === 0) {
              toast.error("Ka ndodhur nje problem");
            } else {
              toast.success("Azhurnuar me sukses");
            }
            setLoading(false);
          });
        } else {
          addAction(values).then((data: any) => {
            if (data.status === 0) {
              toast.error("Ka ndodhur nje problem");
            } else {
              toast.success("Eshte shtuar me sukes");
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
        <ZoneSectorsList
          sectors={sectors}
          sectorsZones={sectorsZones}
          zone_id={model?._id}
        />
        <SubmitForm status={newModel} loading={loading} />
      </Box>
    </>
  );
};

export default Form;
