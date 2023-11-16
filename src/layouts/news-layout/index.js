import axios from "axios"
import { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
// import { SITE_URL } from "../../../constants"
import banner_img from "../../assets/imgs/news-banner.png"
import Container from "../../shared/Container"

const settings = {
	dots: false,
	arrows: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
}

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
					<Slider {...settings}>
						{[1, 2, 3].map(news => (
							<div key={news}>
								<img
									src={banner_img}
									alt=""
									className="object-cover w-full"
								/>
							</div>
						))}
					</Slider>
				</div>
			</Container>
		</div>
	)
}

export default NewsLayout
