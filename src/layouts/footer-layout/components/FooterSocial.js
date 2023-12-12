import axios from "axios"
import { useEffect, useState } from "react"
import { Icon } from "../../../shared/icon"
import { SITE_URL } from "../../../utils"

const FooterSocial = () => {
	const [locationLink, setLocationLink] = useState(`#`)
	const [email, setEmail] = useState(`#`)
	const [facebookLink, setFacebookLink] = useState(`#`)
	const [whatsAppLink, setWhatsAppLink] = useState(`#`)
	const [instagramLink, setInstagramLink] = useState(`#`)

	const getData = async () =>
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/contacts`).then(({ data }) => {
			if (data.length > 0) {
				setLocationLink(data[data.length - 1].contactLocationLink)
				setEmail(data[data.length - 1].contactMail)
				setFacebookLink(data[data.length - 1].contactFacebookLink)
				setWhatsAppLink(data[data.length - 1].contactWhatsAppLink)
				setInstagramLink(data[data.length - 1].contactInstagramLink)
			}
		})

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="flex items-center justify-center gap-4 text-zinc-50">
			<a
				href={locationLink}
				target="_blank">
				<Icon
					name="map-pin"
					width="20px"
					height="26px"
					stroke="#EEEBF4"
				/>
			</a>
			<a
				href={`mailto:${email}`}
				target="_blank">
				<Icon
					name="mail"
					width="27px"
					height="22px"
					fill="#EEEBF4"
				/>
			</a>
			<a
				href={whatsAppLink}
				target="_blank">
				<Icon
					name="whatsapp"
					width="27px"
					height="26px"
					fill="#EEEBF4"
				/>
			</a>
			<a
				href={instagramLink}
				target="_blank">
				<Icon
					name="ig"
					width="27px"
					height="26px"
					fill="#EEEBF4"
				/>
			</a>
			<a
				href={facebookLink}
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
