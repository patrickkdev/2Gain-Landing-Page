/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./Testimonials.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fade } from "react-awesome-reveal";

interface Feature {
	commenterPic: string;
	comment: string;
	commenter: string;
}

const testimonials: Feature[] = [
	{
		commenterPic: "images/home/jose-commenter.jpg",
		commenter: "João Silva",
		comment:
			"Eu estava lutando para gerenciar minha banca de opções binárias até que descobri a ferramenta 2Gain. Fiquei impressionado com a facilidade de uso e o cálculo preciso dos valores das operações. Com apenas duas entradas vencedoras consecutivas, recuperei todas as oportunidades perdidas e ainda obtive um lucro significativo. Agora tenho maior confiança em minhas negociações e estou alcançando resultados consistentes. Recomendo a 2Gain para qualquer pessoa que queira melhorar seu gerenciamento de bancas.",
	},
	{
		commenterPic: "images/home/maria-commenter.jpg",
		commenter: "Maria Santos",
		comment:
			"A ferramenta 2Gain mudou completamente a maneira como eu opero opções binárias. Antes, eu estava preso em um ciclo de perdas e tinha dificuldade em recuperar meu capital. Mas com a 2Gain, pude gerenciar minhas entradas de forma inteligente e minimizar os riscos. Agora, quando acerto duas vezes seguidas, recupero todas as oportunidades perdidas e obtenho lucro adicional. Estou impressionado com a eficiência e a simplicidade da ferramenta. É um verdadeiro divisor de águas para quem busca sucesso no trading. Recomendo de olhos fechados!",
	},
];

const Testimonials = () => {
	return (
		<div className={styles.testimonialsMain}>
			<div className={styles.testimonialsTitle}>
				<Container maxWidth={"md"}>
					<Fade direction="up" triggerOnce>
						<Typography variant={"h3"} fontWeight={"bold"} gutterBottom>
							Depoimentos de nossos clientes 💬
						</Typography>
						<Typography variant={"h6"}>Aprovado por Traders de Sucesso ✅</Typography>
					</Fade>
				</Container>
			</div>

			<Container maxWidth={"xl"}>
				<Grid container spacing={2} justifyContent={"center"}>
					{testimonials.map((testimonial, index) => {
						return (
							<Grid item key={index} xl={4} md={6} sm={12} xs={12}>
								<Fade direction="up" triggerOnce delay={100 * index} className={styles.testimonialsCard}>
									<div>
										{/* <img src={testimonial.commenterPic} alt={"commenterPic"} /> */}
										<Typography fontWeight={"bold"} sx={{ mb: "24px" }}>
											{testimonial.commenter}
										</Typography>
										<Typography gutterBottom>{testimonial.comment}</Typography>
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

export default Testimonials;
