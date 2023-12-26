import { desktopLogo } from "../../../helpers/images"
import { getURL } from "../../../utils"

const FooterLogo = () => {
	return (
		<div>
			<a href={getURL()}>
				<img
					src={desktopLogo}
					className="object-cover h-8"
				/>
			</a>
		</div>
	)
}

export { FooterLogo }
