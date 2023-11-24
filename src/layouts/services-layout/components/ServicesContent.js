import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../utils"
import { ServiceSlider } from "./ServiceSlider"

const HomeServicesContent = () => {
	const [services, setServices] = useState([])

	const getAllServices = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/services`).then(res => setServices(res.data))

	useEffect(() => {
		getAllServices()
	}, [])

	return (
		<div className="grid items-center grid-cols-1">
			<div className="col-span-1">
				<h2 className="mb-8 text-4xl font-sansation-bold text-main-primary">Featured Services.</h2>
			</div>
			<div className="w-full overflow-hidden">
				<ServiceSlider services={services} />
			</div>
		</div>
	)
}

export default HomeServicesContent
