import { CustomerDashboardContentCategories } from "./CustomerDashboardContentCategories"
import { CustomerDashboardContentNews } from "./CustomerDashboardContentNews"
import { CustomerDashboardContentServices } from "./CustomerDashboardContentServices"
import { CustomerDashboardContentTop } from "./CustomerDashboardContentTop"

const CustomerDashboardContent = () => {
	return (
		<>
			<CustomerDashboardContentTop />
			<CustomerDashboardContentCategories />
			<CustomerDashboardContentNews />
			<CustomerDashboardContentServices />
		</>
	)
}

export { CustomerDashboardContent }
