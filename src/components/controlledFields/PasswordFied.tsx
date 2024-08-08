import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField, { CustomTextFieldProps } from "./TextField";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

const PasswordField: React.FC<CustomTextFieldProps> = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      {...props}
      type={visible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setVisible((prev) => !prev);
              }}
              onMouseDown={(event) => event.preventDefault()}
              edge="end"
            >
              {visible ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordField;
