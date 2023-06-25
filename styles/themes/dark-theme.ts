import { createTheme } from "@mui/material/styles";
import { lightTheme } from "./light-theme";
import { colors } from "./colors";

export const darkTheme = createTheme({
	typography: { fontFamily: ["Plus Jakarta Sans", "sans-serif"].join(", ") },
	palette: {
		mode: "dark",
		primary: {
			main: colors.accentColor,
		},

		background: {
			paper: colors.darkPaperColor,
		},
	},
});
