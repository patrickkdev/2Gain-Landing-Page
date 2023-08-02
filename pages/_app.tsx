import "@/styles/globals.css";
import { lightTheme } from "@/styles/themes/light-theme";
import CssBaseline from "@mui/material/CssBaseline";
import NoSsr from "@mui/material/NoSsr";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";

import { useEffect } from 'react'
import * as gtag from '../lib/gtag'
import { useRouter } from "next/router";


export default function App({ Component, pageProps }: AppProps) {
	
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
		<ThemeProvider theme={lightTheme}>
			<CssBaseline />
			<NoSsr>
				<Component {...pageProps} />
			</NoSsr>
		</ThemeProvider>
	);
}
