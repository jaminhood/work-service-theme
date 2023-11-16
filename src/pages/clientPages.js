import React from "react"
import ReactDOM from "react-dom"
import BenefitsLayout from "../layouts/benefits-layout"
import DownloadLayout from "../layouts/download-layout"
import HeaderLayout from "../layouts/header-layout"
import HeroLayout from "../layouts/hero-layout"
import NewsLayout from "../layouts/news-layout"
import ServicesLayout from "../layouts/services-layout"
import TrustedByLayout from "../layouts/trusted-by-layout"

// Client Routes
const clientPages = () => {
	// globals
	let element = document.querySelector("#work-service-client-header")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<HeaderLayout />, element)
	}

	element = document.querySelector("#work-service-client-page-banner")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<HeroLayout />, element)
	}

	if (document.querySelector("#work-service-client-footer")) {
		ReactDOM.render("", document.querySelector("#work-service-client-footer"))
	}
	// homepage
	element = document.querySelector("#work-service-client-home-banner")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<HeroLayout />, element)
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
	if (document.querySelector("#work-service-client-about-story")) {
		ReactDOM.render("", document.querySelector("#work-service-client-about-story"))
	}
	if (document.querySelector("#work-service-client-about-values")) {
		ReactDOM.render("", document.querySelector("#work-service-client-about-values"))
	}
	if (document.querySelector("#work-service-client-about-team")) {
		ReactDOM.render("", document.querySelector("#work-service-client-about-team"))
	}
	if (document.querySelector("#work-service-client-about-join-us")) {
		ReactDOM.render("", document.querySelector("#work-service-client-about-join-us"))
	}
	// contact
	if (document.querySelector("#work-service-client-contact-get-in-touch")) {
		ReactDOM.render("", document.querySelector("#work-service-client-contact-get-in-touch"))
	}
	if (document.querySelector("#work-service-client-contact-faq")) {
		ReactDOM.render("", document.querySelector("#work-service-client-contact-faq"))
	}
}

export default clientPages
