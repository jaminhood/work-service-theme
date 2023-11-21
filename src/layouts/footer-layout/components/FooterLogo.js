import logo from "../../../assets/imgs/word-logo.png"
import { SITE_URL } from "../../../utils"

const FooterLogo = () => {
	return (
		<div>
			<a href={SITE_URL}>
				<img
					src={logo}
					className="object-cover h-12"
				/>
			</a>
		</div>
	)
}

export { FooterLogo }
