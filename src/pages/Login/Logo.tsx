import LOGOPORTFOLIO_PORTFOLIO from "assets/logoPortfolio.svg";

const logoPortfolio = () => {
  return (
    <div
      style={{
        width: "80.38px",
        height: "64px",
        backgroundImage: `url(${LOGOPORTFOLIO_PORTFOLIO})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    />
  );
};

export default logoPortfolio;
