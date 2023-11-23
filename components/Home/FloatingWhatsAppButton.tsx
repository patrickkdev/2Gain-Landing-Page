import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const FloatingWhatsAppButton = () => {
	return (
		<div style={{ pointerEvents: "none", position: "fixed", bottom: "0px", right: "0px", padding: "24px" }}>
			<IconButton
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
