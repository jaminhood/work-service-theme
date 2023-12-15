import axios from "axios"
import { useState } from "react"
import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"
import { SITE_URL } from "../../../utils"

const SignUp = () => {
	const { handleOpenModal } = useThemeContext()
	const [formData, setFormData] = useState({
		fullname: ``,
		email: ``,
		username: ``,
		phone: ``,
		password: ``,
		"repeat-password": ``,
		role: `customer`,
	})

	const options = [
		{ value: `customer`, render: `Customer` },
		{ value: `expert`, render: `Expert` },
	]

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleClick = async () => {
		const { fullname, email, username, phone, password, role } = formData

		if (password !== formData[`repeat-password`]) {
			alert(`Your Passwords Do Not Match!`)
			return
		}

		const names = fullname.split(` `)
		const firstname = names[0]
		const lastname = names[1]

		const params = { firstname, lastname, email, username, phone, password, role }

		await axios.post(`${SITE_URL}wp-json/ws-auth/v1/register`, params).then(res => {
			if (res.data !== `User Created Successfully`) {
				alert(res.data)
				return
			}

			alert(res.data)
			handleOpenModal(`auth-signin`)
		})
	}

	return (
		<div className="grid grid-cols-1 overflow-y-auto h-full">
			<h2 className="text-main-primary text-center font-sansation-bold text-2xl">Create an Account</h2>
			<InputField
				name="input"
				id="fullname"
				type="text"
				placeholder="e.g. john doe"
				label="Full Name*"
				value={formData.fullname}
				handleInput={handleInput}
			/>
			<InputField
				name="input"
				id="email"
				type="email"
				placeholder="e.g. johndoe@sample.com"
				label="Email Address*"
				value={formData.email}
				handleInput={handleInput}
			/>
			<div className="col-span-1 grid grid-cols-2 gap-4">
				<InputField
					name="input"
					id="username"
					type="text"
					placeholder="e.g. john123"
					label="Username*"
					value={formData.username}
					handleInput={handleInput}
				/>
				<InputField
					name="input"
					id="phone"
					type="text"
					placeholder="e.g. +234567890"
					label="Phone Number*"
					value={formData.phone}
					handleInput={handleInput}
				/>
			</div>
			<div className="col-span-1 grid grid-cols-2 gap-4">
				<InputField
					name="password"
					id="password"
					type="password"
					placeholder="e.g. example123"
					label="Password*"
					value={formData.password}
					handleInput={handleInput}
				/>
				<InputField
					name="password"
					id="repeat-password"
					type="password"
					placeholder="e.g. example123"
					label="Confirm Password*"
					value={formData["repeat-password"]}
					handleInput={handleInput}
				/>
			</div>
			<InputField
				name="select"
				id="role"
				label="Account Type*"
				options={options}
				value={formData.role}
				handleInput={handleInput}
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
