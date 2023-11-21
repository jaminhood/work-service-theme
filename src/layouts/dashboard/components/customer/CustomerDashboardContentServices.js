import { ServiceSlider } from "../../../services-layout/components/ServiceSlider"
import { CustomerDashboardContentBox } from "./CustomerDashboardContentBox"

const CustomerDashboardContentServices = () => {
	const btnAction = () => {}

	const params = { heading: `Featured Services`, btnAction, btnValue: `See More` }

	return (
		<CustomerDashboardContentBox {...params}>
			<div className="w-full overflow-hidden">
				<ServiceSlider />
			</div>
		</CustomerDashboardContentBox>
	)
}

export { CustomerDashboardContentServices }
