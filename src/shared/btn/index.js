import { BtnComponent } from "./components/BtnComponent"

const Btn = props => {
	switch (props.size.toLowerCase()) {
		case "sm":
			return (
				<BtnComponent
					{...props}
					size={`px-4 py-1`}
				/>
			)
		case "md":
			return (
				<BtnComponent
					{...props}
					size={`px-6 py-2`}
				/>
			)
		case "lg":
			return (
				<BtnComponent
					{...props}
					size={`px-8 py-3`}
				/>
			)
		default:
			return <div>Btn</div>
	}
}

export { Btn }
