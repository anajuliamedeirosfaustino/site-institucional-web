import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import AuthContainer from "containers/AuthContainer";
import Logo from "./Logo";
import ForgotPassword from "./ForgotPassword";
import PasswordField from "components/controlledFields/PasswordFied";
import { useForm } from "react-hook-form";
import TextField from "components/controlledFields/TextField";
import { useWebViewContext } from "contexts/WebViewContext";
import { useNavigate } from "react-router-dom";
import siteMap from "routes/siteMap";

function Login() {
  const { control } = useForm();
  const { isMobile } = useWebViewContext();
  const navigate = useNavigate();

  function handleSignIn() {
    navigate(siteMap.protected.home);
  }

  return (
    <AuthContainer>
      <Card
        sx={{
          width: isMobile ? "100%" : "500px",
        }}
        elevation={isMobile ? 0 : 1}
      >
        <CardContent>
          <Logo />

          <Stack spacing={3}>
            <Typography
              fontSize={"24px"}
              sx={{
                color: "primary.main",
              }}
            >
              Login administrativo
            </Typography>
            <TextField
              control={control}
              name="username"
              id="standard-basic"
              label="Email"
              variant="standard"
              placeholder="Digite aqui"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <PasswordField
              control={control}
              name="password"
              id="standard-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
              placeholder="Digite aqui"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <ForgotPassword />
            <Button variant="contained" onClick={handleSignIn}>
              Entrar
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </AuthContainer>
  );
}

export default Login;
