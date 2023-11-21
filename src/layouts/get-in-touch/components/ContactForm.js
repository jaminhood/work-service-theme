import { Btn } from "../../../shared/btn"
import { ContactInput } from "./ContactInput"
import { ContactTextarea } from "./ContactTextarea"

const ContactForm = () => {
	return (
		<div className="grid grid-cols-1 gap-2 py-4">
			<div className="col-span-1 grid grid-cols-2 gap-8">
				<ContactInput
					id="name"
					type="text"
					placeholder="e.g. john"
					label="Name"
				/>
				<ContactInput
					id="email"
					type="email"
					placeholder="e.g. john@example.com"
					label="Email Address"
				/>
			</div>
			<div className="col-span-1 grid grid-cols-2 gap-8">
				<ContactInput
					id="phone"
					type="text"
					placeholder="+234"
					label="Phone Number"
				/>
				<ContactInput
					id="subject"
					type="text"
					placeholder="Type your Subject"
					label="Subject"
				/>
			</div>
			<div className="col-span-1">
				<ContactTextarea
					id="msg"
					type="text"
					placeholder="Type your message"
					label="Message"
				/>
			</div>
			<div className="col-span-1 py-2 flex justify-end">
				<Btn
					size="lg"
					// handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-xl col-start-2 md:col-start-1 col-span-2">
					Send
				</Btn>
			</div>
		</div>
	)
}

export default ContactForm
