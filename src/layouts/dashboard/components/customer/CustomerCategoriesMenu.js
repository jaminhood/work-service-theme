import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"

const CustomerCategoriesMenu = () => {
	const { openedCategory, handleOpenCategory, getCategories } = useCustomerContext()
	const [categories, setCategories] = useState([])

	const getData = async () => {
		const data = await getCategories()
		setCategories(data.reverse())
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="py-4 grid grid-cols-1 gap-8">
			{categories.map(category => (
				<p
					key={category.categoryID}
					className={`py-3 px-8 cursor-pointer flex gap-8 items-center ${
						openedCategory.includes(category.categoryID) ? `bg-main-primary text-zinc-50` : `bg-zinc-50 text-main-primary`
					} font-jost-regular capitalize text-lg rounded-lg hover:bg-main-primary hover:text-zinc-50 transition-all ease-in-out duration-300`}
					onClick={() => handleOpenCategory(`menu_no_${category.categoryID}`)}>
					{/* <span className="w-[2.5rem] h-[2.5rem] rounded-full bg-main-primary flex justify-center items-center icon__span"> */}
					<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-zinc-50 flex justify-center items-center icon__span">
						<img
							src={category.categoryIcon}
							alt={category.categoryName}
							className="w-[26px] h-[24px]"
						/>
					</span>
					{category.categoryName}
				</p>
			))}
		</div>
	)
}

export { CustomerCategoriesMenu }
