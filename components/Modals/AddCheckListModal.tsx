import {
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import React, { useEffect, useState, useCallback } from "react";

import { useFormik } from "formik";
import InputMUI from "components/Form/Input";
import SelectMUI from "components/Form/Select/SelectMUI";
import {
  cheklistTemplateSchema,
  CHECKLIST_TEMPLATE_ADD,
  CHECKLIST_TEMPLATE_SOME_ERROR_OCCURRED,
  CheckListTemplate,
} from "components/Checklist/ChecklistTemplate/Interface";

import { addChecklistTemplate } from "requests/checklistTemplate";
import { getChecklistTemplateType } from "requests/checklistTemplateType";
import { toast } from "react-toastify";
import { IconClose } from "components/svg/icons";
import { LoadingButton } from "@mui/lab";
import { CheckListTemplateType } from "components/Checklist/ChecklistTemplateType/Interface";

interface Props {
  open: boolean;
  closeModal: any;
  newChecklist: any;
  setNewChecklist: any;
}

const AddCheckListModal: React.FC<Props> = (props) => {
  const { open, closeModal, newChecklist, setNewChecklist } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [checklistTypes, setChecklistTypes] = useState<
    CheckListTemplateType[] | undefined
  >(undefined);

  useEffect(() => {
    const types = getChecklistTemplateType();
  }, []);
  const invokeData = useCallback(async () => {
    const types = await getChecklistTemplateType();

    if (types) {
      setChecklistTypes(types.ChecklistTypes);
    }
  }, []);

  useEffect(() => {
    invokeData();
  }, []);
  const formAction = useFormik<CheckListTemplate | any>({
    initialValues: {
      name: "",
      description: "",
      checklist_type_id: "",
      yes_or_no: "",
    },
    validationSchema: cheklistTemplateSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        addChecklistTemplate(values).then((data) => {
          if (data.status === 0) {
            toast.error(CHECKLIST_TEMPLATE_SOME_ERROR_OCCURRED);
          } else {
            toast.success(CHECKLIST_TEMPLATE_ADD);
            closeModal();
            setNewChecklist(!newChecklist);
          }
          setLoading(false);
        });
      } catch (e: any) {
        toast.error(e.message);
        setLoading(false);
      }
    },
  });
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      keepMounted
      open={open}
      onClose={closeModal}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 4,
          pb: 0,
        }}
      >
        <Typography fontWeight={700} fontSize={22}>
          Add New Checklist
        </Typography>
        <IconButton onClick={closeModal}>
          <IconClose />
        </IconButton>
      </DialogTitle>
      <Box
        component="form"
        onSubmit={formAction.handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          p: 4,
        }}
      >
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
          label={"Checklist Type"}
          name={"checklist_type_id"}
          options={checklistTypes}
          formAction={formAction}
        />
        <SelectMUI
          label={"Checklist Answers Type"}
          name={"yes_or_no"}
          options={[
            { name: "Selectable", _id: false },
            { name: "Yes/No", _id: true },
          ]}
          formAction={formAction}
        />
        <Box sx={{ mt: 4 }}>
          <LoadingButton
            loading={loading}
            sx={{
              py: { lg: 1.5 },
              textTransform: "none",
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "120%",
              letterSpacing: "0.005em",
              height: "56px",
            }}
            variant="contained"
            type="submit"
            fullWidth
          >
            Create
          </LoadingButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default AddCheckListModal;
