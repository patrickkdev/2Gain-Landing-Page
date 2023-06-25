import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<Button href="/" variant="text">
				<Typography variant="h1" fontWeight={"bold"} fontStyle="italic">
					2Gain
				</Typography>
			</Button>
		</div>
	);
};

export default Logo;
