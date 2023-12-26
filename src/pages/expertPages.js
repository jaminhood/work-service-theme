import React from "react"
import ReactDOM from "react-dom"
import { Bookings } from "../layouts/bookings"
import { Chat } from "../layouts/chat"
import { Dashboard } from "../layouts/dashboard"
import { Profile } from "../layouts/profile"

const expertPages = () => {
	// globals
	let element = document.querySelector("#work-service-expert-dashboard")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Dashboard account="expert" />, element)
	}

	element = document.querySelector("#work-service-expert-bookings")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Bookings account="expert" />, element)
	}

	element = document.querySelector("#work-service-expert-chat")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Chat account="expert" />, element)
	}

	element = document.querySelector("#work-service-expert-profile")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Profile account="expert" />, element)
	}
}

export { expertPages }
