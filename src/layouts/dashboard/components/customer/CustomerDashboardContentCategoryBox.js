const CustomerDashboardContentCategoryBox = ({ category }) => {
	return (
		<div className="py-4 rounded-2xl bg-[#d4cbed] flex flex-col justify-center items-center gap-4 cursor-pointer">
			<span className="w-[3rem] h-[3rem] rounded-xl bg-zinc-50 flex justify-center items-center icon__span">
				<img
					src={category.categoryIcon}
					alt={category.categoryName}
					className="w-[26px] h-[24px]"
				/>
			</span>
			<h3 className="md:text-lg text-base text-main-primary font-sansation-bold text-center capitalize">{category.categoryName}</h3>
		</div>
	)
}

export { CustomerDashboardContentCategoryBox }
