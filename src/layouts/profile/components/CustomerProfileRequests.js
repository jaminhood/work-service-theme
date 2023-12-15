import { useEffect, useState } from "react"
import useCustomerContext from "../../../context/customer/useCustomerContext"
import { Icon } from "../../../shared/icon"
import { CustomerProfileRequestBox } from "./CustomerProfileRequestBox"

const CustomerProfileRequests = () => {
	const { getRequestForm, handleOpenProfile } = useCustomerContext()
	const [requests, setRequests] = useState([])

	const getData = async () => {
		let data = await getRequestForm()
		setRequests(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">My Requests</h3>
			<div className="pt-4 grid grid-cols-1 gap-4">
				{requests.map((data, idx) => (
					<CustomerProfileRequestBox
						data={data}
						key={idx}
					/>
				))}
			</div>
			<div
				className="absolute right-8 bottom-8 w-[5rem] h-[5rem] rounded-full bg-main-primary flex justify-center items-center cursor-pointer"
				onClick={() => handleOpenProfile(`request-form`)}>
				<Icon {...{ name: `work-service`, width: 30, height: 31, fill: "#EEEBF4" }} />
			</div>
		</>
	)
}

export { CustomerProfileRequests }
