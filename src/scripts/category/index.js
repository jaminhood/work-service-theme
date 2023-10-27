import React from "react"
import ReactDOM from "react-dom"
import CategoryHero from "./components/category-hero"
import CategoryContainer from "./components/category-container"

const CategoryPage = () => {
 if (document.querySelector("#work-service-frontend-category-hero")) {
  ReactDOM.render(<CategoryHero />, document.querySelector("#work-service-frontend-category-hero"))
 }
 if (document.querySelector("#work-service-frontend-category-container")) {
  ReactDOM.render(<CategoryContainer />, document.querySelector("#work-service-frontend-category-container"))
 }
}

export default CategoryPage
