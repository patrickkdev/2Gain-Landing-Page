/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./AboutUs.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
	return (
		<div className={styles.aboutUsMain}>
			<div className={styles.aboutUsTitle}>
				<Container maxWidth={"md"}>
					<Fade direction="up" triggerOnce>
						<Typography variant={"h3"} fontWeight={"bold"} gutterBottom>
							Sobre a 2Gain 😊
						</Typography>
					</Fade>
				</Container>
			</div>
			<Container maxWidth={"xl"}>
				<Fade direction="up" triggerOnce>
					<Grid container spacing={2}>
						<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
							<div className={styles.aboutUsContent}>
								<img className={styles.aboutUsImage} src="static/images/about-us.svg" alt="about-us" />
							</div>
						</Grid>
						<Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
							<div className={styles.aboutUsContent}>
								<Typography variant="h5">
									Nós nos dedicamos a revolucionar o gerenciamento de bancas em opções binárias e apostas. Nosso objetivo é ajudar
									traders a recuperarem perdas e <span id="highlight">obterem lucros com apenas duas vitórias consecutivas,</span>{" "}
									oferecendo uma solução de <span id="highlight">fácil uso que não requer conhecimento técnico avançado.</span>
								</Typography>
							</div>
						</Grid>
					</Grid>
				</Fade>
			</Container>
		</div>
	);
};

export default AboutUs;
