import React from "react";

import styles from "./CallToAction.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import { Fade } from "react-awesome-reveal";
import ContactUs from "./ContactUs/ContactUs";
import { Download, KeyboardArrowRight } from "@mui/icons-material";
import { Typewriter } from "react-simple-typewriter";

const CallToAction = () => {
	const phrases = [
		"Desbloqueie seu Potencial de Trading Agora! \u200d🔓",
		"Assuma o Controle das suas Operações \u200d📈",
		"Baixe Gratuitamente e Impulsione seus Lucros \u200d🚀",
		"Maximize seu Sucesso no Trading \u200d💯",
		"Comece a Recuperar Perdas e Alcançar Lucros Hoje! \u200d💰",
	];

	return (
		<div className={styles.callToActionMain}>
			<div className={styles.callToActionTitle}>
				<Fade direction="up" triggerOnce>
					<Container maxWidth={"lg"}>
						<div className={styles.callToActionTitleText}>
							<Typography variant={"h1"}  fontWeight={"bold"} sx={{ mb: "24px" }}>
								<Typewriter words={phrases} loop={true} cursor={true} typeSpeed={45} deleteSpeed={35} delaySpeed={4000} />
							</Typography>
						</div>

						<div style={{ display: "flex", gap:"12px", justifyContent: "center" }}>
							<Button
								href={"../static/downloadable/2Gain - Calculadora Financeira.exe"}
								download
								variant="contained"
								size="large"
								endIcon={<Download sx={{ color: "white" }} />}>
								Baixe agora
							</Button>
							<Button
								href="https://2gain.netlify.app/"
								target="_blank"
								rel="noreferrer"
								variant="contained"
								size="large"
								endIcon={<KeyboardArrowRight sx={{ color: "white" }} />}>
								Use na Web
							</Button>
						</div>
					</Container>
				</Fade>
			</div>
			<ContactUs />
		</div>
	);
};

export default CallToAction;
