import React, { ReactElement } from "react";

import styles from "./ContactUs.module.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Email, Instagram, WhatsApp } from "@mui/icons-material";
import { Fade } from "react-awesome-reveal";

interface Info {
	icon: ReactElement;
	title: string;
	content: string;
}

const info: Info[] = [
	{
		icon: (
			<WhatsApp
				sx={{
					fontSize: "40px",
					marginBottom: "12px",
					color: "green",
					borderRadius: "100%",
				}}
			/>
		),
		title: "WhatsApp: ",
		content: "+55 31 9 9644 2788",
	},
	{
		icon: (
			<Email
				sx={{
					fontSize: "40px",
					marginBottom: "12px",
					color: "#FF8C00",
					borderRadius: "100%",
				}}
			/>
		),
		title: "E-mail:",
		content: "patrick8q@gmail.com",
	},
	{
		icon: (
			<Instagram
				sx={{
					fontSize: "40px",
					marginBottom: "12px",
					color: "#E1306C",
					borderRadius: "100%",
				}}
			/>
		),
		title: "Instagram:",
		content: "Em breve..",
	},
];

const ContactUs = () => {
	return (
		<div className={styles.contactUsMain}>
			<div className={styles.contactUsTitle}>
				<Container maxWidth={"md"}>
					<Fade direction="up" triggerOnce>
						<Typography variant={"h6"}>
							Se ainda tem alguma dúvida ou precisa de mais informações, entre em contato conosco!
						</Typography>
					</Fade>
				</Container>
			</div>
			<div className={styles.contactUsContent}>
				<Container maxWidth={"lg"}>
					<Grid container spacing={2} justifyContent="center">
						{info.map((feature, index) => {
							return (
								<Grid item key={index} xl={4} md={6} sm={12} xs={12}>
									<Fade direction="up" triggerOnce delay={100 * index}>
										<div className={styles.contactUsCard}>
											{feature.icon}
											<Typography fontWeight={"bold"} gutterBottom>
												{feature.title}
											</Typography>
											<Typography gutterBottom>{feature.content}</Typography>
										</div>
									</Fade>
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</div>
		</div>
	);
};

export default ContactUs;
