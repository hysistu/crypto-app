import { FC } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Sector } from "components/Sector/Interface";
import { addSectorToZone, removeSectorFromZone } from "requests/sectors";

export type FormProps = {
  sectors: Sector[];
  sectorsZones: Sector[];
  zone_id: string;
};

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const ZoneSectorsList: FC<FormProps> = ({
  sectors = [],
  sectorsZones = [],
  zone_id,
}) => {
  const checkSectorOnZone = (
    sectors: Sector[],
    zone_id: string,
    exists: boolean
  ) => {
    sectors.map((sector) => {
      if (exists) {
        removeSectorFromZone(sector?._id, zone_id);
      } else {
        addSectorToZone(sector?._id, zone_id);
      }
    });
  };

  return (
    <Stack style={{ marginTop: 20 }} spacing={3} sx={{ width: 500 }}>
      <Autocomplete
        onChange={(event: any, newValue: Sector[], reason: any) => {
          if (reason === "removeOption") {
            checkSectorOnZone(newValue, zone_id, true);
          } else {
            checkSectorOnZone(newValue, zone_id, false);
          }
        }}
        multiple
        id="sectors-standard"
        options={sectors}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option: Sector, value: Sector) =>
          option._id === value._id
        }
        defaultValue={sectorsZones}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Select Sectors"
            placeholder="Sectors of Zone"
          />
        )}
      />
    </Stack>
  );
};

export default ZoneSectorsList;
