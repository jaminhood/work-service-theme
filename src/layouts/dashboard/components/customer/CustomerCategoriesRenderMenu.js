import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerCategoriesRenderMenuServices } from "./CustomerCategoriesRenderMenuServices"
import { CustomerCategoriesRenderMenuSubCategories } from "./CustomerCategoriesRenderMenuSubCategories"

const CustomerCategoriesRenderMenu = () => {
	const { openedCategory, getCategories } = useCustomerContext()
	const [category, setCategory] = useState([])
	const [subCategoryID, setSubCategoryID] = useState(null)

	const getData = async () => {
		const titleArray = openedCategory.split(`_`)
		const titleID = titleArray[titleArray.length - 1]
		await getCategories().then(data => {
			setCategory(data.find(cat => cat.categoryID === titleID))
		})
	}

	useEffect(() => {
		getData()
		setSubCategoryID(null)
	}, [openedCategory])

	return (
		<>
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">{category.categoryName}</h3>
			<CustomerCategoriesRenderMenuSubCategories
				ID={subCategoryID}
				categoryID={category.categoryID}
				setSubCategoryID={setSubCategoryID}
			/>
			<CustomerCategoriesRenderMenuServices subCategoryID={subCategoryID} />
		</>
	)
}

export { CustomerCategoriesRenderMenu }

