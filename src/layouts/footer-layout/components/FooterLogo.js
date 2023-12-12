import logo from "../../../assets/imgs/word-logo.png"
import { SITE_URL } from "../../../utils"

const FooterLogo = () => {
	return (
		<div>
			<a href={SITE_URL}>
				<img
					src={logo}
					className="object-cover h-8"
				/>
			</a>
		</div>
	)
}

export { FooterLogo }
