import useCustomerContext from "../../../../context/customer/useCustomerContext"
import useDeviceType from "../../../../hooks/useDeviceType"
import { ProfileRequestForm } from "../../../profile/components/ProfileRequestForm"
import { CustomerCategories } from "./CustomerCategories"
import { CustomerCategoriesAddressForm } from "./CustomerCategoriesAddressForm"
import { CustomerCategoriesRenderMenu } from "./CustomerCategoriesRenderMenu"
import { CustomerCategoriesServiceOrderForm } from "./CustomerCategoriesServiceOrderForm"

const CustomerCategoriesRender = () => {
	const { openedCategory } = useCustomerContext()
	const { isMobile } = useDeviceType()

	if (openedCategory.includes(`menu_no`)) {
		return <CustomerCategoriesRenderMenu />
	}

	if (openedCategory === `request-form`) {
		return <ProfileRequestForm />
	}

	if (openedCategory === `address-form`) {
		return <CustomerCategoriesAddressForm />
	}

	if (openedCategory.includes(`service`)) {
		return <CustomerCategoriesServiceOrderForm />
	}

	if (isMobile && openedCategory === `categories`) {
		return <CustomerCategories />
	}

	return <></>
}

export { CustomerCategoriesRender }
