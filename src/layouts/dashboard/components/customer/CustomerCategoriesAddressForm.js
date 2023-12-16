import { useEffect, useState } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { Btn } from "../../../../shared/btn"
import { InputField } from "../../../../shared/input-field"

const CustomerCategoriesAddressForm = () => {
	const { address, handleAddressForm } = useCustomerContext()
	const [formData, setFormData] = useState({
		address_line_one: ``,
		address_country: ``,
		address_state: ``,
		address_city: ``,
	})

	const getData = () => {
		const { city, country, state, streetAddress } = address[0]
		setFormData(prev => ({ ...prev, address_line_one: streetAddress, address_country: country, address_state: state, address_city: city }))
	}

	useEffect(() => {
		getData()
	}, [])

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleClick = async () => {
		await handleAddressForm(formData)
	}

	return (
		<>
			<h3 className="text-2xl text-center capitalize text-main-primary font-sansation-bold">Input Address</h3>
			<div className="grid grid-cols-2 pt-4 gap-x-8">
				<div className="col-span-2">
					<InputField
						name="input"
						id="address_line_one"
						type="text"
						placeholder="e.g. 1, example street"
						cls="bg-[#D4CBED] text-main-primary"
						label="Address Line 1"
						value={formData.address_line_one}
						handleInput={handleInput}
					/>
				</div>
				<div className="col-span-2">
					<InputField
						name="input"
						id="address_country"
						type="text"
						placeholder="e.g. Nigeria"
						cls="bg-[#D4CBED] text-main-primary"
						label="Country"
						value={formData.address_country}
						handleInput={handleInput}
					/>
				</div>
				<div className="col-span-1">
					<InputField
						name="input"
						id="address_state"
						type="text"
						placeholder="e.g. Edo"
						cls="bg-[#D4CBED] text-main-primary"
						label="State"
						value={formData.address_state}
						handleInput={handleInput}
					/>
				</div>
				<div className="col-span-1">
					<InputField
						name="input"
						id="address_city"
						type="text"
						placeholder="e.g. Benin City"
						cls="bg-[#D4CBED] text-main-primary"
						label="City"
						value={formData.address_city}
						handleInput={handleInput}
					/>
				</div>
				<div className="col-span-2 py-4">
					<Btn
						size="md"
						handleClick={handleClick}
						cls="bg-main-primary text-zinc-50 rounded-2xl w-full">
						Continue
					</Btn>
				</div>
			</div>
		</>
	)
}

export { CustomerCategoriesAddressForm }
