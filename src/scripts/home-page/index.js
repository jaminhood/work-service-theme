import React from "react"
import ReactDOM from "react-dom"
import HomeHero from "./components/home-hero"
import HomeSubCategories from "./components/home-sub-categories"
import HomeServices from "./components/home-services"
import HomeTrusted from "./components/home-trusted"
import HomeNews from "./components/home-news"
import HomeBenefits from "./components/home-benefits"

const Homepage = () => {
 if (document.querySelector("#work-service-frontend-hero")) {
  ReactDOM.render(<HomeHero />, document.querySelector("#work-service-frontend-hero"))
 }
 if (document.querySelector("#work-service-frontend-home-trusted")) {
  ReactDOM.render(<HomeTrusted />, document.querySelector("#work-service-frontend-home-trusted"))
 }
 if (document.querySelector("#work-service-frontend-home-services")) {
  ReactDOM.render(<HomeServices />, document.querySelector("#work-service-frontend-home-services"))
 }
 if (document.querySelector("#work-service-frontend-home-benefits")) {
  ReactDOM.render(<HomeBenefits />, document.querySelector("#work-service-frontend-home-benefits"))
 }
 if (document.querySelector("#work-service-frontend-home-sub-categories")) {
  ReactDOM.render(<HomeSubCategories />, document.querySelector("#work-service-frontend-home-sub-categories"))
 }
 if (document.querySelector("#work-service-frontend-home-news")) {
  ReactDOM.render(<HomeNews />, document.querySelector("#work-service-frontend-home-news"))
 }
}

export default Homepage
