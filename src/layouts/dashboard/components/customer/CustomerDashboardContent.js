import { CustomerDashboardContentCategories } from "./CustomerDashboardContentCategories"
import { CustomerDashboardContentDownload } from "./CustomerDashboardContentDownload"
import { CustomerDashboardContentNews } from "./CustomerDashboardContentNews"
import { CustomerDashboardContentServices } from "./CustomerDashboardContentServices"
import { CustomerDashboardContentTop } from "./CustomerDashboardContentTop"
import { CustomerDashboardContentTopMobile } from "./CustomerDashboardContentTopMobile"

const CustomerDashboardContent = () => {
	return (
		<>
			<CustomerDashboardContentTopMobile />
			<CustomerDashboardContentTop />
			<CustomerDashboardContentCategories />
			<CustomerDashboardContentNews />
			<CustomerDashboardContentServices />
			<CustomerDashboardContentDownload />
		</>
	)
}

export { CustomerDashboardContent }
