import axios from "axios"
import { useEffect, useState } from "react"
// import { SITE_URL } from "../../constants"
import { Sidebar } from "../../shared/sidebar"
import { CustomerContext } from "./CustomerContext"

const CustomerProvider = props => {
	const [openedCategory, setOpenedCategory] = useState(``)

	const handleOpenCategory = value => setOpenedCategory(value)

	const handleCloseCategory = () => setOpenedCategory(``)

	const providerValues = { openedCategory, handleOpenCategory, handleCloseCategory }

	return (
		<CustomerContext.Provider value={providerValues}>
			<div className="flex h-screen">
				<Sidebar account="customer" />
				<div className="w-full md:w-[calc(100%-25rem)] h-screen">{props.children}</div>
			</div>
		</CustomerContext.Provider>
	)
}

export default CustomerProvider
