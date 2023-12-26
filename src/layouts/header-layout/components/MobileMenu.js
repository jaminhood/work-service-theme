import { useState } from "react"
import { mobileMenuLogo } from "../../../helpers/images"
import { HeaderLogo } from "./HeaderLogo"
import { MenuCTA } from "./MenuCTA"
import { MenuLinks } from "./MenuLinks"
import { MobileMenuIcon } from "./MobileMenuIcon"

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toogleIsOpen = () => setIsOpen(prev => !prev)

	return (
		<>
			<MobileMenuIcon
				name="menu"
				onClick={toogleIsOpen}
			/>
			{isOpen && (
				<nav className="fixed left-1/3 top-0 right-0 bottom-0 flex items-center py-20 bg-[#EEEBF4] z-50 gap-8 flex-col h-screen">
					<MobileMenuIcon
						name="close"
						onClick={toogleIsOpen}
					/>
					<HeaderLogo logo={mobileMenuLogo} />
					<MenuLinks
						mobile={true}
						className="text-main-primary"
					/>
					<MenuCTA
						mobile={true}
						className="text-main-primary"
					/>
				</nav>
			)}
		</>
	)
}

export { MobileMenu }
