import { FC, useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DepartmentUser } from "components/DepartmentUser/Interface";
import { User } from "components/User/Interface";
import {
  addDepartmentUser,
  deleteDepartmentUser,
} from "requests/departamentUser";

export type FormProps = {
  users: User[];
  userDepartments: DepartmentUser[];
  department_id?: any;
};

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const DepartmentUsersList: FC<FormProps> = ({
  users = [],
  userDepartments = [],
  department_id,
}) => {
  const [prevState, setPrevState] = useState<User[] | any>([]);
  const [loading, setLoader] = useState<boolean>(true);

  const checkUserToDepartment = (
    users: User[],
    department_id: string,
    exists: boolean
  ) => {
    users.map((user) => {
      if (exists) {
        deleteDepartmentUser(user?._id, department_id);
      } else {
        addDepartmentUser(user?._id, department_id);
      }
    });
  };

  useEffect(() => {
    if (userDepartments.length) {
      (async () => {
        const _users = userDepartments.map((ud) => ud.user_id);
        await sleep(1000); // For demo purposes.

        setPrevState(_users);
        setLoader(false);
      })();
    } else {
      (async () => {
        await sleep(5000); // For demo purposes.
        setLoader(false);
      })();
    }
  }, [userDepartments]);

  if (loading) {
    return null;
  }

  return (
    <Stack style={{ marginTop: 20 }} spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        onChange={(event: any, newValue: User[], reason: any) => {
          const _add: User[] = newValue?.filter((user) => {
            return !prevState.includes(user) as User;
          });

          const _remove: User[] = prevState?.filter((user: any) => {
            return !newValue?.includes(user);
          });

          if (_add.length) {
            checkUserToDepartment(_add, department_id, false);
          }
          if (_remove.length) {
            checkUserToDepartment(_remove, department_id, true);
          }
          setPrevState(newValue);
        }}
        loading={loading}
        multiple
        id="tags-standard"
        options={users}
        getOptionLabel={(option) =>
          option?.first_name + " " + option?.last_name
        }
        isOptionEqualToValue={(option: User, value: User) =>
          option._id === value?._id
        }
        defaultValue={prevState}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Managers"
            placeholder="Managers of Department"
          />
        )}
      />
    </Stack>
  );
};

export default DepartmentUsersList;
