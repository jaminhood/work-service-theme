// import axios from "axios"
// import { useEffect, useState } from "react"
import ServiceBox from "./ServiceBox"
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
			<div className="grid grid-cols-3 gap-4">
				{[1, 2, 3].map(data => (
					<ServiceBox
						key={data}
						index={data}
					/>
				))}
			</div>
		</div>
	)
}

export default HomeServicesContent
