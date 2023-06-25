import "@/styles/globals.css";
import { lightTheme } from "@/styles/themes/light-theme";
import CssBaseline from "@mui/material/CssBaseline";
import NoSsr from "@mui/material/NoSsr";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<NoSsr>
				<Component {...pageProps} />
			</NoSsr>
		</ThemeProvider>
	);
}
