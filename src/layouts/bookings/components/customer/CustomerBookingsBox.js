import React from "react"
import { useCurrency } from "../../../../hooks/useCurrency"
import { Icon } from "../../../../shared/icon"

const CustomerBookingsBox = ({ booking }) => {
	const [price] = useCurrency(Number(booking.bookingPrice), `en-NG`, `NGN`)

	console.log(booking)

	return (
		<div className="py-2 flex justify-between items-center">
			<div>
				<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-main-primary flex justify-center items-center overflow-hidden">
					<img
						src={booking.icon}
						alt={booking.bookingType}
						className="w-full h-full object-cover"
					/>
					{/* <Icon {...{ name: `work-service`, width: "18px", height: "16px", fill: "#ffffff" }} /> */}
				</span>
			</div>
			<div>
				<h5 className="text-base text-main-primary font-sansation-bold capitalize">{booking.bookingType}</h5>
				{booking.bookingStatus == "0" && <p className="text-sm text-[#9C8DC9] font-sansation-bold capitalize">Cancelled</p>}
				{booking.bookingStatus == "1" && <p className="text-sm text-[#E6AC55] font-sansation-bold capitalize">Ongoing</p>}
				{booking.bookingStatus == "2" && <p className="text-sm text-[#B0CB6D] font-sansation-bold capitalize">Completed</p>}
			</div>
			<div className="flex items-end flex-col">
				<h5 className="text-xl text-main-primary font-sansation-bold">{price}</h5>
				<p className="text-sm text-main-secondary font-sansation-bold capitalize">Stars</p>
			</div>
		</div>
	)
}

export { CustomerBookingsBox }
