import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { headerNavBtns } from "../../../utils"

const MenuCTA = ({ className, mobile }) => {
	const { handleOpenModal } = useThemeContext()

	return (
		<ul className={`flex items-center justify-center gap-8 ${mobile ? `flex-col` : ``}`}>
			{headerNavBtns.map(link => {
				return (
					<>
						{link.desktop && (
							<li key={link.action}>
								<button
									className={`focus:outline-[0] rounded-2xl py-1 px-6 font-sansation-bold capitalize ${className}`}
									onClick={() => handleOpenModal(link.action)}>
									{link.render}
								</button>
							</li>
						)}
						{!link.desktop && mobile && (
							<Btn
								size="lg"
								handleClick={() => handleOpenModal(link.action)}
								cls="bg-main-primary text-zinc-50 rounded-2xl w-40">
								{link.render}
							</Btn>
						)}
					</>
				)
			})}
		</ul>
	)
}

export { MenuCTA }
