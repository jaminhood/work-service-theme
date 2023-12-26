import useDeviceType from "../../../hooks/useDeviceType"
import Container from "../../../shared/Container"
import { DesktopMenu } from "./DesktopMenu"
import { HeaderLogo } from "./HeaderLogo"
import { MobileMenu } from "./MobileMenu"

const HeaderContent = () => {
	const { isMobile } = useDeviceType()

	return (
		<div class="absolute top-0 left-0 z-50 w-full bg-transparent text-zinc-50 flex items-center justify-center">
			<Container>
				<div class="h-20 flex justify-between items-center">
					<HeaderLogo />
					{!isMobile ? <DesktopMenu /> : <MobileMenu />}
				</div>
			</Container>
		</div>
	)
}

export { HeaderContent }
