import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerCategoriesRenderMenu } from "./CustomerCategoriesRenderMenu"

const CustomerCategoriesRender = () => {
	const { openedCategory } = useCustomerContext()

	if (openedCategory.includes(`menu`)) {
		return <CustomerCategoriesRenderMenu />
	}

	if (openedCategory === `request-form`) {
		return <div>{openedCategory}</div>
	}

	return <></>
}

export { CustomerCategoriesRender }
