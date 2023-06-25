/* eslint-disable @next/next/no-img-element */
import React from "react";

import { ArrowDownward, Download, KeyboardArrowRight } from "@mui/icons-material";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";

import styles from "./Header.module.css";

const Header = () => {
	const navigateDown = () => document.querySelector("#features-snap")?.scrollIntoView({ behavior: "smooth" });

	const smallScreen = useMediaQuery(useTheme().breakpoints.down("md"));

	return (
		<div>
			<div className={styles.headerMain}>
				<Container maxWidth={"xl"}>
					<div className={styles.heroArea}>
						<Grid container spacing={2}>
							<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
								<div className={styles.heroInfo}>
									<Typography variant="h6" gutterBottom>
										<span id="highlight">2Gain</span>
									</Typography>
									<Typography variant="h1" fontWeight="bold" gutterBottom>
										Gerenciamento de Bancas em Opções Binárias e Apostas 🚀
									</Typography>
									<Typography variant="h6">
										Recupere suas Perdas, Alcance suas Metas e <span id="highlight">Maximize seus Lucros</span>
										{/* <span id="highlight">se mantenha à frente da concorrência</span>. */}
									</Typography>
									<div className={styles.heroAction}>
										<Button
											href={"../static/downloadable/Calculadora Financeira 2Gain.exe"}
											download
											variant="contained"
											size="small"
											sx={{ marginRight: "6px" }}
											endIcon={<Download sx={{ color: "white" }} />}>
											Baixar no Windows
										</Button>
										<Button
											href="../static/downloadable/Calculadora Financeira 2Gain.apk"
											download
											variant="contained"
											size="small"
											endIcon={<Download sx={{ color: "white" }} />}>
											Baixar no Android
										</Button>
									</div>
								</div>
							</Grid>
							<Grid display={"flex"} alignItems={"center"} item xl={6} lg={6} md={6} sm={12} xs={12}>
								<div style={{ position: "relative", paddingRight: "100%", paddingBottom: "56.25%" }}>
									<iframe
										src={"https://www.youtube.com/embed/XTF_BWvg6hk"}
										title="tutorial"
										style={{ position: "absolute", top: 0, left: 0 }}
										width="100%"
										height="100%"
										allowFullScreen
									/>
								</div>
								{/* <img src="/images/home/menu.png" alt="dashboard" /> */}
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
			{!smallScreen && (
				<IconButton id="navigate-down-arrow" onClick={navigateDown} className={styles.navigateDown}>
					<ArrowDownward />
				</IconButton>
			)}
		</div>
	);
};

export default Header;
