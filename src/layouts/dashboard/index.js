import CustomerProvider from "../../context/customer/CustomerProvider"
import { CustomerDashboard } from "./components/customer/CustomerDashboard"

const Dashboard = ({ account }) => {
	switch (account) {
		case `customer`:
			return (
				<CustomerProvider>
					<CustomerDashboard />
				</CustomerProvider>
			)
	}
}

export { Dashboard }
