import axios from "axios"
import { useEffect, useState } from "react"
import { ServiceSlider } from "./ServiceSlider"
// import { SITE_URL } from "../../../../constants"

const HomeServicesContent = () => {
	//  const [services, setServices] = useState([])

	//  const getAllServices = async () => {
	//   await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/get-all`).then((res) => {
	//    setServices(res.data)
	//   })
	//  }

	//  useEffect(async () => {
	//   await getAllServices()
	//  }, [])

	return (
		<div className="grid items-center grid-cols-1">
			<div className="col-span-1">
				<h2 className="mb-8 text-4xl font-sansation-bold text-main-primary">Featured Services.</h2>
			</div>
			<div className="w-full overflow-hidden">
				<ServiceSlider />
			</div>
		</div>
	)
}

export default HomeServicesContent
