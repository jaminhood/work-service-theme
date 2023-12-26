import ThemeProvider from "../../context/theme/ThemeProvider"
import { CustomerDashboard } from "./components/customer/CustomerDashboard"
import { ExpertDashboard } from "./components/expert/ExpertDashboard"

const Dashboard = ({ account }) => {
	return (
		<ThemeProvider>
			{account === `customer` && <CustomerDashboard />}
			{account === `expert` && <ExpertDashboard />}
		</ThemeProvider>
	)
}

export { Dashboard }
