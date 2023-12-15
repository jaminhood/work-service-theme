import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerCategoriesRenderMenuSubCategories } from "./CustomerCategoriesRenderMenuSubCategories"

const CustomerCategoriesRenderMenu = () => {
	const { openedCategory, getCategories } = useCustomerContext()
	const [category, setCategory] = useState([])

	const getData = async () => {
		const titleArray = openedCategory.split(`_`)
		const titleID = titleArray[titleArray.length - 1]
		await getCategories().then(data => {
			setCategory(data.find(cat => cat.categoryID === titleID))
		})
	}

	useEffect(() => {
		getData()
	}, [openedCategory])

	return (
		<>
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">{category.categoryName}</h3>
			<CustomerCategoriesRenderMenuSubCategories categoryID={category.categoryID} />
		</>
	)
}

export { CustomerCategoriesRenderMenu }
