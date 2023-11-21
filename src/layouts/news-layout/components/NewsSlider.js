import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { NewsSlide } from "./NewsSlide"

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

const NewsSlider = () => {
	return (
		<Slider {...settings}>
			{[1, 2, 3].map(news => (
				<NewsSlide key={news} />
			))}
		</Slider>
	)
}

export { NewsSlider }
