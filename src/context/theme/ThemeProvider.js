import axios from "axios"
import { useEffect, useState } from "react"
// import { SITE_URL } from "../../constants"
import { ThemeContext } from "./ThemeContext"

const ThemeProvider = props => {
	const [openedModal, setOpenedModal] = useState(``)

	const handleOpenModal = value => setOpenedModal(value)

	const handleCloseModal = () => setOpenedModal(``)

	const providerValues = { openedModal, handleOpenModal, handleCloseModal }

	return <ThemeContext.Provider value={providerValues}>{props.children}</ThemeContext.Provider>
}

export default ThemeProvider
