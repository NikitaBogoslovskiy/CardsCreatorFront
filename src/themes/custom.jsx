import { createTheme } from '@mui/system';

const lightTheme = {
  text: {
    header: {
      family: "Oswald",
      weight: 600,
      size: {
          content: 24
      },
      color: "#000000",
    },
    primary: {
      family: "Averia Libre",
      weight: 700,
      size: {
          button: 16,
          content: 20
      },
      color: "#000000",
    },
    secondary: {
      family: "Hind Siliguri",
      weight: 300,
      size: {
          content: 16
      },
      color: "#000000",
    },
  },

  background: {
    default: "#FFFFFFFF",
    transparent: "FFFFFF00",
    highlighted: "#6464641E",
  },
};

export const theme = lightTheme;