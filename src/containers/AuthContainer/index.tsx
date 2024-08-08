import { Container, Stack } from "@mui/material";

import Banner from "./components/Banner";

import { PropsWithChildren } from "react";
import DynamicResponsive from "components/DynamicResponsive";

function AuthContainer({ children }: PropsWithChildren) {
  return (
    <DynamicResponsive
      desktop={
        <Stack direction="row" sx={{ width: "100vw", height: "100vh" }}>
          <Stack
            sx={{
              width: "57%",
            }}
            justifyContent="center"
            alignItems="center"
          >
            {children}
          </Stack>
          <Stack
            sx={{
              width: "43%",
            }}
          >
            <Banner />
          </Stack>
        </Stack>
      }
      mobile={
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {children}
        </Container>
      }
    />
  );
}

export default AuthContainer;
