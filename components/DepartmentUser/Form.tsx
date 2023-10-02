import React, { useEffect, useState } from "react";
import { Box, Button, TextField, Autocomplete } from "@mui/material";
import { useFormik } from "formik";
import { SxProps } from "@mui/system";
import {
  departmentUserSchema,
  DepartmentUser,
} from "components/DepartmentUser/Interface";
import { User } from "components/User/Interface";
import { Department } from "components/Department/Interface";
import SelectMUI from "components/Form/Select/SelectMUI";

export type FormProps = {
  sx?: SxProps;
  model?: DepartmentUser | undefined | any;
  addAction: (data: DepartmentUser) => void;
  actionUpdate: (data: DepartmentUser) => void;
  users: User[] | any;
  departments: Department[] | any;
};

const Form: React.FC<FormProps> = ({
  sx,
  model,
  addAction,
  actionUpdate,
  users,
  departments,
}) => {
  const defaultProps = {
    options: users,
    getOptionLabel: (option: User) =>
      option.first_name + " " + option.last_name,
  };

  const [inputValue, setInputValue] = useState<any | undefined>({});

  const formAction = useFormik<any>({
    initialValues: {
      department_id: "",
      user_id: "",
    },
    enableReinitialize: true,
    validationSchema: departmentUserSchema,
    onSubmit: async (values) => {
      let data;
      try {
        if (!!values?.id) {
          data = await actionUpdate(values);
          // setStatus(data.status)
          // setMessage(data.message)
        } else {
          data = await addAction(values);
          // setStatus(data.status)
          // setMessage(data.message)
        }
      } catch (e) {
        console.log("e ", e);
      }
    },
  });

  useEffect(() => {
    if (model && users && departments) {
      const _user = users.find((user: any) => user._id === model.user_id._id);

      if (_user) {
        setInputValue(_user);
      }

      formAction.setValues({
        user_id: model.user_id._id,
        department_id: model.department_id._id,
      });
    }
  }, [model, users, departments]);

  return (
    <>
      <Box component="form" sx={sx} onSubmit={formAction.handleSubmit}>
        <Autocomplete
          {...defaultProps}
          value={inputValue}
          id="combo-box-demo"
          sx={{ width: 300 }}
          onChange={(event, newValue) => {
            formAction.setFieldValue("user_id", newValue?._id);
            setInputValue(newValue);
          }}
          renderOption={(props, option) => (
            <Box component="li" {...props} key={option?._id}>
              {option.first_name} ({option.last_name})
            </Box>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Select User" />
          )}
        />

        <SelectMUI
          label={"Department"}
          name={"department_id"}
          options={departments}
          formAction={formAction}
        />

        <Button style={{ float: "right" }} type={"submit"} variant="contained">
          Add
        </Button>
      </Box>
    </>
  );
};

export default Form;
