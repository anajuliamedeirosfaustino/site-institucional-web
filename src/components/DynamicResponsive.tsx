import { useWebViewContext } from "contexts/WebViewContext";
import React from "react";

interface DynamicResponsive {
  mobile: React.ReactNode;
  desktop: React.ReactNode;
}
function DynamicResponsive({ mobile, desktop }: DynamicResponsive) {
  const { isMobile } = useWebViewContext();
  return isMobile ? mobile : desktop;
}

export default DynamicResponsive;
