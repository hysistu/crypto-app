import { FC, useEffect, Dispatch, SetStateAction } from "react";
import { Box, Button, FormLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Tickets, ticketSchema } from "./Interface";
import { SxProps } from "@mui/system";

export type FormProps = {
  sx?: SxProps;
  model: Tickets | undefined;
  addAction: (data: Tickets) => void;
  actionUpdate: (data: Tickets) => void;
  setMessage?: Dispatch<SetStateAction<string>>;
  setStatus?: Dispatch<SetStateAction<number>>;
};

const Form: FC<FormProps> = ({
  sx,
  model,
  addAction,
  actionUpdate,
  setMessage,
  setStatus,
}) => {
  const formAction = useFormik<Tickets>({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: ticketSchema,
    onSubmit: async (values) => {
      let data;
      try {
        if (!!values?.id) {
          data = await actionUpdate(values);
          // if(setStatus && data?.status){
          //     setStatus(data.status)
          // }
          // if(setMessage && data?.message){
          //     setMessage(data.message)
          // }
        } else {
          data = await addAction(values);
          // if(setStatus){
          //     setStatus(data.status)
          // }
          // if(setMessage){
          //     setMessage(data.message)
          // }
        }
      } catch (e) {
        console.log("e ", e);
      }
    },
  });

  useEffect(() => {
    if (model) {
      formAction.setValues(model);
    }
  }, [model]);

  return (
    <>
      <Box component="form" sx={sx} onSubmit={formAction.handleSubmit}>
        <FormLabel sx={{ color: "#323232", ml: 1, fontWeight: "bold" }}>
          Name
        </FormLabel>
        <TextField
          id="name"
          name="name"
          placeholder="Input your name in here"
          fullWidth
          margin="dense"
          value={formAction.values.name}
          onChange={formAction.handleChange}
          error={formAction.touched.name && Boolean(formAction.errors.name)}
          helperText={
            formAction.touched.name || formAction.errors.name
              ? formAction.errors.name
              : ""
          }
        />

        <FormLabel sx={{ color: "#323232", ml: 1, fontWeight: "bold" }}>
          Description
        </FormLabel>
        <TextField
          multiline
          id="description"
          name="description"
          placeholder="Input your description in here"
          fullWidth
          margin="dense"
          value={formAction.values.description}
          onChange={formAction.handleChange}
          error={
            formAction.touched.description &&
            Boolean(formAction.errors.description)
          }
          helperText={
            formAction.touched.description || formAction.errors.description
              ? formAction.errors.description
              : ""
          }
        />
        <Button style={{ float: "right" }} type={"submit"} variant="contained">
          Add
        </Button>
      </Box>
    </>
  );
};

export default Form;
