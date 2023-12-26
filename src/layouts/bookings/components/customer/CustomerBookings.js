import { DashboardLayout } from "../../../../shared/dashboard-layout"
import { CustomerBookingsContent } from "./CustomerBookingsContent"

const CustomerBookings = () => {
	return (
		<DashboardLayout
			columns={1}
			center={<CustomerBookingsContent />}
		/>
	)
}

export { CustomerBookings }
