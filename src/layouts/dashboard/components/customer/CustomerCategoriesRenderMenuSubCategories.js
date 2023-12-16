import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerCategoriesRenderMenuSubCategoryBox } from "./CustomerCategoriesRenderMenuSubCategoryBox"

const CustomerCategoriesRenderMenuSubCategories = ({ ID, categoryID, setSubCategoryID }) => {
	const { getSubCategories } = useCustomerContext()
	const [subCategories, setSubCategories] = useState([])

	const getData = async () => {
		if (categoryID) {
			const data = await getSubCategories(categoryID)
			setSubCategories(data.reverse())
		}
	}

	useEffect(() => {
		getData()
	}, [categoryID])

	return (
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
	)
}

export { CustomerCategoriesRenderMenuSubCategories }
