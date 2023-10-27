import React from "react"
import ReactDOM from "react-dom"
import ServicesHero from "./components/services-hero"
import ServicesContainer from "./components/services-container"

const ServicesPage = () => {
 if (document.querySelector("#work-service-frontend-services-hero")) {
  ReactDOM.render(<ServicesHero />, document.querySelector("#work-service-frontend-services-hero"))
 }
 if (document.querySelector("#work-service-frontend-services-container")) {
  ReactDOM.render(<ServicesContainer />, document.querySelector("#work-service-frontend-services-container"))
 }
}

export default ServicesPage
