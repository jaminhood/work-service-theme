import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { categories } from "../../../../utils"

const CustomerCategoriesRenderMenuSubCategories = () => {
	const { openedCategory, handleOpenCategory } = useCustomerContext()
	const [subCategories, setSubCategories] = useState([])

	useEffect(() => {
		const title = openedCategory.split(`_`)

		const newCategory = categories.find(category => category.title == title[title.length - 1])
		setSubCategories(newCategory.subCategories)
	}, [openedCategory])

	return (
		<div className="py-4">
			<h3 className="text-2xl text-main-primary font-sansation-bold">Sub-categories</h3>
			<div className="grid grid-cols-4 gap-8 py-4">
				{subCategories.map(category => (
					<p
						key={category}
						className={`cursor-pointer flex flex-col gap-2 text-center items-center text-main-primary font-sansation-bold capitalize text-sm hover:bg-main-primary hover:text-zinc-50 transition-all ease-in-out duration-300`}
						onClick={() => {}}>
						{category}
					</p>
				))}
			</div>
		</div>
	)
}

export { CustomerCategoriesRenderMenuSubCategories }
