import useCustomerContext from "../../../context/customer/useCustomerContext"
import { SITE_URL } from "../../../utils"
import { CustomerProfilePersonalData } from "./CustomerProfilePersonalData"
import { CustomerProfileRequestForm } from "./CustomerProfileRequestForm"
import { CustomerProfileRequests } from "./CustomerProfileRequests"
import { CustomerProfileResetPassword } from "./CustomerProfileResetPassword"
import { CustomerProfileSecurity } from "./CustomerProfileSecurity"
import { CustomerProfileSupport } from "./CustomerProfileSupport"

const CustomerProfileRender = () => {
	const { openedProfile } = useCustomerContext()

	switch (openedProfile) {
		case `personal-data`:
			return <CustomerProfilePersonalData />
		case `security`:
			return <CustomerProfileSecurity />
		case `reset-password`:
			return <CustomerProfileResetPassword />
		case `my-requests`:
			return <CustomerProfileRequests />
		case `request-form`:
			return <CustomerProfileRequestForm />
		case `support`:
			return <CustomerProfileSupport />
		case `faq`:
			location.replace(`${SITE_URL}/contact`)
			return
	}
}

export { CustomerProfileRender }
