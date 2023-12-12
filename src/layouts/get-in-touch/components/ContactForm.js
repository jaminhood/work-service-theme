import axios from "axios"
import { useState } from "react"
import { Btn } from "../../../shared/btn"
import { SITE_URL } from "../../../utils"
import { ContactInput } from "./ContactInput"
import { ContactTextarea } from "./ContactTextarea"

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: ``,
		email: ``,
		phone: ``,
		subject: ``,
		msg: ``,
	})

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleClick = async () => {
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/contact-form`, formData).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	return (
		<div className="grid grid-cols-1 gap-2 py-4">
			<div className="col-span-1 grid grid-cols-2 gap-8">
				<ContactInput
					id="name"
					type="text"
					placeholder="e.g. john"
					label="Name"
					formData={formData}
					handleInput={handleInput}
				/>
				<ContactInput
					id="email"
					type="email"
					placeholder="e.g. john@example.com"
					label="Email Address"
					formData={formData}
					handleInput={handleInput}
				/>
			</div>
			<div className="col-span-1 grid grid-cols-2 gap-8">
				<ContactInput
					id="phone"
					type="text"
					placeholder="+234"
					label="Phone Number"
					formData={formData}
					handleInput={handleInput}
				/>
				<ContactInput
					id="subject"
					type="text"
					placeholder="Type your Subject"
					label="Subject"
					formData={formData}
					handleInput={handleInput}
				/>
			</div>
			<div className="col-span-1">
				<ContactTextarea
					id="msg"
					type="text"
					placeholder="Type your message"
					label="Message"
					formData={formData}
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

export default ContactForm
