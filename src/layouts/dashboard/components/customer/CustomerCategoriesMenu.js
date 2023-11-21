import React from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { Icon } from "../../../../shared/icon"
import { categories } from "../../../../utils"

const CustomerCategoriesMenu = () => {
	const { openedCategory, handleOpenCategory } = useCustomerContext()

	return (
		<div className="py-4 grid grid-cols-1 gap-8">
			{categories.map(category => (
				<p
					key={category.id}
					className={`py-3 px-8 cursor-pointer flex gap-8 items-center ${
						openedCategory.includes(category.title) ? `bg-main-primary text-zinc-50` : `bg-zinc-50 text-main-primary`
					} font-sansation-bold capitalize text-lg rounded-lg hover:bg-main-primary hover:text-zinc-50 transition-all ease-in-out duration-300`}
					onClick={() => handleOpenCategory(`menu_${category.title}`)}>
					<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-main-primary flex justify-center items-center icon__span">
						<Icon {...{ name: `work-service`, width: "18px", height: "16px", fill: "#ffffff" }} />
					</span>
					{category.title}
				</p>
			))}
		</div>
	)
}

export { CustomerCategoriesMenu }
