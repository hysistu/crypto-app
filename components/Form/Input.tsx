import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

interface InputProps {
  label: string;
  type?: string;
  name: string;
  fullPlaceholder?: string;
  placeholder: string;
  formAction: any;
  multiline?: boolean;
  fullWidth?: boolean;
  sx?: any;
}

export default function InputMUI({
  label,
  type = "text",
  name,
  fullPlaceholder,
  placeholder,
  formAction,
  multiline = false,
  fullWidth = true,
  sx,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <Box sx={sx}>
      <FormLabel sx={{ color: "#868B9F", ml: 1, fontSize: 12 }}>
        {label}
      </FormLabel>
      <TextField
        multiline={multiline}
        id={name}
        name={name}
        type={type === "password" && showPassword ? "text" : type}
        placeholder={
          fullPlaceholder
            ? fullPlaceholder
            : `Input your ${placeholder.toLowerCase()} here`
        }
        fullWidth={fullWidth}
        margin="dense"
        value={formAction.values[name]}
        onChange={formAction.handleChange}
        error={formAction.touched[name] && Boolean(formAction.errors[name])}
        helperText={
          formAction.touched[name] && formAction.errors[name]
            ? formAction.errors[name]
            : " "
        }
        InputProps={
          type === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
        sx={{ my: 0 }}
      />
    </Box>
  );
}
