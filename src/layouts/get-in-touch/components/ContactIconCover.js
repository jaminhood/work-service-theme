import { ContactIconWrapper } from "./ContactIconWrapper"

const ContactIconCover = ({ iconContent, info, link }) => {
	return (
		<a
			href={link}
			target="_blank"
			className="flex items-center gap-4 py-2 text-main-primary">
			<ContactIconWrapper iconContent={iconContent} />
			<span className="text-xl font-jost-regular">{info}</span>
		</a>
	)
}

export { ContactIconCover }
