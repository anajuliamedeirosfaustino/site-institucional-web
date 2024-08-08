import BANNER_PORTFOLIO from "assets/BannerPortfolio.svg";

const Banner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        backgroundImage: `url(${BANNER_PORTFOLIO})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    />
  );
};

export default Banner;
