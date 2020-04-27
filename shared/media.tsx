const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  tablet: "768px",
  notTablet: "769px",
  laptop: "1024px",
  desktop: "1440px",
};

export default {
  legacy: `(max-width: ${sizes.mobileM})`,
  mobile: `(min-width: ${sizes.mobileL})`,
  mobileOnly: `(max-width: ${sizes.mobileL})`,
  notMobile: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  notTablet: `(min-width: ${sizes.notTablet})`,
  tabletOnly: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopOnly: `(max-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopOnly: `(max-width: ${sizes.desktop})`,
};
