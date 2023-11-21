import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"

const SignUp = () => {
	const { handleOpenModal } = useThemeContext()

	const options = [
		{ value: 1, render: `Customer` },
		{ value: 2, render: `Expert` },
	]

	const handleClick = () => handleOpenModal(`auth-signin`)

	return (
		<div className="grid grid-cols-1 overflow-y-auto h-full">
			<h2 className="text-main-primary text-center font-sansation-bold text-4xl">Create an Account</h2>
			<InputField
				name="input"
				id="fullname"
				type="text"
				placeholder="e.g. john doe"
				label="Full Name*"
			/>
			<InputField
				name="input"
				id="email"
				type="email"
				placeholder="e.g. johndoe@sample.com"
				label="Email Address*"
			/>
			<div className="col-span-1 grid grid-cols-2 gap-4">
				<InputField
					name="input"
					id="username"
					type="text"
					placeholder="e.g. john123"
					label="Username*"
				/>
				<InputField
					name="input"
					id="phone"
					type="text"
					placeholder="e.g. +234567890"
					label="Phone Number*"
				/>
			</div>
			<div className="col-span-1 grid grid-cols-2 gap-4">
				<InputField
					name="password"
					id="password"
					placeholder="e.g. example123"
					label="Password*"
				/>
				<InputField
					name="password"
					id="repeat-password"
					placeholder="e.g. example123"
					label="Confirm Password*"
				/>
			</div>
			<InputField
				name="select"
				id="acct-type"
				label="Account Type*"
				options={options}
			/>
			<div className="col-span-1 py-2">
				<Btn
					size="md"
					handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-full w-full col-start-2 md:col-start-1 col-span-2">
					Sign Up
				</Btn>
			</div>
		</div>
	)
}

export { SignUp }
