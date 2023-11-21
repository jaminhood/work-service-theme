import CustomerProvider from "../../../context/customer/CustomerProvider"
import { DashboardLayout } from "../../../shared/dashboard-layout"
import { CustomerProfileRender } from "./CustomerProfileRender"
import { CustomerProfileSection } from "./CustomerProfileSection"

const CustomerProfile = () => {
	return (
		<CustomerProvider>
			<DashboardLayout
				columns={2}
				left={<CustomerProfileSection />}
				right={<CustomerProfileRender />}
			/>
		</CustomerProvider>
	)
}

export { CustomerProfile }
