import React from "react"
import { Icon } from "../../../../shared/icon"

const CustomerDashboardContentCategoryBox = ({ category }) => {
	return (
		<div className="py-4 rounded-2xl bg-[#d4cbed] flex flex-col justify-center items-center gap-4 cursor-pointer">
			<span className="w-[3rem] h-[3rem] rounded-xl bg-zinc-50 flex justify-center items-center icon__span">
				<Icon {...{ name: `work-service`, width: "26px", height: "24px", fill: "#5E4A96" }} />
			</span>
			<h3 className="md:text-lg text-base text-main-primary font-sansation-bold text-center capitalize">{category.title}</h3>
		</div>
	)
}

export { CustomerDashboardContentCategoryBox }
