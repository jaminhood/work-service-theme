import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import useThemeContext from "../../../../context/theme/useThemeContext"
import { Loader } from "../../../../shared/loader"

const CustomerCategoriesMenu = () => {
	const { loading, getDashboardData, handleLoading } = useThemeContext()
	const { openedCategory, handleOpenCategory } = useCustomerContext()
	const [categories, setCategories] = useState([])

	const getData = async () => {
		handleLoading(true)
		const { categories } = await getDashboardData()
		setCategories(categories.reverse())
		handleLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			{loading && <Loader />}
			<div className="grid grid-cols-1 gap-8 py-4">
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
		</>
	)
}

export { CustomerCategoriesMenu }
