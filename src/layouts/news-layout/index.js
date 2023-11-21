import axios from "axios"
import { useEffect, useState } from "react"
// import { SITE_URL } from "../../../constants"
import Container from "../../shared/Container"
import { NewsSlider } from "./components/NewsSlider"

const NewsLayout = () => {
	//  const [news, useNews] = useState([])

	//  useEffect(async () => {
	//   await axios.get(`${SITE_URL}wp-json/ws-api/v1/news/get`).then((res) => {
	//    useNews(res.data)
	//   })
	//  }, [])

	return (
		<div className="py-20 bg-zinc-50">
			<Container>
				<div className="w-full overflow-hidden rounded-3xl">
					<NewsSlider />
				</div>
			</Container>
		</div>
	)
}

export default NewsLayout
