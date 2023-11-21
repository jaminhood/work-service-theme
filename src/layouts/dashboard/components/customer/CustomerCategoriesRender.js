import useCustomerContext from "../../../../context/customer/useCustomerContext"
import useDeviceType from "../../../../hooks/useDeviceType"
import { CustomerCategories } from "./CustomerCategories"
import { CustomerCategoriesRenderMenu } from "./CustomerCategoriesRenderMenu"

const CustomerCategoriesRender = () => {
	const { openedCategory } = useCustomerContext()
	const { isMobile } = useDeviceType()

	if (openedCategory.includes(`menu`)) {
		return <CustomerCategoriesRenderMenu />
	}

	if (openedCategory === `request-form`) {
		return <div>{openedCategory}</div>
	}

	if (isMobile && openedCategory === `categories`) {
		return <CustomerCategories />
	}

	return <></>
}

export { CustomerCategoriesRender }
