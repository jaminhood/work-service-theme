import axios from "axios"
import { useEffect, useState } from "react"
import Slider from "react-slick"
import { SITE_URL } from "../../../utils"
import { NewsSlide } from "./NewsSlide"

const settings = {
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
}

const NewsSlider = () => {
	const [news, setNews] = useState([])

	const fetchNews = async () => {
		try {
			const response = await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/news`)
			setNews(response.data)
		} catch (error) {
			console.error("Error fetching news:", error)
		}
	}

	useEffect(() => {
		fetchNews()
	}, [])

	return (
		<div className="w-full overflow-hidden rounded-3xl">
			<Slider {...settings}>
				{news.map(data => (
					<NewsSlide
						key={data.newsID}
						news={data}
					/>
				))}
			</Slider>
		</div>
	)
}

export { NewsSlider }
