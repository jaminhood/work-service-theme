import React from "react"
import { CustomerBookingsBox } from "./CustomerBookingsBox"
import { CustomerBookingsContainer } from "./CustomerBookingsContainer"

const CustomerBookingsContent = () => {
	return (
		<>
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center capitalize">Bookings</h3>
			<CustomerBookingsContainer time="Yesterday">
				<CustomerBookingsBox />
				<CustomerBookingsBox />
			</CustomerBookingsContainer>
			<CustomerBookingsContainer time="Last Week">
				<CustomerBookingsBox />
			</CustomerBookingsContainer>
		</>
	)
}

export { CustomerBookingsContent }
