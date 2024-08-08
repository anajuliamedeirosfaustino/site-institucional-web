import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import theme from "config/theme";
import { WebViewProvider } from "contexts/WebViewContext";
import Navigation from "routes";

function App() {
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <WebViewProvider>
          <Navigation />
        </WebViewProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
