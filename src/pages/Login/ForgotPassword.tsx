import { Typography } from "@mui/material";

function ForgotPassword() {
  return (
    <Typography
      sx={{
        color: (theme) => theme.palette.primary.light,
        textAlign: "left",
        justifyContent: "flex-start",
        cursor: "pointer",
      }}
    >
      Esqueci minha senha
    </Typography>
  );
}

export default ForgotPassword;
