import { FC, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Box, Button, styled, Typography } from "@mui/material";
import { SxProps } from "@mui/system";
import { useFormik } from "formik";
import { User } from "components/User/Interface";
import SelectMUI from "components/Form/Select/SelectMUI";
import InputMUI from "components/Form/Input";
import {
  Ticket,
  ticketSchema,
  TICKET_ADD,
  TICKET_SOME_ERROR_ACCURED,
  TICKTE_UPDATED,
} from "./Interface";
import SubmitForm from "components/Form/Button";
import { Sector } from "components/Sector/Interface";
import { colors } from "src/utils/colors";
import { TicketCategory } from "components/TicketsCategory/Interface";
import { TicketType } from "components/TicketType/Interface";
import { TicketStatus } from "components/TicketStatus/InterfaceStatus";
import { TicketRating } from "components/TicketRating/Interface";
import { Risk } from "components/Risk/Interface";

export type FormProps = {
  sx?: SxProps;
  model: Ticket | undefined;
  addAction: any;
  actionUpdate: any;
  categories: TicketCategory[];
  sectors: Sector[];
  types: TicketType[];
  statuses: TicketStatus[];
  ratings: TicketRating[];
  employees: User[];
  levels?: any;
  closeForm?: any;
  reloadData?: any;
  zone?: any;
  due_date?: any;
  department?: any;
  priority?: any;
};

const TicketForm: FC<FormProps> = ({
  sx,
  model,
  addAction,
  actionUpdate,
  statuses,
  categories,
  employees,
  levels,
  closeForm,
  reloadData,
  zone,
  department,
}) => {
  const [newModel, setNewModel] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const formAction = useFormik<Ticket>({
    initialValues: {
      response: "",
      title: "",
      description: "",
      user_id: "",
      priority: "",
      department_id: "",
      category_id: "",
      status_id: "",
      zone_id: "",
      level_id: "",
    },
    validationSchema: ticketSchema,
    onSubmit: (values: any) => {
      setLoading(true);
      try {
        if (!newModel) {
          actionUpdate(values).then((data: any) => {
            if (data.status === 0) {
              toast.error(TICKET_SOME_ERROR_ACCURED);
            } else {
              toast.success(TICKTE_UPDATED);
              closeForm();
              reloadData();
            }
            setLoading(false);
          });
        } else {
          addAction(values).then((data: any) => {
            if (data.status === 0) {
              toast.error(TICKET_SOME_ERROR_ACCURED);
            } else {
              toast.success(TICKET_ADD);
              closeForm();
              reloadData();
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

  const priorities = [
    {
      name: "High",
      _id: 1,
    },
    {
      name: "Moderate",
      _id: 2,
    },
    {
      name: "Low",
      _id: 3,
    },
  ];

  useEffect(() => {
    if (model) {
      formAction.setValues(model);
      setNewModel(false);
    } else {
      setNewModel(true);
    }
  }, [model]);

  const Input = styled("input")({
    display: "none",
  });

  return (
    <>
      <Box component="form" sx={sx} onSubmit={formAction.handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <InputMUI
            label={"Title"}
            placeholder={"Title of Ticket"}
            fullPlaceholder={"Title of Ticket"}
            name={"title"}
            formAction={formAction}
            sx={{ width: { xs: "100%", md: "30%" } }}
          />
          <SelectMUI
            label={"Assign to"}
            name={"user_id"}
            options={employees}
            formAction={formAction}
            sx={{ width: "30%" }}
          />
          <SelectMUI
            label={"Status"}
            name={"status_id"}
            options={statuses}
            formAction={formAction}
            sx={{ width: "30%" }}
          />
          <SelectMUI
            label={"Category"}
            name={"category_id"}
            options={categories}
            formAction={formAction}
            sx={{ width: "30%" }}
          />
          <SelectMUI
            label={"Level"}
            name={"level_id"}
            options={levels}
            formAction={formAction}
            sx={{ width: "30%" }}
          />
          <SelectMUI
            label={"Zones"}
            name={"zone_id"}
            options={zone}
            formAction={formAction}
            sx={{ width: "30%" }}
          />
          <SelectMUI
            label={"Department"}
            name={"department_id"}
            options={department}
            formAction={formAction}
            sx={{ width: "48%" }}
          />
          <SelectMUI
            label={"Priority"}
            name={"priority"}
            options={priorities}
            formAction={formAction}
            sx={{ width: "48%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        ></Box>
        <InputMUI
          label={"Description"}
          placeholder={"Description"}
          name={"description"}
          formAction={formAction}
        />
        <SubmitForm status={newModel} loading={loading} />
      </Box>
    </>
  );
};

export default TicketForm;
