import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

interface SelectProps {
  label: string;
  name: string;
  options: any;
  formAction: any;
  sx?: any;
}

export default function SelectMUI({
  label,
  name,
  options = [],
  formAction,
  sx,
}: SelectProps) {
  const [colors, setColors] = useState<string>("#868B9F");
  const handleBlur = () => {
    setColors("initial");
  };

  return (
    <Box sx={sx}>
      <FormLabel sx={{ color: "#868B9F", ml: 1, fontSize: 12 }}>
        {label}
      </FormLabel>
      <FormControl fullWidth sx={{ color: "#323232", fontWeight: "bold" }}>
        <Select
          labelId={`select-select-label-${name}`}
          id={`select-select-${name}`}
          name={name}
          value={formAction.values[name] as string}
          onChange={formAction.handleChange}
          error={formAction.touched[name] && Boolean(formAction.errors[name])}
          displayEmpty
          onClick={handleBlur}
          sx={{ color: colors }}
        >
          <MenuItem value="" disabled>
            Select {label.toLowerCase()} here
          </MenuItem>
          {options.map((item: any, index: number) => {
            return (
              <MenuItem key={index} value={item._id as string}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText error>
          {formAction.touched[name] && formAction.errors[name]
            ? formAction.errors[name]
            : " "}
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
