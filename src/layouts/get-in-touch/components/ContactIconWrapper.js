import { Icon } from "../../../shared/icon"

const ContactIconWrapper = ({ iconContent }) => {
	return (
		<span className="w-12 h-12 inline-flex justify-center items-center rounded-full overflow-hidden bg-[#D4CBED]">
			<Icon {...iconContent} />
		</span>
	)
}

export { ContactIconWrapper }
