import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"

const FAQForm = () => {
	return (
		<div className="grid grid-cols-1 gap-2 py-4">
			<div className="col-span-1 grid grid-cols-2 gap-8">
				<InputField
					name="input"
					id="name"
					type="text"
					placeholder="e.g. john"
					label="Name"
				/>
				<InputField
					name="input"
					id="email"
					type="email"
					placeholder="e.g. john@example.com"
					label="Email Address"
				/>
			</div>
			<div className="col-span-1">
				<InputField
					name="textarea"
					id="msg"
					type="text"
					placeholder="Type your message"
					label="Question"
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

export { FAQForm }
