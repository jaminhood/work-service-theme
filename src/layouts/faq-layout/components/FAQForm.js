import axios from "axios"
import { useState } from "react"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"
import { SITE_URL } from "../../../utils"

const FAQForm = () => {
	const [formData, setFormData] = useState({
		name: ``,
		email: ``,
		question: ``,
	})

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleClick = async () => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/faqs-form`, formData).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	return (
		<div className="grid grid-cols-1 gap-2 py-4">
			<div className="col-span-1 grid grid-cols-2 gap-8">
				<InputField
					name="input"
					id="name"
					type="text"
					placeholder="e.g. john"
					label="Name"
					value={formData.name}
					handleInput={handleInput}
				/>
				<InputField
					name="input"
					id="email"
					type="email"
					placeholder="e.g. john@example.com"
					label="Email Address"
					value={formData.email}
					handleInput={handleInput}
				/>
			</div>
			<div className="col-span-1">
				<InputField
					name="textarea"
					id="question"
					type="text"
					placeholder="Type your message"
					label="Question"
					value={formData.question}
					handleInput={handleInput}
				/>
			</div>
			<div className="col-span-1 py-2 flex justify-end">
				<Btn
					size="lg"
					handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-xl col-start-2 md:col-start-1 col-span-2">
					Send
				</Btn>
			</div>
		</div>
	)
}

export { FAQForm }
