import { ContactCard } from "./ContactCard"
import { ContactIconWrapper } from "./ContactIconWrapper"

const ContactInfo = () => {
	const callUsData = [
		{
			info: `+234 808 3473 234`,
			iconContent: { name: "phone", width: "22px", height: "22px", fill: "#5E4A96" },
		},
		{
			info: `info@workservice.com`,
			iconContent: { name: "mail", width: "22px", height: "18px", fill: "#5E4A96" },
		},
	]

	const visitUsData = [
		{
			info: `7A, Work service road, Benin-city, Edo`,
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
				text="Our dedicated customer support team is available to assist you with any inquiries or concerns.">
				<button className="bg-[#D4CBED] text-[#5E4A96] font-jost-regular py-1 px-6 rounded-full cursor-pointer">Click here</button>
			</ContactCard>
			<ContactCard
				title="Connect with Us"
				text="Stay updated on the latest news, service additions, and more by following us on social media:">
				<div className="flex gap-4 items-center">
					<ContactIconWrapper iconContent={{ name: "whatsapp", width: "18px", height: "22px", fill: "#5E4A96" }} />
					<ContactIconWrapper iconContent={{ name: "ig", width: "18px", height: "22px", fill: "#5E4A96" }} />
					<ContactIconWrapper iconContent={{ name: "facebook", width: "18px", height: "22px", stroke: "#5E4A96" }} />
				</div>
			</ContactCard>
		</div>
	)
}

export { ContactInfo }
