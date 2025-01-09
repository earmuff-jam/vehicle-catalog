import { Stack, TextField, Typography } from "@mui/material";
import * as React from "react";

interface ITextFieldWithLabelProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  required?: boolean;
  errorMsg?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldWithLabel: React.FunctionComponent<ITextFieldWithLabelProps> = ({
  label,
  name,
  value,
  placeholder,
  required = false,
  errorMsg = "",
  onChange,
}) => {
  return (
    <Stack sx={{ padding: "1rem 0rem" }} spacing={1}>
      <Typography>{label}</Typography>
      <TextField
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        error={Boolean(errorMsg.length)}
        helperText={errorMsg}
        onChange={onChange}
      />
    </Stack>
  );
};

export default TextFieldWithLabel;
