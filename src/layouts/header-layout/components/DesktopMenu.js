import useThemeContext from "../../../context/theme/useThemeContext"
import { SITE_URL, headerNavBtns, headerNavLinks } from "../../../utils"

const DesktopMenu = () => {
	const { handleOpenModal } = useThemeContext()

	const handleClick = action => handleOpenModal(action)

	return (
		<nav className="flex items-center justify-center bg-transparent relative gap-8">
			<ul className="flex items-center justify-center gap-8">
				{headerNavLinks.map(link => (
					<li key={link.path}>
						<a
							href={`${SITE_URL}${link.path}`}
							className={`font-sansation-bold capitalize text-zinc-50`}>
							{link.render}.
						</a>
					</li>
				))}
			</ul>
			<ul className="flex items-center justify-center gap-8">
				{headerNavBtns.map(
					link =>
						link.desktop && (
							<li key={link.action}>
								<button
									className={`focus:outline-[0] border-2 border-zinc-50 rounded-2xl py-1 px-6 font-sansation-bold capitalize text-zinc-50`}
									onClick={() => handleClick(link.action)}>
									{link.render}.
								</button>
							</li>
						),
				)}
			</ul>
		</nav>
	)
}

export { DesktopMenu }
