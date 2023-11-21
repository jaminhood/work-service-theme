import React from "react"
import { useCurrency } from "../../../../hooks/useCurrency"
import { Icon } from "../../../../shared/icon"

const CustomerBookingsBox = () => {
	const [price] = useCurrency(35000, `en-NG`, `NGN`)

	return (
		<div className="py-2 flex justify-between items-center">
			<div>
				<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-main-primary flex justify-center items-center icon__span">
					<Icon {...{ name: `work-service`, width: "18px", height: "16px", fill: "#ffffff" }} />
				</span>
			</div>
			<div>
				<h5 className="text-base text-main-primary font-sansation-bold capitalize">Car Repair</h5>
				<p className="text-sm text-main-secondary font-sansation-bold capitalize">Ongoing</p>
			</div>
			<div className="flex items-end flex-col">
				<h5 className="text-xl text-main-primary font-sansation-bold">{price}</h5>
				<p className="text-sm text-main-secondary font-sansation-bold capitalize">Stars</p>
			</div>
		</div>
	)
}

export { CustomerBookingsBox }
