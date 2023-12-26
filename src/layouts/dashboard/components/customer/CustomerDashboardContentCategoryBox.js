const CustomerDashboardContentCategoryBox = ({ category }) => {
	return (
		<div className="py-4 rounded-2xl bg-[#d4cbed] flex flex-col justify-center items-center gap-4">
			<span className="w-[3rem] h-[3rem] rounded-xl bg-zinc-50 flex justify-center items-center icon__span">
				<img
					src={category.categoryIcon}
					alt={category.categoryName}
					className="w-[26px] h-[24px]"
				/>
			</span>
			<h3 className="text-base text-center capitalize md:text-lg text-main-primary font-sansation-bold">{category.categoryName}</h3>
		</div>
	)
}

export { CustomerDashboardContentCategoryBox }
