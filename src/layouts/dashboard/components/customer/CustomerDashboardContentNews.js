import { NewsSlider } from "../../../news-layout/components/NewsSlider"
import { CustomerDashboardContentBox } from "./CustomerDashboardContentBox"

const CustomerDashboardContentNews = () => {
	return (
		<CustomerDashboardContentBox heading="WS News">
			<div className="w-full overflow-hidden rounded-3xl">
				<NewsSlider />
			</div>
		</CustomerDashboardContentBox>
	)
}

export { CustomerDashboardContentNews }
