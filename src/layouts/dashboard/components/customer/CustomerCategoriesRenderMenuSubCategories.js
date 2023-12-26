import { useEffect, useState } from "react"
import useThemeContext from "../../../../context/theme/useThemeContext"
import { Loader } from "../../../../shared/loader"
import { CustomerCategoriesRenderMenuSubCategoryBox } from "./CustomerCategoriesRenderMenuSubCategoryBox"

const CustomerCategoriesRenderMenuSubCategories = ({ ID, categoryID, setSubCategoryID }) => {
	const { loading, getSubCategories, handleLoading } = useThemeContext()
	const [subCategories, setSubCategories] = useState([])

	const getData = async () => {
		handleLoading(true)
		if (categoryID) {
			const data = await getSubCategories(categoryID)
			setSubCategories(data.reverse())
		}
		handleLoading(false)
	}

	useEffect(() => {
		getData()
	}, [categoryID])

	return (
		<>
			{loading && <Loader />}
			<div className="py-4">
				<h3 className="text-lg text-main-primary font-sansation-bold">Sub-categories</h3>
				<div className="grid grid-cols-4 gap-8 py-4">
					{subCategories.map((subCategory, idx) => (
						<CustomerCategoriesRenderMenuSubCategoryBox
							key={idx}
							ID={ID}
							subCategory={subCategory}
							setSubCategoryID={setSubCategoryID}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export { CustomerCategoriesRenderMenuSubCategories }
