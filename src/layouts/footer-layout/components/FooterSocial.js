import { Icon } from "../../../shared/icon"

const FooterSocial = () => {
	return (
		<div className="flex items-center justify-center gap-4 text-zinc-50">
			<a
				href={`#`}
				target="_blank">
				<Icon
					name="map-pin"
					width="20px"
					height="26px"
					stroke="#EEEBF4"
				/>
			</a>
			<a
				href={`#`}
				target="_blank">
				<Icon
					name="mail"
					width="27px"
					height="22px"
					fill="#EEEBF4"
				/>
			</a>
			<a
				href={`#`}
				target="_blank">
				<Icon
					name="whatsapp"
					width="27px"
					height="26px"
					fill="#EEEBF4"
				/>
			</a>
			<a
				href={`#`}
				target="_blank">
				<Icon
					name="ig"
					width="27px"
					height="26px"
					fill="#EEEBF4"
				/>
			</a>
			<a
				href={`#`}
				target="_blank">
				<Icon
					name="facebook"
					width="17px"
					height="28px"
					stroke="#EEEBF4"
				/>
			</a>
		</div>
	)
}

export { FooterSocial }
