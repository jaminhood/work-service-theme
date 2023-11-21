import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import { ServiceBox } from "./ServiceBox"

const settings = {
	dots: false,
	arrows: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 3000,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				initialSlide: 2,
			},
		},
	],
}

const ServiceSlider = () => {
	return (
		<Slider {...settings}>
			{[1, 2, 3].map(data => (
				<ServiceBox
					key={data}
					index={data}
				/>
			))}
		</Slider>
	)
}

export { ServiceSlider }
