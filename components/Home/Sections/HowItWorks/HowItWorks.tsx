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
import Link from "next/link";

interface Step {
	title: string;
	description: string[];
	image: string;
}

const steps: Step[] = [
	{
		title: "Configuração",
		description: [
			"Configure seu capital inicial, escolha o número desejado de oportunidades e ajuste o payout conforme as condições da corretora. Com essas configurações, a ferramenta gera automaticamente os valores de entrada.",
		],
		image: "static/images/step1.jpg",
	},
	{
		title: "Siga as Orientações",
		description: ["Opere com a quantia indicada para cada operação. Quando a operação terminar, basta clicar nos botões de 'gain' ou 'loss' de acordo com o resultado. A ferramenta irá então, exibir o valor calculado para a próxima operação."],
		image: "static/images/step2.jpg",
	},
	{
		title: "Opere com confiança",
		description: ["Observe que ao acertar duas operações consecutivas, você não apenas recupera as perdas anteriores, mas também alcança um ganho financeiro."],
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
							
							<Typography variant={"h6"} textAlign={"left"} gutterBottom>
								A ferramenta opera ajustando gradualmente os valores de entrada, assegurando que, <span id="highlight">ao acertar duas operações</span> consecutivas, o investidor <span id="highlight">não apenas recupere as perdas anteriores, mas também alcance um ganho financeiro</span>. Esse método estabelece uma <span id="highlight">abordagem disciplinada e estratégica</span> para enfrentar desafios no dinâmico mercado de opções.
								Essa ferramenta representa uma <span id="highlight">aliada inestimável</span> para os investidores, <span id="highlight">proporcionando uma variedade de vantagens.</span> Em primeiro lugar, ela facilita uma <span id="highlight">gestão mais eficaz do capital</span>, permitindo que o usuário <span id="highlight">opere com confiança, mesmo em períodos de sequências negativas.</span> Além disso, a automação dos cálculos não apenas economiza tempo, mas também minimiza o risco de erros humanos, conferindo uma <span id="highlight">abordagem mais precisa e disciplinada.</span>
							</Typography>

							<Typography marginTop={"48px"} gutterBottom>Leia os artigos</Typography>

							<Link style={{fontSize: "0.8rem", textDecoration: "none"}} href="/blog/erros-comuns-no-trading-de-opcoes-binarias-e-como-um-gerenciamento-de-banca-solido-pode-ajudar">Erros Comuns no Trading de Opções Binárias e Como um Gerenciamento de Banca Sólido Pode Ajudar</Link>
							<Link style={{fontSize: "0.8rem", textDecoration: "none"}} href="/blog/o-cLinklculo-por-tras-do-2gain">O Cálculo por Trás do 2Gain: Compreendendo o Algoritmo</Link>
							<Link style={{fontSize: "0.8rem", textDecoration: "none"}} href="/blog/o-poder-da-disciplina-no-trading">O Poder da Disciplina no Trading</Link>
							
							<Typography variant={"h1"} fontWeight={"bold"} marginTop={"48px"}>
								Veja Passos Simples para <span id="highlight">Começar a Usar</span>
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
										<img style={{ height: "auto", width: "100%", borderRadius: "12px" }} src={step.image} alt={step.image} />
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
