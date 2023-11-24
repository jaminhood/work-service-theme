import Slider from "react-slick"
import { ServiceBox } from "./ServiceBox"

const settings = {
	dots: false,
	arrows: false,
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

const ServiceSlider = ({ services }) => {
	return services.length > 2 ? (
		<Slider {...settings}>
			{services.map((service, idx) => (
				<div key={service.serviceID}>
					<ServiceBox
						service={service}
						index={idx}
					/>
				</div>
			))}
		</Slider>
	) : (
		<div className="grid grid-cols-2 gap-8">
			{services.map((service, idx) => (
				<div key={service.serviceID}>
					<ServiceBox
						service={service}
						index={idx}
					/>
				</div>
			))}
		</div>
	)
}

export { ServiceSlider }
