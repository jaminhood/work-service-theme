import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../utils"
import { ContactCard } from "./ContactCard"
import { ContactIconWrapper } from "./ContactIconWrapper"

const ContactInfo = () => {
	const [location, setLocation] = useState(``)
	const [locationLink, setLocationLink] = useState(`#`)
	const [email, setEmail] = useState(``)
	const [facebookLink, setFacebookLink] = useState(`#`)
	const [whatsAppLink, setWhatsAppLink] = useState(`#`)
	const [phoneNumber, setPhoneNumber] = useState(``)
	const [instagramLink, setInstagramLink] = useState(`#`)

	const getAboutData = async () =>
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/contacts`).then(({ data }) => {
			if (data.length > 0) {
				setLocation(data[data.length - 1].contactLocation)
				setLocationLink(data[data.length - 1].contactLocationLink)
				setEmail(data[data.length - 1].contactMail)
				setFacebookLink(data[data.length - 1].contactFacebookLink)
				setWhatsAppLink(data[data.length - 1].contactWhatsAppLink)
				setPhoneNumber(data[data.length - 1].contactPhone)
				setInstagramLink(data[data.length - 1].contactInstagramLink)
			}
		})

	useEffect(() => {
		getAboutData()
	}, [])

	const callUsData = [
		{
			info: phoneNumber,
			link: `tel:${phoneNumber}`,
			iconContent: { name: "phone", width: "22px", height: "22px", fill: "#5E4A96" },
		},
		{
			info: email,
			link: `mailto:${email}`,
			iconContent: { name: "mail", width: "22px", height: "18px", fill: "#5E4A96" },
		},
	]

	const visitUsData = [
		{
			info: location,
			link: locationLink,
			iconContent: { name: "map-pin", width: "18px", height: "22px", stroke: "#5E4A96" },
		},
	]

	return (
		<div>
			<ContactCard
				title="Call Us"
				text="Our dedicated customer support team is available to assist you with any inquiries or concerns. Please don't hesitate to contact us via email or phone."
				iconContent={callUsData}
			/>
			<ContactCard
				title="Visit Us"
				text="If you prefer face-to-face interaction, you can visit our office. Here's where you can find us:"
				iconContent={visitUsData}
			/>
			<ContactCard
				title="Live Chat"
				text="Our dedicated customer support team is available to assist you with any inquiries or concerns."
			/>
			<ContactCard
				title="Connect with Us"
				text="Stay updated on the latest news, service additions, and more by following us on social media:">
				<div className="flex items-center gap-4">
					<a
						href={whatsAppLink}
						target="_blank"
						className="text-main-primary">
						<ContactIconWrapper iconContent={{ name: "whatsapp", width: "18px", height: "22px", fill: "#5E4A96" }} />
					</a>
					<a
						href={instagramLink}
						target="_blank"
						className="text-main-primary">
						<ContactIconWrapper iconContent={{ name: "ig", width: "18px", height: "22px", fill: "#5E4A96" }} />
					</a>
					<a
						href={facebookLink}
						target="_blank"
						className="text-main-primary">
						<ContactIconWrapper iconContent={{ name: "facebook", width: "18px", height: "22px", stroke: "#5E4A96" }} />
					</a>
				</div>
			</ContactCard>
		</div>
	)
}

export { ContactInfo }
