import React from "react";

import styles from "./FAQ.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ExpandMore } from "@mui/icons-material";
import AccordionDetails from "@mui/material/AccordionDetails";
import { Fade } from "react-awesome-reveal";
import { CssBaseline } from "@mui/material";

interface FAQ {
	question: string;
	answer: string;
}

// Expanded FAQ based on the provided information

const faq = [
  {
    question: "Como funciona o acesso após o pagamento?",
    answer: "Após efetuar o pagamento, o acesso à ferramenta é liberado automaticamente. Basta acessar a plataforma e fornecer as informações necessárias para começar a usá-la.",
  },
  {
    question: "Como obtenho suporte?",
    answer: "Para obter suporte, você pode entrar em contato via WhatsApp botão no canto inferior direito da tela.",
  },
  {
    question: "Posso solicitar reembolso?",
    answer: "Sim, é possível solicitar reembolso nos primeiros 7 dias, caso decida desistir da compra.",
  },
  {
    question: "O que está incluído na licença de 1 ano?",
    answer: "A licença de 1 ano inclui o uso da ferramenta por esse período, acesso tanto no PC quanto no celular, 11 opções de perfil de gestão e 19 opções de payout.",
  },
  {
    question: "Qual é o custo da licença?",
    answer: "A licença de 1 ano está disponível por 12x R$ 18,77/ano.",
  },
  {
    question: "A 2Gain é adequada para iniciantes?",
    answer: "Sim! A 2Gain foi projetada para ser fácil de usar, não exigindo conhecimento técnico avançado.",
  },
  {
    question: "Posso usar a 2Gain com diferentes moedas?",
    answer: "Sim, a 2Gain pode ser usada com todas as moedas. Basta que a corretora ofereça um payout acima de 82%.",
  },
  {
    question: "Quais são os benefícios da ferramenta?",
    answer: "Eficácia da ferramenta em tornar o processo de cálculos mais fácil e livre de preocupações, permitindo maior foco, tranquilidade e precisão nas operações. Além disso, a 2Gain transformou a maneira como alguns usuários operam, ajudando-os a gerenciar suas entradas de forma inteligente e minimizar os riscos, resultando em resultados consistentes e maior confiança nas negociações.",
  },
];


const FAQ = () => {
	return (
		<div className={styles.faqMain}>
			<div className={styles.faqTitle}>
				<Container maxWidth={"md"}>
					<Fade direction="up" triggerOnce>
						<Typography variant={"h3"} fontWeight={"bold"} gutterBottom>
							Perguntas frequentes 🤔
						</Typography>
					</Fade>
				</Container>
			</div>

			<Container maxWidth={"lg"}>
				{faq.map((feature, index) => {
					return (
						<Fade direction="up" key={index} triggerOnce delay={100 * index}>
							<Accordion elevation={0} sx={{ marginBottom: "12px", border: "1px solid #ccc" }}>
								<AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
									<Typography variant="h6">{feature.question}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>{feature.answer}</Typography>
								</AccordionDetails>
							</Accordion>
						</Fade>
					);
				})}
			</Container>
		</div>
	);
};

export default FAQ;
