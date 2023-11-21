import { Input } from "./components/Input"
import { Password } from "./components/Password"
import { Select } from "./components/Select"
import { Textarea } from "./components/Textarea"

const InputField = props => {
	switch (props.name.toLowerCase()) {
		case "input":
			return <Input {...props} />
		case "textarea":
			return <Textarea {...props} />
		case "password":
			return <Password {...props} />
		case "select":
			return <Select {...props} />
		default:
			return <div>InputField</div>
	}
}

export { InputField }
