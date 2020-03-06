const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export default {
  mobile: `(min-width: ${sizes.mobileL})`,
  mobileOnly: `(max-width: ${sizes.mobileL})`,
  notMobile: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`
};
