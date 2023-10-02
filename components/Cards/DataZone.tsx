import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { has } from "src/utils/helper";

interface Props {
  data: {
    name: string;
    _id: string;
  }[];
}

const DataZone: React.FC<Props> = (props) => {
  const [selectedZone, setSelectedZone] = React.useState("");
  const { data } = props;

  const handleChange = (e: SelectChangeEvent) => {
    setSelectedZone(e.target.value as string);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl sx={{ border: "none !important" }} fullWidth>
          <InputLabel>Location</InputLabel>
          <Select
            sx={{ background: "#fff", border: "1px solid #F0F2F4" }}
            value={selectedZone}
            label="Location"
            onChange={handleChange}
            variant="outlined"
          >
            {has(data) &&
              data.map((entry, index) => (
                <MenuItem value={entry._id} key={index}>
                  {entry.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default DataZone;
