import { useState } from "react"
import logo from "../../../assets/imgs/word-logo-colored.png"
import { Btn } from "../../../shared/btn"
import { Icon } from "../../../shared/icon"
import { SITE_URL, headerNavBtns, headerNavLinks } from "../../../utils"
import { HeaderLogo } from "./HeaderLogo"

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toogleIsOpen = () => setIsOpen(prev => !prev)

	const handleClick = action => {
		console.log(action)
	}

	return (
		<>
			<span
				className="cursor-pointer inline-block"
				onClick={toogleIsOpen}>
				<Icon
					name="menu"
					width="20px"
					height="14px"
					fill="#EEEBF4"
				/>
			</span>
			{isOpen && (
				<nav className="fixed inset-0 flex items-center py-20 bg-[#EEEBF4] z-50 gap-8 flex-col h-screen">
					<span
						className="absolute top-8 right-8 z-50 cursor-pointer"
						onClick={toogleIsOpen}>
						<Icon
							name="close"
							width="13px"
							height="12px"
							stroke="#5E4A96"
						/>
					</span>
					<HeaderLogo logo={logo} />
					<ul className="flex flex-col items-center justify-center gap-8">
						{headerNavLinks.map(link => (
							<li key={link.path}>
								<a
									href={`${SITE_URL}${link.path}`}
									className={`font-sansation-bold capitalize text-main-primary`}>
									{link.render}.
								</a>
							</li>
						))}
					</ul>
					<ul className="flex items-center justify-center gap-8 flex-col">
						{headerNavBtns.map(link =>
							link.desktop ? (
								<li key={link.action}>
									<button
										className={`focus:outline-[0] rounded-2xl py-1 px-6 font-sansation-bold capitalize text-main-primary`}
										onClick={() => handleClick(link.action)}>
										{link.render}.
									</button>
								</li>
							) : (
								<Btn
									size="lg"
									handleClick={() => handleClick(link.action)}
									cls="bg-main-primary text-zinc-50 rounded-2xl w-80">
									{link.render}
								</Btn>
							),
						)}
					</ul>
				</nav>
			)}
		</>
	)
}

export { MobileMenu }
