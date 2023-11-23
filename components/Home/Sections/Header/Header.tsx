/* eslint-disable @next/next/no-img-element */
import React from "react";

import { ArrowDownward, Download, KeyboardArrowRight } from "@mui/icons-material";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";

import styles from "./Header.module.css";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

const Header = () => {
	const navigateDown = () => document.querySelector("#features-snap")?.scrollIntoView({ behavior: "smooth" });

	const smallScreen = useMediaQuery(useTheme().breakpoints.down("md"));

	return (
		<div>
			<div className={styles.headerMain}>
				<Container maxWidth={"lg"}>
					<div className={styles.heroArea}>
						<div className={styles.heroInfo}>
							<Typography variant="h6">
								<span id="highlight">2Gain</span>
							</Typography>
							<AvatarGroup sx={{justifyContent: "center", mt: "12px", mb: "6px"}}>
								<Avatar alt="Travis Howard" src="https://media.istockphoto.com/id/577336650/photo/african-woman-isolated-in-blue-background.jpg?s=612x612&w=0&k=20&c=9--l9bkgbIFJWil6c0QbJQHNkotcTzir4AQ4090jjRo=" />
								<Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreF5WB5EzdH1apInEFBjT7n0B1qk_Go7NMg&usqp=CAU" />
								<Avatar alt="Agnes Walker" src="https://media.istockphoto.com/id/175417835/photo/happy-man-in-casual-blue-t-shirt-isolated.jpg?s=612x612&w=0&k=20&c=Rd4aCG4sePKEp0XqMn7R68UxJJZBSiZ_7IytbNleiTc=" />
								<Avatar alt="Trevor Henderson" src="https://cms.norseprojects.com/wp-content/uploads/2023/06/NPxADIDAS-SS23-14-1280x700.jpg" />
								<Avatar alt="+" sx={{display: "flex", fontSize: "12px"}}>+863</Avatar>
							</AvatarGroup>
							<div style={{ display: "flex", gap: "12px", alignSelf: "center"}}>
								<Rating name="read-only" value={4.5} precision={0.5} readOnly sx={{alignSelf: "center", mb: "24px"}} />
								<Typography >4.36 </Typography>
							</div>
							<Typography variant="h1" fontWeight="bold" sx={{mb: "12px"}}>
								Gerenciamento de Bancas em Opções Binárias 🚀
							</Typography>
							<Typography variant="h5">
								A chave para o sucesso reside em estratégias de gerenciamento sólidas e eficazes.
								{/* <span id="highlight">se mantenha à frente da concorrência</span>. */}
							</Typography>
							<div className={styles.heroAction}>
								<Container maxWidth={"md"}>
									<Grid container spacing={"12px"}  justifyContent={"center"}>
										<Grid item  xl={6} lg={6} md={6} sm={12}>
											<Button
												href={"../static/downloadable/2Gain - Calculadora Financeira.exe"}
												download
												variant="contained"
												size="large"
												sx={{ width: "100%" }}
												endIcon={<Download sx={{ color: "white",  }} />}>
												Baixar no Windows
											</Button>
										</Grid>
										<Grid item  xl={6} lg={6} md={6} sm={12}>
											<Button
												href="https://2gain.netlify.app/"
												target="_blank"
												rel="noreferrer"
												variant="contained"
												sx={{ width: "100%"}}
												size="large"
												endIcon={<KeyboardArrowRight sx={{ color: "white" }} />}>
												Usar na Web
											</Button>
										</Grid>
									</Grid>
								</Container>
							</div>
						</div>
						<Typography textAlign={"center"} sx={{mt: "48px"}} variant="h5" gutterBottom>Exemplo Prático de Utilização</Typography>
						<div style={{ position: "relative", paddingRight: "100%", paddingBottom: "56.25%" }}>
							<iframe
								src={"https://www.youtube.com/embed/XTF_BWvg6hk"}
								title="tutorial"
								style={{ position: "absolute", top: 0, left: 0 }}
								width="100%"
								height="100%"
								allowFullScreen
							/>
						</div>
					</div>
				</Container>
			</div>

		</div>
	);
};

export default Header;
