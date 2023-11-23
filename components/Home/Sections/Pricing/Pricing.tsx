import React from "react";

import styles from "./Pricing.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fade } from "react-awesome-reveal";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { KeyboardArrowRight } from "@mui/icons-material";
import { gtag_report_conversion } from "@/lib/gtag";

interface Plan {
	icon: string;
	title: string;
	features: string[];
	price: string;
	paymentFrequency: string;
	installmentPrice: string;
	maxInstallments: number;
	purchaseLink: string;
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
		installmentPrice: "R$ 18,77",
		maxInstallments: 12,
		paymentFrequency: "ano",
		purchaseLink: "https://pay.kiwify.com.br/lyHcuQn"
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
										<Typography variant="h1" gutterBottom>
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

										<Typography marginY="12px">
											Apenas 
										</Typography>
										<Typography variant="h1" fontWeight={"bold"}>
											<span style={{ opacity: 0.6, fontSize: "16px" }}>{plan.maxInstallments}x </span>
											{plan.installmentPrice}
											<span style={{ opacity: 0.6, fontSize: "16px" }}>/{plan.paymentFrequency}</span>
										</Typography>

										<Divider variant="fullWidth" sx={{ m: "12px 0px" }} />
										<Button
											variant="contained"
											size="large"
											fullWidth
											onClick={() => {
												gtag_report_conversion(plan.purchaseLink);
											}}
											href={plan.purchaseLink}
											target="_blank"
											rel="noreferrer"
											endIcon={<KeyboardArrowRight />}
										>
											EU QUERO
										</Button>
									</div>
								</Fade>
							</Grid>
						);
					})}
				</Grid>
				<Container maxWidth="md" sx={{ mt: "24px", padding: 0 }}>
					<Fade direction="up" triggerOnce delay={100 * (plans.length + 2)}	>
						<div className={styles.pricingCard}>
						<Typography sx={{fontSize: "1px", mb: "12px"}} textAlign={"center"}>Após efetuar o pagamento, o acesso à ferramenta é liberado automaticamente. Basta acessar a plataforma e fornecer as informações necessárias para começar a usá-la.</Typography>
							<Typography sx={{fontSize: "1px"}} textAlign={"center"}>Contate-nos para mais informações através do <a target="_blank" rel="noreferrer" href={`https://wa.me/${55319964442788}`}>WhatsApp</a></Typography>
						</div>
					</Fade>
				</Container>
			</Container>
		</div>
	);
};

export default Pricing;
