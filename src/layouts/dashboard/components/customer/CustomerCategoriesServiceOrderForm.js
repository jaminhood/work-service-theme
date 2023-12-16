import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { Btn } from "../../../../shared/btn"
import { Icon } from "../../../../shared/icon"
import { InputField } from "../../../../shared/input-field"

const CustomerCategoriesServiceOrderForm = () => {
	const { address, services, openedCategory, handleOrderForm, handleOpenCategory } = useCustomerContext()
	const [service, setService] = useState([])
	const [formData, setFormData] = useState({
		address: ``,
		service_id: ``,
		booking_name: ``,
		booking_desc: ``,
	})

	const getData = async () => {
		const serviceArray = openedCategory.split(`_`)
		const service_id = serviceArray[serviceArray.length - 1]
		setFormData(prev => ({ ...prev, service_id }))
		setService(services.find(ser => ser.serviceID === service_id))
	}

	useEffect(() => {
		getData()
	}, [openedCategory])

	const arrangeAddress = () => {
		setFormData(prev => ({ ...prev, address: `${address[0].streetAddress} ${address[0].city}` }))
	}

	useEffect(() => {
		arrangeAddress()
	}, [])

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleClick = async () => {
		await handleOrderForm(formData)
	}

	return (
		<>
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">{service.serviceName}</h3>
			<div className="pt-4 grid grid-cols-1">
				<div className="col-span-1 py-2">
					<h4 className="text-sm font-sansation-bold">Location</h4>
					<p className="flex justify-between items-center py-2">
						<span className="overflow-hidden w-[90%] text-sm font-jost-regular text-main-primary">{formData.address}</span>
						<span
							className="w-[2.3rem] h-[2.3rem] rounded-full bg-[#D4CBED] flex justify-center items-center cursor-pointer"
							onClick={() => handleOpenCategory(`address-form`)}>
							<Icon {...{ name: `work-service`, width: "16px", height: "14px", fill: "#5E4A96" }} />
						</span>
					</p>
				</div>
				<InputField
					name="input"
					id="booking_name"
					type="text"
					placeholder="Name Of Service"
					cls="bg-[#D4CBED] text-main-primary"
					label="Service Type"
					value={formData.booking_name}
					handleInput={handleInput}
				/>
				<InputField
					name="textarea"
					id="booking_desc"
					placeholder="Describe the service you would like to see on our list."
					cls="bg-[#D4CBED] text-main-primary"
					label="Description"
					value={formData.booking_desc}
					handleInput={handleInput}
				/>
				<div className="col-span-1 py-2">
					<Btn
						size="md"
						handleClick={handleClick}
						cls="bg-main-primary text-zinc-50 rounded-2xl w-full">
						Order
					</Btn>
				</div>
			</div>
		</>
	)
}

export { CustomerCategoriesServiceOrderForm }
