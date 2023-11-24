import { NewsSlider } from "../../../news-layout/components/NewsSlider"
import { CustomerDashboardContentBox } from "./CustomerDashboardContentBox"

const CustomerDashboardContentNews = () => {
	return (
		<CustomerDashboardContentBox heading="WS News">
			<NewsSlider />
		</CustomerDashboardContentBox>
	)
}

export { CustomerDashboardContentNews }
