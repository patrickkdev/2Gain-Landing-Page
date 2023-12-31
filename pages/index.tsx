import Head from "next/head";
import React from "react";

import Header from "@/components/Home/Sections/Header/Header";
import Features from "@/components/Home/Sections/Features/Features";
import AboutUs from "@/components/Home/Sections/AboutUs/AboutUs";
import HowItWorks from "@/components/Home/Sections/HowItWorks/HowItWorks";
import Pricing from "@/components/Home/Sections/Pricing/Pricing";
import Testimonials from "@/components/Home/Sections/Testimonials/Testimonials";
import FAQ from "@/components/Home/Sections/FAQ/FAQ";

import FloatingWhatsAppButton from "@/components/Home/FloatingWhatsAppButton";
import CallToAction from "@/components/Home/Sections/CallToAction/CallToAction";

import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Home/Navbar/Navbar";
import { useRouter } from "next/router";
import scrollTo from "@/utils/scroll-to";

export default function Home() {

	const { section } = useRouter().query;

	React.useEffect(() => {
		if (section) {
			scrollTo(`#${section}`);
		}
	}, [section])

	return (
		<>
			<div className={"indexPage"}>
				<main>
					<div id="snap-container" className={styles.homeMain}>
						<section id="header-snap">
							<Navbar />
							<Header />
						</section>
						{/* <section id="features-snap">
							<Features />
						</section> */}
						<HowItWorks />
						<section id="pricing-snap">
							<Pricing />
						</section>
						<section id="aboutUs-snap">
							<AboutUs />
						</section>
						<section id="testimonials-snap">
							<Testimonials />
						</section>
						<section id="faq-snap">
							<FAQ />
						</section>
						<section id="cto-snap">
							<CallToAction />
						</section>
						<FloatingWhatsAppButton />
					</div>
				</main>
			</div>
		</>
	);
}
