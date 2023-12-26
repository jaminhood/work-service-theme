import { useEffect, useState } from "react"
import useThemeContext from "../../../../context/theme/useThemeContext"
import { Loader } from "../../../../shared/loader"
import { ServiceSlider } from "../../../services-layout/components/ServiceSlider"
import { CustomerDashboardContentBox } from "./CustomerDashboardContentBox"

const CustomerDashboardContentServices = () => {
	const { loading, getDashboardData, handleLoading } = useThemeContext()
	const [services, setServices] = useState([])

	const getData = async () => {
		handleLoading(true)
		const { allServics } = await getDashboardData()
		setServices(allServics)
		handleLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	const params = { heading: `Featured Services` }

	return (
		<>
			{loading && <Loader />}
			<CustomerDashboardContentBox {...params}>
				<div className="w-full overflow-hidden">
					<ServiceSlider services={services} />
				</div>
			</CustomerDashboardContentBox>
		</>
	)
}

export { CustomerDashboardContentServices }
