import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerCategoriesRenderMenuSubCategories } from "./CustomerCategoriesRenderMenuSubCategories"

const CustomerCategoriesRenderMenu = () => {
	const { openedCategory } = useCustomerContext()

	const title = openedCategory.split(`_`)

	return (
		<>
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center capitalize">{title[title.length - 1]}</h3>
			<CustomerCategoriesRenderMenuSubCategories />
		</>
	)
}

export { CustomerCategoriesRenderMenu }
