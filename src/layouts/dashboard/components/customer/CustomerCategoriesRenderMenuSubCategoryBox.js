const CustomerCategoriesRenderMenuSubCategoryBox = ({ subCategory }) => {
	return (
		<div
			key={subCategory.subCategoryID}
			className="flex flex-col items-center justify-center gap-2"
			onClick={() => {}}>
			{/* <span className="w-[2.5rem] h-[2.5rem] rounded-full bg-main-primary flex justify-center items-center icon__span"> */}
			<span className="w-[3rem] h-[3rem] rounded-full bg-zinc-50 flex justify-center items-center cursor-pointer border-2 border-zinc-50 hover:border-main-primary transition ease-in-out duration-300">
				<img
					src={subCategory.icon}
					alt={subCategory.subCategoryName}
					className="w-[26px] h-[24px]"
				/>
			</span>
			<p className="flex flex-col items-center gap-2 text-sm text-center capitalize cursor-pointer text-main-primary font-jost-regular">{subCategory.subCategoryName}</p>
		</div>
	)
}

export { CustomerCategoriesRenderMenuSubCategoryBox }
