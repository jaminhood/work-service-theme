import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerCategoriesRenderMenuSubCategoryBox } from "./CustomerCategoriesRenderMenuSubCategoryBox"

const CustomerCategoriesRenderMenuSubCategories = ({ categoryID }) => {
	const { openedCategory, handleOpenCategory, getSubCategories } = useCustomerContext()
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
						subCategory={subCategory}
					/>
					// <p

					// 	className={`cursor-pointer flex flex-col gap-2 text-center items-center text-main-primary font-sansation-bold capitalize text-sm hover:bg-main-primary hover:text-zinc-50 transition-all ease-in-out duration-300`}
					// 	onClick={() => {}}>
					// 	{category.subCategoryName}
					// </p>
				))}
			</div>
		</div>
	)
}

export { CustomerCategoriesRenderMenuSubCategories }
