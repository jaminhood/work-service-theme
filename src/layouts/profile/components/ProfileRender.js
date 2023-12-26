import useThemeContext from "../../../context/theme/useThemeContext"
import { getURL } from "../../../utils"
import { ProfileInvite } from "./ProfileInvite"
import { ProfilePersonalData } from "./ProfilePersonalData"
import { ProfileRequestForm } from "./ProfileRequestForm"
import { ProfileRequests } from "./ProfileRequests"
import { ProfileResetPassword } from "./ProfileResetPassword"
import { ProfileSecurity } from "./ProfileSecurity"
import { ProfileSupport } from "./ProfileSupport"

const ProfileRender = () => {
	const { openedProfile, handleDeleteAccount } = useThemeContext()

	switch (openedProfile) {
		case `personal-data`:
			return <ProfilePersonalData />
		case `security`:
			return <ProfileSecurity />
		case `invite-a-friend`:
			return <ProfileInvite />
		case `reset-password`:
			return <ProfileResetPassword />
		case `my-requests`:
			return <ProfileRequests />
		case `request-form`:
			return <ProfileRequestForm />
		case `support`:
			return <ProfileSupport />
		case `faq`:
			location.replace(getURL(`contact`))
			return
		case `delete-account`:
			handleDeleteAccount()
			return
	}
}

export { ProfileRender }
