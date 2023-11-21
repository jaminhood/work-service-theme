import useThemeContext from "../../../context/theme/useThemeContext"
import { SITE_URL, footerNavBtns } from "../../../utils"

const FooterMenu = () => {
	const { handleOpenModal } = useThemeContext()

	const handleClick = action => {
		if (action === `terms` || action === `auth-signup`) {
			handleOpenModal(action)
		}

		if (action === `contact`) {
			location.replace(`${SITE_URL}/${action}`)
		}

		if (action === `faq`) {
			location.replace(`${SITE_URL}/contact#${action}`)
		}
	}

	return (
		<div className="flex gap-4 md:gap-8 items-center border-b-2 border-b-[#EEEBF4] py-4 my-4">
			{footerNavBtns.map(link => (
				<button
					key={link.action}
					className="text-sm md:text-base font-jost-regular text-zinc-300 border-0 focus:outline-[0]"
					onClick={() => handleClick(link.action)}>
					{link.render}
				</button>
			))}
		</div>
	)
}

export { FooterMenu }
