import { useEffect, useState } from "react"

const CustomerCategoriesRenderMenuSubCategoryBox = ({ ID, subCategory, setSubCategoryID }) => {
	const { icon, subCategoryID, subCategoryName } = subCategory
	const [cls, setCls] = useState(`border-zinc-50 hover:border-main-primary`)

	const handleClick = () => {
		setSubCategoryID(subCategoryID)
	}

	useEffect(() => {
		setCls(ID == subCategoryID ? `border-main-primary` : `border-zinc-50 hover:border-main-primary`)
	}, [ID])

	return (
		<div
			key={subCategoryID}
			className="flex flex-col items-center justify-center gap-2"
			onClick={handleClick}>
			{/* <span className="w-[2.5rem] h-[2.5rem] rounded-full bg-main-primary flex justify-center items-center icon__span"> */}
			<span className={`w-[3rem] h-[3rem] rounded-full bg-zinc-50 flex justify-center items-center cursor-pointer border-2 ${cls} transition ease-in-out duration-300`}>
				<img
					src={icon}
					alt={subCategoryName}
					className="w-[26px] h-[24px]"
				/>
			</span>
			<p className="flex flex-col items-center gap-2 text-sm text-center capitalize cursor-pointer text-main-primary font-jost-regular">{subCategoryName}</p>
		</div>
	)
}

export { CustomerCategoriesRenderMenuSubCategoryBox }
