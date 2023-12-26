import { heroSlides } from "../../../helpers/images"
import useDeviceType from "../../../hooks/useDeviceType"
import { HeroContent } from "./HeroContent"
import { HeroSlider } from "./HeroSlider"

const HeroHome = () => {
	const { isMobile } = useDeviceType()
	const { desktop, mobile } = heroSlides

	return (
		<div className="relative h-screen overflow-hidden">
			<HeroSlider heroSlides={isMobile ? mobile : desktop} />
			<HeroContent />
		</div>
	)
}

export default HeroHome
