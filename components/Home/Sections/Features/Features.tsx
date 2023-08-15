import React from "react";

import styles from "./Features.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fade } from "react-awesome-reveal";

interface Feature {
	title: string;
	subtitle: string;
}

const features: Feature[] = [
	// {
	// 	title: "🍴 Personalize sua página de cardápio",
	// 	subtitle:
	// 		"Personalize sua página de cardápio com facilidade, adicionando imagens, descrições e preços dos pratos. Facilite a vida dos seus clientes, permitindo que eles escolham e façam pedidos diretamente do site.",
	// },

	// {
	// 	title: "📊 Relatórios Financeiros e Análises",
	// 	subtitle:
	// 		"Veja relatórios financeiros e análises completas sobre o desempenho do seu negócio. Monitore suas vendas, lucro e despesas, e tome decisões estratégicas.",
	// },
	// {
	// 	title: "📈 Gerenciamento de Estoque",
	// 	subtitle:
	// 		"Gerencie seu estoque com eficiência, com nossa plataforma, você pode monitorar o estoque atual, ver o histórico de pedidos e fazer pedidos de fornecedores facilmente.",
	// },
	// {
	// 	title: "💬 Chat ao vivo com o cliente",
	// 	subtitle:
	// 		"Mantenha seus clientes satisfeitos, oferecendo um chat em tempo real para que eles possam fazer perguntas ou resolver problemas de forma rápida e fácil",
	// },

	// Considerar // {
	// Considerar // 	title: "🍴 Gerenciamento de cardápio",
	// Considerar // 	subtitle:
	// Considerar // 		"Adicione, edite e remova itens do seu cardápio com facilidade, permitindo que seus clientes vejam informações atualizadas sobre seus produtos.",
	// Considerar // },

	{
		title: "✅ Valores de Entrada Precisos",
		subtitle:
			"Obtenha valores precisos para cada operação, recuperando perdas e alcançando lucros com apenas duas vitórias consecutivas.",
	},
	{
		title: "✅ Perfis Personalizados",
		subtitle:
			"Escolha um perfil que esteja alinhado com suas metas e saldo disponível, seguindo as orientações da ferramenta para cada entrada no mercado.",
	},
	
];

const Features = () => {
	return (
		<div className={styles.featuresMain}>
			<div className={styles.featuresTitle}>
				<Container maxWidth={"md"}>
					<Fade direction="up" triggerOnce >
						<Typography variant={"h1"} fontWeight={"bold"} gutterBottom>
							Tenha o Controle das suas Operações com Estes Recursos ⚙️
						</Typography>
						
					</Fade>
				</Container>
			</div>

			<Container maxWidth={"xl"}>
				<Grid justifyContent={"space-evenly"} container spacing={4}>
					{features.map((feature, index) => {
						return (
							<Grid item key={index} xl={4} lg={4} md={4} sm={6} xs={12}>
								<Fade direction="up" style={{ height: "100%" }} triggerOnce delay={100 * index}>
									<div className={styles.featureCard}>
										<Typography variant={"h4"} fontWeight={"bold"} marginBottom={"48px"}>
											{feature.title}
										</Typography>
										<Typography variant="h6" gutterBottom>{feature.subtitle}</Typography>
									</div>
								</Fade>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</div>
	);
};

export default Features;
