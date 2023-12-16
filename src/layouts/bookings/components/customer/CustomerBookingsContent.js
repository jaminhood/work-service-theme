import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerBookingsBox } from "./CustomerBookingsBox"
import { CustomerBookingsContainer } from "./CustomerBookingsContainer"

const CustomerBookingsContent = () => {
	const { getOrdersList } = useCustomerContext()
	const [orders, setOrders] = useState([])

	const getData = async () => {
		const data = await getOrdersList()
		setOrders(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center capitalize">Bookings</h3>
			<CustomerBookingsContainer time="Yesterday">
				{orders.map((data, idx) => (
					<CustomerBookingsBox
						key={idx}
						booking={data}
					/>
				))}
			</CustomerBookingsContainer>
			{/* <CustomerBookingsContainer time="Last Week">
				<CustomerBookingsBox />
			</CustomerBookingsContainer> */}
		</>
	)
}

export { CustomerBookingsContent }
