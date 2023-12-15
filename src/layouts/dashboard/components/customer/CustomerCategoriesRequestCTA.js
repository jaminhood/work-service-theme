import React from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { Btn } from "../../../../shared/btn"

const CustomerCategoriesRequestCTA = () => {
	const { handleOpenCategory } = useCustomerContext()

	const handleClick = () => handleOpenCategory(`request-form`)

	return (
		<div className="flex flex-col gap-8 pt-8 items-center">
			<p className="text-main-primary font-jost-regular capitalize text-lg rounded-lg text-center">Didn't find the category you want? Don't worry you can request below</p>
			<Btn
				size="sm"
				handleClick={handleClick}
				cls="bg-main-primary text-zinc-50 rounded-2xl">
				Request
			</Btn>
		</div>
	)
}

export { CustomerCategoriesRequestCTA }
