import { useState } from "react"
import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"

const ProfileRequestForm = () => {
	const { handleUserRequest } = useThemeContext()
	const [formData, setFormData] = useState({
		requests_name: ``,
		requests_desc: ``,
	})

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleClick = async () => {
		await handleUserRequest(formData)
	}

	return (
		<>
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">Request Service</h3>
			<div className="pt-4 grid grid-cols-1">
				<InputField
					name="input"
					id="requests_name"
					type="text"
					placeholder="Name Of Service"
					cls="bg-[#D4CBED] text-main-primary"
					label="Service Name"
					value={formData.requests_name}
					handleInput={handleInput}
				/>
				<InputField
					name="textarea"
					id="requests_desc"
					placeholder="Describe the service you would like to see on our list."
					cls="bg-[#D4CBED] text-main-primary"
					label="Description"
					value={formData.requests_desc}
					handleInput={handleInput}
				/>
				<div className="col-span-1 py-2">
					<Btn
						size="md"
						handleClick={handleClick}
						cls="bg-main-primary text-zinc-50 rounded-2xl w-full">
						Send
					</Btn>
				</div>
			</div>
		</>
	)
}

export { ProfileRequestForm }
