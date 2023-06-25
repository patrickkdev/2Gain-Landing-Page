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

const faq: FAQ[] = [
	{
		question: "A 2Gain é adequada para iniciantes?",
		answer: "Sim! A 2Gain foi projetada para ser fácil de usar, não exigindo conhecimento técnico avançado.",
	},
	{
		question: "Posso usar a 2Gain com diferentes moedas?",
		answer: "Sim, a 2Gain suporta várias moedas. Basta ajustar os valores de acordo com sua preferência.",
	},
	{
		question: "Quantas perdas consecutivas posso recuperar com a 2Gain?",
		answer: "Com a 2Gain, você pode recuperar até 17 perdas consecutivas ao vencer apenas dois trades.",
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
