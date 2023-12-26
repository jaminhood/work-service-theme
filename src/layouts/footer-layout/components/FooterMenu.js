import useThemeContext from "../../../context/theme/useThemeContext"
import { footerNavBtns, getURL } from "../../../utils"

const FooterMenu = () => {
	const { handleOpenModal } = useThemeContext()

	const handleClick = action => {
		if (action === `terms` || action === `auth-signup`) {
			handleOpenModal(action)
		}

		if (action === `contact` || action === `faq`) {
			location.replace(getURL(action))
		}
	}

	return (
		<div className="flex gap-2 md:gap-8 items-center border-b-2 border-b-[#EEEBF4] py-4 my-4">
			{footerNavBtns.map(link => (
				<button
					key={link.action}
					className="text-[.8rem] md:text-base font-jost-regular text-zinc-300 border-0 focus:outline-[0]"
					onClick={() => handleClick(link.action)}>
					{link.render}
				</button>
			))}
		</div>
	)
}

export { FooterMenu }

