import { ProfileInfo } from "./components/ProfileInfo"
import { SidebarLogo } from "./components/SidebarLogo"
import { SidebarMenu } from "./components/SidebarMenu"

const Sidebar = ({ account }) => {
	return (
		<div className="w-[20rem] hidden px-4 py-16 bg-main-primary text-zinc-50 text-center md:flex flex-col items-center gap-8">
			<SidebarLogo />
			<ProfileInfo />
			<SidebarMenu account={account} />
		</div>
	)
}

export { Sidebar }
