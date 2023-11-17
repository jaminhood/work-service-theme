import { ContactIconWrapper } from "./ContactIconWrapper"

const ContactIconCover = ({ iconContent, info }) => {
	return (
		<p className="flex gap-4 items-center text-main-primary py-2">
			<ContactIconWrapper iconContent={iconContent} />
			<span className="font-jost-regular text-xl">{info}</span>
		</p>
	)
}

export { ContactIconCover }
