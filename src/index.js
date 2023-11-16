import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import pages from "./pages"
// import AboutPage from "./scripts/about-page"
import CategoryPage from "./scripts/category"
import ContactPage from "./scripts/contact-page"
import Homepage from "./scripts/home-page"
import ServicesPage from "./scripts/services-page"
import AboutSection from "./scripts/shared/about-section/index"
import FAQs from "./scripts/shared/faqs/index"
import Footer from "./scripts/shared/footer"
import Header from "./scripts/shared/header"
import Hero from "./scripts/shared/hero"

document.addEventListener("DOMContentLoaded", async function () {
	const url = window.location.href
	const nameFromURL = url.split(`/`)
	nameFromURL.pop()
	const page_name = nameFromURL.pop()

	pages()
	// if (document.querySelector("#work-service-frontend-home")) {
	//   ReactDOM.render(<Homepage />, document.querySelector("#work-service-frontend-home"))
	// }
	Homepage()
	ServicesPage()
	// AboutPage()
	ContactPage()
	CategoryPage()
	if (document.querySelector("#work-service-frontend-header")) {
		ReactDOM.render(<Header />, document.querySelector("#work-service-frontend-header"))
	}
	if (document.querySelector("#work-service-frontend-footer")) {
		ReactDOM.render(<Footer />, document.querySelector("#work-service-frontend-footer"))
	}
	if (document.querySelector("#work-service-frontend-about")) {
		ReactDOM.render(<AboutSection />, document.querySelector("#work-service-frontend-about"))
	}
	if (document.querySelector("#work-service-frontend-faqs")) {
		ReactDOM.render(<FAQs />, document.querySelector("#work-service-frontend-faqs"))
	}
	if (document.querySelector("#work-service-frontend-page-hero")) {
		ReactDOM.render(<Hero page_name={page_name} />, document.querySelector("#work-service-frontend-page-hero"))
	}
})
