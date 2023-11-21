import CustomerProvider from "../../../../context/customer/CustomerProvider"
import { DashboardLayout } from "../../../../shared/dashboard-layout"
import { CustomerBookingsContent } from "./CustomerBookingsContent"

const CustomerBookings = () => {
	return (
		<CustomerProvider>
			<DashboardLayout
				columns={1}
				center={<CustomerBookingsContent />}
			/>
		</CustomerProvider>
	)
}

export { CustomerBookings }
