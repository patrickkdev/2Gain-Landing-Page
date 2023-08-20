/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./Testimonials.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Fade } from "react-awesome-reveal";
import Rating from "@mui/material/Rating";
import Avatar from "@mui/material/Avatar";
import { AvatarGroup } from "@mui/material";

interface Feature {
	commenterPic: string;
	comment: string;
	commenter: string;
}

const testimonials: Feature[] = [
	{
		commenterPic: "https://endeavor.org.br/wp-content/uploads/2020/09/novo-ee-robson-privado-madeiramadeira.png",
		commenter: "Robson",
		comment:
			"Infalível e livre de preocupações na hora de fazer cálculos, com a tranquilidade de saber que basta acertar duas operações em sequência para atingir o lucro do perfil escolhido. Para mim, essa ferramenta transformou tudo completamente, deu uma guinada completa. Não preciso mais me preocupar com o valor de cada entrada. Apenas me concentro em acertar a segunda operação após a primeira e pronto. Opero com maior foco, tranquilidade e precisão. Até o aplicativo tem sido extremamente útil nesse sentido, me levando a ser mais cauteloso e preciso a cada operação. De certa forma, essa ferramenta nos incentiva e nos ensina a operar cada vez melhor.",
	},
	{
		commenterPic: "https://media.istockphoto.com/id/175417835/photo/happy-man-in-casual-blue-t-shirt-isolated.jpg?s=612x612&w=0&k=20&c=Rd4aCG4sePKEp0XqMn7R68UxJJZBSiZ_7IytbNleiTc=",
		commenter: "Eduardo",
		comment:
			"Eu estava lutando para gerenciar minha banca de opções binárias até que descobri a ferramenta 2Gain. Fiquei impressionado com a facilidade de uso e o cálculo preciso dos valores das operações. Com apenas duas entradas vencedoras consecutivas, recuperei todas as oportunidades perdidas e ainda obtive um lucro significativo. Agora tenho maior confiança em minhas negociações e estou alcançando resultados consistentes. Recomendo a 2Gain para qualquer pessoa que queira melhorar seu gerenciamento de bancas.",
	},
	{
		commenterPic: "https://media.istockphoto.com/id/577336650/photo/african-woman-isolated-in-blue-background.jpg?s=612x612&w=0&k=20&c=9--l9bkgbIFJWil6c0QbJQHNkotcTzir4AQ4090jjRo=",
		commenter: "Paula",
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
						<Typography variant={"h1"} fontWeight={"bold"} gutterBottom>
							Depoimentos de nossos clientes 💬
						</Typography>
						<Typography variant={"h5"}>Aprovado por Traders de Sucesso ✅</Typography>
					</Fade>
				</Container>
			</div>

			<Container maxWidth={"lg"}>
				<Grid container spacing={2} justifyContent={"center"}>
					{testimonials.map((testimonial, index) => {
						return (
							<Grid item key={index} sm={6} xs={12}>
								<Fade direction="up" triggerOnce delay={100 * index} className={styles.testimonialsCard}>
									<div>

										<div style={{display: "flex", gap: "12px", alignItems: "center"}}>											
											<Avatar src={testimonial.commenterPic}/>
											<Typography fontWeight={"bold"} gutterBottom textAlign={"left"}>
												{testimonial.commenter}
											</Typography>
											
										</div>
										<Rating name="read-only" value={5} readOnly sx={{marginBottom: "24px", justifySelf: "left"}}/>
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
