import { SITE_URL } from "../../../utils"

const HeaderLogo = ({ logo }) => {
	return (
		<span>
			<a
				href={SITE_URL}
				className="relative z-50">
				<img
					src={logo}
					className="object-cover h-8"
				/>
			</a>
		</span>
	)
}

export { HeaderLogo }
