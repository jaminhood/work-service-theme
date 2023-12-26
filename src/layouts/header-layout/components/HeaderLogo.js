import { desktopLogo, mobileLogo } from "../../../helpers/images"
import useDeviceType from "../../../hooks/useDeviceType"
import { getURL } from "../../../utils"

const HeaderLogo = () => {
	const { isMobile } = useDeviceType()

	return (
		<span>
			<a
				href={getURL()}
				className="relative z-50">
				<img
					src={isMobile ? mobileLogo : desktopLogo}
					className="object-cover h-8"
				/>
			</a>
		</span>
	)
}

export { HeaderLogo }
