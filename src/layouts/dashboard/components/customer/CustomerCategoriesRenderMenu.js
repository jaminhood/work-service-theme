import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import useThemeContext from "../../../../context/theme/useThemeContext"
import { Loader } from "../../../../shared/loader"
import { CustomerCategoriesRenderMenuServices } from "./CustomerCategoriesRenderMenuServices"
import { CustomerCategoriesRenderMenuSubCategories } from "./CustomerCategoriesRenderMenuSubCategories"

const CustomerCategoriesRenderMenu = () => {
	const { loading, getDashboardData, handleLoading } = useThemeContext()
	const { openedCategory } = useCustomerContext()
	const [category, setCategory] = useState([])
	const [subCategoryID, setSubCategoryID] = useState(null)

	const getData = async () => {
		handleLoading(true)
		const titleArray = openedCategory.split(`_`)
		const titleID = titleArray[titleArray.length - 1]
		const { categories } = await getDashboardData()
		setCategory(categories.find(cat => cat.categoryID === titleID))
		handleLoading(false)
	}

	useEffect(() => {
		getData()
		setSubCategoryID(null)
	}, [openedCategory])

	return (
		<>
			{loading && <Loader />}
			<h3 className="text-2xl text-center capitalize text-main-primary font-sansation-bold">{category.categoryName}</h3>
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
