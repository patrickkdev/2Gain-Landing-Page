import { createTheme } from "@mui/material/styles";
import { colors } from "./colors";

export const lightTheme = createTheme({
	typography: { fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(", ") },
	breakpoints: {
		values: {
			xs: 0,
			sm: 425,
			md: 768,
			lg: 1024,
			xl: 1440,
		},
	},
	palette: {
		primary: {
			main: colors.accentColor,
		},
		secondary: {
			main: colors.secondaryColor,
		},

		background: {
			paper: colors.paperColor,
		},
		text: {
			primary: colors.secondaryColor,
		},
	},
});
