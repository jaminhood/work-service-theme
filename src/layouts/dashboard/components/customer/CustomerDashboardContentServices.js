import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../../utils"
import { ServiceSlider } from "../../../services-layout/components/ServiceSlider"
import { CustomerDashboardContentBox } from "./CustomerDashboardContentBox"

const CustomerDashboardContentServices = () => {
	const [services, setServices] = useState([])

	const getAllServices = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/services`).then(res => setServices(res.data))

	useEffect(() => {
		getAllServices()
	}, [])

	const btnAction = () => {}

	const params = { heading: `Featured Services`, btnAction, btnValue: `See More` }

	return (
		<CustomerDashboardContentBox {...params}>
			<div className="w-full overflow-hidden">
				<ServiceSlider services={services} />
			</div>
		</CustomerDashboardContentBox>
	)
}

export { CustomerDashboardContentServices }
