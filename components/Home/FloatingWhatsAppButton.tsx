import { gtag_report_conversion } from "@/lib/gtag";
import { ArrowForward, ChevronRight, WhatsApp } from "@mui/icons-material";
import { Card, IconButton, Typography } from "@mui/material";
import React from "react";

const FloatingWhatsAppButton = () => {
	return (
		<div style={{ pointerEvents: "none", position: "fixed", bottom: "0px", right: "0px", padding: "24px", display: "flex", gap: "12px", justifyContent: "center", alignItems: "center" }}>
			<Card elevation={5} sx={{padding: "2px 8px", opacity: 0.8, backdropFilter: "blur(8px)"}}>
				<Typography variant="h6">Peça um teste grátis </Typography>
			</Card>
			<ArrowForward />
			<IconButton
				onClick={() => {
					gtag_report_conversion(window.location.href, "7wR9CKGn4foYEJDvlcgq");
				}}
				rel="noreferrer"
				target="_blank"
				href={"https://wa.me/5531996442788"}
				color="success"
				sx={{
					"&:hover": {
						backgroundColor: "success.dark",
					},
					backgroundColor: "success.main",
					pointerEvents: "all",
					height: "60px",
					width: "60px",
				}}>
				<WhatsApp sx={{ fontSize: "32px", color: "white" }} />
			</IconButton>
		</div>
	);
};

export default FloatingWhatsAppButton;
