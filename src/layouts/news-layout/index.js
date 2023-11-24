import Container from "../../shared/Container"
import { NewsSlider } from "./components/NewsSlider"

const NewsLayout = () => {
	return (
		<div className="py-20 bg-zinc-50">
			<Container>
				<NewsSlider />
			</Container>
		</div>
	)
}

export default NewsLayout
