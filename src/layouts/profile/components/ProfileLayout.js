import { DashboardLayout } from "../../../shared/dashboard-layout"
import { ProfileRender } from "./ProfileRender"
import { ProfileSection } from "./ProfileSection"

const ProfileLayout = ({ account }) => {
	return (
		<DashboardLayout
			columns={2}
			left={<ProfileSection account={account} />}
			right={<ProfileRender />}
		/>
	)
}

export { ProfileLayout }
