import { profilePageLinks } from "../../../utils"
import { ProfileInfo } from "./ProfileInfo"
import { ProfileSectionContainer } from "./ProfileSectionContainer"

const ProfileSection = ({ account }) => {
	return (
		<div className="">
			<ProfileInfo />
			<ProfileSectionContainer
				title="General"
				links={profilePageLinks[account].generalLinks}
			/>
			<ProfileSectionContainer
				title="Support"
				links={profilePageLinks[account].supportLinks}
			/>
		</div>
	)
}

export { ProfileSection }
