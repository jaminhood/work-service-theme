import React from "react"
import ReactDOM from "react-dom"
import AboutHero from "./components/about-hero"
import AboutTeam from "./components/about-team"
import AboutStmt from "./components/about-stmt"

const AboutPage = () => {
 if (document.querySelector("#work-service-frontend-about-hero")) {
  ReactDOM.render(<AboutHero />, document.querySelector("#work-service-frontend-about-hero"))
 }
 if (document.querySelector("#work-service-frontend-about-stmt")) {
  ReactDOM.render(<AboutStmt />, document.querySelector("#work-service-frontend-about-stmt"))
 }
 if (document.querySelector("#work-service-frontend-about-team")) {
  ReactDOM.render(<AboutTeam />, document.querySelector("#work-service-frontend-about-team"))
 }
}

export default AboutPage
