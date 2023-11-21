import useCustomerContext from "../../../../context/customer/useCustomerContext"
import useDeviceType from "../../../../hooks/useDeviceType"
import { DashboardLayout } from "../../../../shared/dashboard-layout"
import { CustomerCategories } from "./CustomerCategories"
import { CustomerCategoriesRender } from "./CustomerCategoriesRender"
import { CustomerDashboardContent } from "./CustomerDashboardContent"

const CustomerDashboard = () => {
	const { openedCategory } = useCustomerContext()
	const { isMobile } = useDeviceType()

	return openedCategory === `` ? (
		<DashboardLayout
			columns={1}
			center={<CustomerDashboardContent />}
		/>
	) : isMobile ? (
		<DashboardLayout
			columns={1}
			center={<CustomerCategoriesRender />}
		/>
	) : (
		<DashboardLayout
			columns={2}
			left={<CustomerCategories />}
			right={<CustomerCategoriesRender />}
		/>
	)
}

export { CustomerDashboard }
