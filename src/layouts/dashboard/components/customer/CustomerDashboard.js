import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { DashboardLayout } from "../../../../shared/dashboard-layout"
import { CustomerCategories } from "./CustomerCategories"
import { CustomerCategoriesRender } from "./CustomerCategoriesRender"
import { CustomerDashboardContent } from "./CustomerDashboardContent"

const CustomerDashboard = () => {
	const { openedCategory } = useCustomerContext()

	return openedCategory === `` ? (
		<DashboardLayout
			columns={1}
			center={<CustomerDashboardContent />}
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
