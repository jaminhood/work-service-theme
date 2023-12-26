import { MenuCTA } from "./MenuCTA"
import { MenuLinks } from "./MenuLinks"

const DesktopMenu = () => {
	return (
		<nav className="flex items-center justify-center bg-transparent relative gap-8">
			<MenuLinks
				mobile={false}
				className="text-zinc-50"
			/>
			<MenuCTA
				mobile={false}
				className="border-2 border-zinc-50 text-zinc-50"
			/>
		</nav>
	)
}

export { DesktopMenu }
