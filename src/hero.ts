import { heroui } from "@heroui/theme";

export default heroui({
  layout: {
    radius: {
      small: "4px",
      medium: "6px",
      large: "8px",
    },
    borderWidth: {
      small: "1px",
      medium: "1px",
      large: "2px",
    },
  },
  themes: {
    light: {
      colors: {
        background: "#FFFFFF",
        foreground: "#11181C",
        primary: {
          DEFAULT: "#006FEE",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#6B7280",
          foreground: "#FFFFFF",
        },
        focus: "#006FEE",
      },
    },
    dark: {
      colors: {
        background: "#0A0A0A",
        foreground: "#ECEDEE",
        content1: {
          DEFAULT: "#18181B",
          foreground: "#ECEDEE",
        },
        content2: {
          DEFAULT: "#27272A",
          foreground: "#D4D4D8",
        },
        primary: {
          DEFAULT: "#006FEE",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#17C964",
          foreground: "#000000",
        },
        danger: {
          DEFAULT: "#F31260",
          foreground: "#FFFFFF",
        },
        divider: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
        },
        focus: "#006FEE",
      },
    },
  },
});
