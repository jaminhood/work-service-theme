import Slider from "react-slick"
import { ServiceBoxSquare } from "./ServiceBoxSquare"

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
			},
		},
	],
}

const ServiceSlider = ({ services }) => {
	return services.length > 2 ? (
		<Slider {...settings}>
			{services.map(service => (
				<ServiceBoxSquare
					service={service}
					key={service.serviceID}
				/>
			))}
		</Slider>
	) : (
		<div className="grid grid-cols-2 gap-8">
			{services.map(service => (
				<div key={service.serviceID}>
					<ServiceBoxSquare service={service} />
				</div>
			))}
		</div>
	)
}

export { ServiceSlider }
