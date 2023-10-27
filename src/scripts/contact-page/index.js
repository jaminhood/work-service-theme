import React from "react"
import ReactDOM from "react-dom"
import ContactHero from "./components/contact-hero"
import ContactContainer from "./components/contact-container"

const ContactPage = () => {
 if (document.querySelector("#work-service-frontend-contact-hero")) {
  ReactDOM.render(<ContactHero />, document.querySelector("#work-service-frontend-contact-hero"))
 }
 if (document.querySelector("#work-service-frontend-contact-container")) {
  ReactDOM.render(<ContactContainer />, document.querySelector("#work-service-frontend-contact-container"))
 }
}

export default ContactPage
