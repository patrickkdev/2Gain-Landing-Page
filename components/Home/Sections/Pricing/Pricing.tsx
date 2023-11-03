import React from "react";

import styles from "./Pricing.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fade } from "react-awesome-reveal";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { KeyboardArrowRight } from "@mui/icons-material";

interface Plan {
	icon: string;
	title: string;
	features: string[];
	price: string;
	paymentFrequency?: string;
}

const plans: Plan[] = [
	// {
	// 	icon: "🥉",
	// 	title: "Periodo Gratuito",
	// 	features: [
	// 		"⚠️ Use por 2 dias",
	// 		"✅ Acesse no PC e no Celular Android",
	// 		"✅ 11 opções de perfil de gestão",
	// 		"✅ 19 opções de payout",
	// 	],
	// 	price: "GRÁTIS",
	// },
	{
		icon: "🥇",
		title: "Licença de 1 ano",
		features: [
			"✅ Garantia de 7 dias",
			"✅ Use por 1 ano",
			"✅ Acesse no PC e no celular",
			"✅ 11 opções de perfil de gestão",
			"✅ 19 opções de payout",
		],
		price: "R$ 187,00",
		paymentFrequency: "/ano em até 12x",
	},
];

const Pricing = () => {
	return (
		<div className={styles.pricingMain}>
			<div className={styles.pricingTitle}>
				<Container maxWidth={"md"}>
					<Fade direction="up" triggerOnce>
						<Typography variant={"h1"} fontWeight={"bold"} gutterBottom>
							Preço 🏷️
						</Typography>
						<Typography variant={"h5"}>
							Obtenha acesso comprando uma licença de 1 ano com 7 dias de garantia
						</Typography>
					</Fade>
				</Container>
			</div>
			<Container maxWidth={"xl"}>
				<Grid justifyContent={"center"} container spacing={2}>
					{plans.map((plan, index) => {
						return (
							<Grid item key={index} xl={4} md={6} sm={12} xs={12}>
								<Fade direction="up" delay={100 * index} triggerOnce>
									<div className={styles.pricingCard}>
										<Typography fontSize="32px" gutterBottom>
											{plan.icon}
										</Typography>
										<Typography variant="h5" fontWeight={"bold"} gutterBottom>
											{plan.title}
										</Typography>
										{plan.features.map((feature, index) => {
											return (
												<Typography key={index} gutterBottom>
													{feature}
												</Typography>
											);
										})}

										<Typography variant="h4" fontWeight={"bold"} marginY="12px">
											{plan.price}
											<span style={{ opacity: 0.6, fontSize: "20px" }}>{plan.paymentFrequency}</span>
										</Typography>
									</div>
								</Fade>
							</Grid>
						);
					})}
				</Grid>
				<Divider variant="fullWidth" sx={{ m: "24px 0px" }} />
				<div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
					<Button href={"../static/downloadable/C2Gain - Calculadora Financeira.exe"} download variant="contained">
						Baixar no Windows
					</Button>
					<Button
						href="https://2gain.netlify.app/"
						target="_blank"
						rel="noreferrer"
						variant="contained"
						endIcon={<KeyboardArrowRight sx={{ color: "white" }} />}>
						Usar na Web
					</Button>
				</div>
			</Container>
		</div>
	);
};

export default Pricing;
