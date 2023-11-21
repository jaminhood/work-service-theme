import React from "react"
import ReactDOM from "react-dom"
import { Bookings } from "../layouts/bookings"
import { Chat } from "../layouts/chat"
import { Dashboard } from "../layouts/dashboard"
import { Profile } from "../layouts/profile"

const customerPages = () => {
	// globals
	let element = document.querySelector("#work-service-customer-dashboard")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Dashboard account="customer" />, element)
	}

	element = document.querySelector("#work-service-customer-bookings")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Bookings account="customer" />, element)
	}

	element = document.querySelector("#work-service-customer-chat")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Chat account="customer" />, element)
	}

	element = document.querySelector("#work-service-customer-profile")
	if (typeof element !== "undefined" && element !== null) {
		ReactDOM.render(<Profile account="customer" />, element)
	}
}

export { customerPages }
