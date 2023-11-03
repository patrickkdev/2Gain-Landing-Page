import React from "react";

import styles from "./Navbar.module.css";
import Logo from "@/components/Logo";
import Button from "@mui/material/Button";
import { Download, KeyboardArrowRight } from "@mui/icons-material";
import Divider from "@mui/material/Divider";

import useMediaQuery from "@mui/material/useMediaQuery";

import { useTheme } from "@mui/material/styles";

const Navbar = () => {
	const scrollIntoView = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

	const smallScreen = useMediaQuery(useTheme().breakpoints.down("md"));

	return (
		<div className={styles.NavbarSpace}>
			<div className={styles.Navbar}>
				<div className={styles.ItemContainer}>
					<div id="left-items">
						<Logo />
					</div>
					<div id="right-items" className={styles.RightItems}>
						{!smallScreen && (
							<>
								<div id="navigation">
									<Button sx={{ color: "white" }} onClick={() => scrollIntoView("#how-it-works-snap")} variant="text">
										Como funciona
									</Button>
									<Button sx={{ color: "white" }} onClick={() => scrollIntoView("#pricing-snap")} variant="text">
										Preços
									</Button>
									<Button sx={{ color: "white" }} onClick={() => scrollIntoView("#faq-snap")} variant="text">
										FAQ
									</Button>
								</div>
								<Divider orientation="vertical" sx={{ borderColor: "white" }} />
							</>
						)}
						<Button
							href={"../static/downloadable/2Gain Install.exe"}
							download
							variant="contained"
							size="large"
							sx={{ marginRight: "6px" }}
							endIcon={<Download sx={{ color: "white" }} />}>
							Baixar no Windows
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
