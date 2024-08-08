import MuiTextField, { TextFieldProps } from "@mui/material/TextField";
import { Control, Controller, FieldValues } from "react-hook-form";

export type CustomTextFieldProps = {
  control: Control<FieldValues>;
  name: string;
} & TextFieldProps;

function TextField({
  name,
  defaultValue,
  control,
  variant = "standard",
  ...rest
}: CustomTextFieldProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { invalid, error } }) => (
        <MuiTextField
          {...field}
          {...rest}
          fullWidth
          variant={variant}
          error={invalid}
          helperText={error?.message}
          defaultValue={defaultValue}
        />
      )}
    />
  );
}

export default TextField;
