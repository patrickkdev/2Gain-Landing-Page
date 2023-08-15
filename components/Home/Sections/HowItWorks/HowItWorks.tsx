/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./HowItWorks.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fade } from "react-awesome-reveal";
import Hidden from "@mui/material/Hidden";
import { ArrowDownward } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

interface Step {
	title: string;
	description: string[];
	image: string;
}

const steps: Step[] = [
	{
		title: "Configuração",
		description: [
			"Defina seu capital, escolha o número desejado de oportunidades e ajuste o payout de acordo com a oferta da sua corretora.",
		],
		image: "static/images/step1.jpg",
	},
	{
		title: "Siga as Orientações",
		description: ["A 2Gain fornece valores de entrada precisos. Faça a entrada no mercado com a quantia sugerida para cada trade."],
		image: "static/images/step2.jpg",
	},
	{
		title: "Acompanhe seus Resultados",
		description: ["Acompanhe suas operações, clicando no botão verde para uma vitória e no botão vermelho para uma derrota."],
		image: "static/images/step3.jpg",
	},
];

const HowItWorks = () => {
	const navigateDown = () => document.querySelector("#step-0-snap")?.scrollIntoView({ behavior: "smooth" });

	const [isTitleVisible, setIsTitleVisible] = React.useState<boolean>(false);
	const [isSectionVisible, setIsSectionVisible] = React.useState<boolean[]>([]);

	const handleSectionVisibilityChange = (index: number, inView: boolean) => {
		if (inView) {
			setIsSectionVisible((prevState) => {
				const newState = [...prevState];
				newState[index] = true;
				return newState;
			});
		}
	};

	return (
		<div className={styles.howItWorksMain}>
			<section id="how-it-works-snap">
				<div className={styles.howItWorksTitle}>
					<Container maxWidth={"lg"}>
						<Fade
							childStyle={{ opacity: isTitleVisible ? 1 : 0 }}
							onVisibilityChange={(inView) => inView == true && setIsTitleVisible(inView)}
							direction="up"
							triggerOnce
							cascade>
							<Typography variant={"h1"} fontWeight={"bold"} marginBottom={"48px"}>
								Como Funciona ❓
							</Typography>
							<Typography variant={"h3"}>
								Passos Simples para <span id="highlight">Aumentar o seu Sucesso nas Operações</span>
							</Typography>
						</Fade>
						<div id="navigate-down-arrow" className={styles.navigateDown}>
							<IconButton onClick={navigateDown}>
								<ArrowDownward />
							</IconButton>
						</div>
					</Container>
				</div>
			</section>
			<Container maxWidth={"xl"}>
				{steps.map((step, index) => {
					return (
						<section key={index} id={`step-${index}-snap`}>
							<div className={styles.StepViewer}>
								<Grid spacing={2} container justifyContent="space-between">
									<Grid
										display="flex"
										marginBottom="60px"
										flexDirection="column"
										justifyContent="center"
										
										item
										xl={6}
										lg={6}
										md={6}
										sm={12}
										xs={12}>
										<Fade
											cascade
											direction="up"
											triggerOnce
											childStyle={{ opacity: isSectionVisible[index] ? 1 : 0 }}
											onVisibilityChange={(inView) => handleSectionVisibilityChange(index, inView)}>
											<Typography variant={"h2"} fontWeight="bold" marginBottom={"48px"}>
												{index + 1}. {step.title}
											</Typography>

											{step.description.map((desc, index) => (
												<ul key={index} style={{ marginLeft: "24px" }}>
													<li>
														<Typography variant={"h4"} fontWeight={"300"} gutterBottom >
															{desc}
														</Typography>
													</li>
												</ul>
											))}
										</Fade>
									</Grid>
									<Grid display="flex" flexDirection="column" justifyContent="center" item xl={6} lg={6} md={6} sm={12} xs={12}>
										<img style={{ height: "150%", borderRadius: "12px" }} src={step.image} alt={step.image} />
									</Grid>
								</Grid>
							</div>
						</section>
					);
				})}
			</Container>
		</div>
	);
};

export default HowItWorks;
