import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#18B15E",
    colorSuccess: "#02d46a",
    colorError: "#ff3b30",
    colorWarning: "#faad14",
    colorInfo: "#5189f5",
    colorLink: "#0097EC",
    borderRadius: 4,
  },

  components: {
    Avatar: {
      borderRadius: 4,
      borderRadiusLG: 4,
    },

    Badge: {
      colorBorderBg: "transparent",
      dotSize: 8,
    },

    Button: {
      contentFontSize: 12,
      contentFontSizeLG: 12,
      contentFontSizeSM: 12,
      controlHeightLG: 36,
      defaultShadow: "none",
      paddingBlockLG: 10,
      paddingInlineLG: 16,
      primaryShadow: "none",
    },

    DatePicker: {
      activeShadow: "none",
      borderRadius: 4,
      borderRadiusLG: 4,
      borderRadiusOuter: 4,
      borderRadiusSM: 4,
      borderRadiusXS: 4,
      cellBgDisabled: "transparent",
      colorBgContainerDisabled: "rgba(0, 0, 0, 0.02)",
      colorPrimary: "#18B15E",
      colorBorder: "#E9E9E9",
      colorText: "rgb(0 0 0)",
      colorTextPlaceholder: "rgba(0, 0, 0, 0.02)",
      controlHeightLG: 36,
      fontSize: 12,
      fontSizeLG: 12,
      inputFontSize: 12,
      inputFontSizeLG: 12,
      motionDurationMid: "0s",
      paddingBlock: 8,
    },

    Divider: {
      colorSplit: "rgba(5, 5, 5, 0.10)",
    },

    Form: {
      verticalLabelPadding: "0 0 6px",
    },

    Input: {
      activeShadow: "none",
      borderRadius: 4,
      borderRadiusLG: 4,
      borderRadiusSM: 4,
      colorBgContainerDisabled: "rgba(0, 0, 0, 0.02)",
      colorBorder: "#E9E9E9",
      colorIcon: "#000",
      colorText: "rgb(0 0 0)",
      hoverBorderColor: "#18B15E",
    },

    Layout: {
      headerBg: "#ffffff",
      headerHeight: 60,
      headerPadding: "0 24px",
      siderBg: "#ffffff",
    },

    Menu: {
      horizontalLineHeight: 40,
      itemActiveBg: "transparent",
      itemColor: "#000000",
      itemSelectedColor: "#ffffff",
      itemHeight: 40,
      itemHoverBg: "transparent",
      itemSelectedBg: "#18B15E",
      subMenuItemBg: "#ffffff",
    },

    Modal: {
      borderRadiusLG: 8,
      borderRadiusSM: 8,
      colorBgMask: "rgba(0, 0, 0, 0.70)",
      colorBgTextHover: "transparent",
      controlHeight: 24,
      padding: 8,
      paddingLG: 24,
      marginXS: 16,
    },

    Pagination: {
      borderRadius: 2.8,
      borderRadiusLG: 2.8,
      borderRadiusSM: 2.8,
      colorPrimary: "#18B15E",
      colorBgTextHover: "transparent",
      colorText: "#18B15E",
      itemActiveBg: "#18B15E",
      itemSize: 26,
      itemSizeSM: 26,
      margin: 8,
      motionDurationSlow: "0.2s",
    },

    Rate: {
      marginXS: 5,
    },

    Select: {
      borderRadius: 4,
      borderRadiusLG: 4,
      borderRadiusSM: 4,
      colorBgContainerDisabled: "rgba(0, 0, 0, 0.02)",
      colorBorder: "#E9E9E9",
      colorText: "rgb(0 0 0)",
      colorTextPlaceholder: "rgb(0 0 0 / 0.50)",
      controlHeightLG: 36,
      controlHeight: 36,
      motionDurationSlow: "0.2s",
      optionSelectedFontWeight: 500,
    },

    Skeleton: {
      borderRadiusSM: 2.8,
    },

    Steps: {
      colorPrimary: "#4ade80",
      dotCurrentSize: 10,
      dotSize: 8,
    },

    Table: {
      borderColor: "#E9E9E9",
      cellFontSize: 12,
      cellFontSizeMD: 12,
      cellFontSizeSM: 12,
      colorText: "#000",
      headerBg: "#F6F6F6",
      headerBorderRadius: 0,
      headerColor: "#000",
    },

    Tabs: {
      horizontalItemPadding: "8px 0",
      inkBarColor: "#10b981",
      itemActiveColor: "#10b981",
      itemHoverColor: "#10b981",
      itemSelectedColor: "#10b981",
    },

    Tag: {
      marginXS: 0,
    },

    Tooltip: {
      borderRadius: 4,
      fontSize: 12,
      paddingSM: 16,
      paddingXS: 12,
    },
  },
};

export default theme;
