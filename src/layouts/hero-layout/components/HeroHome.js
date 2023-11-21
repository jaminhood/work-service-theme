import useDeviceType from "../../../hooks/useDeviceType"
import { heroSlides } from "../../../utils"
import { HeroContent } from "./HeroContent"
import { HeroSlider } from "./HeroSlider"

const HeroHome = () => {
	const { isMobile } = useDeviceType()
	const { desktop, mobile } = heroSlides

	return (
		<div className="relative overflow-hidden md:h-screen">
			<HeroSlider heroSlides={isMobile ? mobile : desktop} />
			<HeroContent />
		</div>
	)
}

export default HeroHome
