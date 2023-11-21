import React from "react"
import ReactDOM from "react-dom"
import BenefitsLayout from "../layouts/benefits-layout"
import DownloadLayout from "../layouts/download-layout"
import FAQ from "../layouts/faq-layout"
import FooterLayout from "../layouts/footer-layout"
import GetInTouch from "../layouts/get-in-touch"
import HeaderLayout from "../layouts/header-layout"
import HeroLayout from "../layouts/hero-layout"
import JoinUsLayout from "../layouts/join-us-layout"
import NewsLayout from "../layouts/news-layout"
import OurStory from "../layouts/our-story"
import ServicesLayout from "../layouts/services-layout"
import TeamLayout from "../layouts/team"
import TrustedByLayout from "../layouts/trusted-by-layout"
import ValuesLayout from "../layouts/values-layout"

// Client Routes
const clientPages = () => {
	// globals
	let element = document.querySelector("#work-service-client-header")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<HeaderLayout />, element)
	}

	element = document.querySelector("#work-service-client-footer")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<FooterLayout />, element)
	}
	// homepage
	element = document.querySelector("#work-service-client-home-banner")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<HeroLayout page="home" />, element)
	}
	element = document.querySelector("#work-service-client-home-trust")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<TrustedByLayout />, element)
	}
	element = document.querySelector("#work-service-client-home-services")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<ServicesLayout />, element)
	}
	element = document.querySelector("#work-service-client-home-benefits")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<BenefitsLayout />, element)
	}
	element = document.querySelector("#work-service-client-home-news")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<NewsLayout />, element)
	}
	element = document.querySelector("#work-service-client-home-download")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<DownloadLayout />, element)
	}
	// about
	element = document.querySelector("#work-service-client-about-banner")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(
			<HeroLayout
				page="about"
				heading="About Us"
			/>,
			element,
		)
	}
	element = document.querySelector("#work-service-client-about-story")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<OurStory />, element)
	}
	element = document.querySelector("#work-service-client-about-values")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<ValuesLayout />, element)
	}
	element = document.querySelector("#work-service-client-about-team")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<TeamLayout />, element)
	}
	element = document.querySelector("#work-service-client-about-join-us")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<JoinUsLayout />, element)
	}
	// contact
	element = document.querySelector("#work-service-client-contact-banner")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(
			<HeroLayout
				page="contact"
				heading="Contact Us"
			/>,
			element,
		)
	}
	element = document.querySelector("#work-service-client-contact-get-in-touch")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<GetInTouch />, element)
	}
	if (document.querySelector("#work-service-client-contact-faq")) {
		ReactDOM.render(<FAQ />, document.querySelector("#work-service-client-contact-faq"))
	}
}

export { clientPages }
