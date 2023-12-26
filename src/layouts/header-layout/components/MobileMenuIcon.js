import { Icon } from "../../../shared/icon"
import { iconData, spanClassNames } from "../constants"

const MobileMenuIcon = ({ name, onClick }) => {
	return (
		<>
			<span
				className={`cursor-pointer ${spanClassNames[name]}`}
				onClick={onClick}>
				<Icon {...iconData[name]} />
			</span>
		</>
	)
}

export { MobileMenuIcon }
