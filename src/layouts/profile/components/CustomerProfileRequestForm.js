import React from "react"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"

const CustomerProfileRequestForm = () => {
	return (
		<>
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center capitalize">Request Service</h3>
			<div className="pt-4 grid grid-cols-1">
				<InputField
					name="input"
					id="serviceName"
					type="text"
					placeholder="Name Of Service"
					cls="bg-[#D4CBED] text-main-primary"
					label="Service Name"
				/>
				<InputField
					name="textarea"
					id="description"
					placeholder="Describe the service you would like to see on our list."
					cls="bg-[#D4CBED] text-main-primary"
					label="Description"
				/>
				<div className="col-span-1 py-2">
					<Btn
						size="md"
						// handleClick={handleClick}
						cls="bg-main-primary text-zinc-50 rounded-2xl w-full">
						Send
					</Btn>
				</div>
			</div>
		</>
	)
}

export { CustomerProfileRequestForm }
