import { CustomerProfilePersonalData } from "./CustomerProfilePersonalData"
import { CustomerProfileRequests } from "./CustomerProfileRequests"
import { CustomerProfileResetPassword } from "./CustomerProfileResetPassword"
import { CustomerProfileSecurity } from "./CustomerProfileSecurity"

const CustomerProfileRender = () => {
	const currentProfile = ``

	switch (currentProfile) {
		case `personal-data`:
			return <CustomerProfilePersonalData />
		case `security`:
			return <CustomerProfileSecurity />
		case `reset-password`:
			return <CustomerProfileResetPassword />
		case ``:
			return <CustomerProfileRequests />
	}
}

export { CustomerProfileRender }
