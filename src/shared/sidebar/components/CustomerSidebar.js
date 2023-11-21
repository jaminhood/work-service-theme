import { CustomerMenu } from "./CustomerMenu"
import { ProfileInfo } from "./ProfileInfo"
import { SidebarLogo } from "./SidebarLogo"

const CustomerSidebar = () => {
	return (
		<div className="w-[25rem] px-8 py-16 bg-main-primary text-zinc-50 text-center flex flex-col items-center gap-8">
			<SidebarLogo />
			<ProfileInfo />
			<CustomerMenu />
		</div>
	)
}

export { CustomerSidebar }