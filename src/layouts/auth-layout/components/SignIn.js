import axios from "axios"
import { useState } from "react"
import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"
import { SITE_URL } from "../../../utils"

const SignIn = () => {
	const { handleOpenModal } = useThemeContext()
	const [formData, setFormData] = useState({
		username: ``,
		password: ``,
	})

	const handleClick = () => handleOpenModal(`auth-forgot-password`)

	const handleSignUp = () => handleOpenModal(`auth-signup`)

	const handleSubmit = async () =>
		await axios.post(`${SITE_URL}wp-json/jwt-auth/v1/token`, formData).then(res => {
			localStorage.setItem(`ws-token`, res.data.token)
			location.replace(`${SITE_URL}/ws-customer/dashboard/`)
		})

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	// const handleClick = async () => {
	// 	await axios.post(`${SITE_URL}wp-json/ws-api/v1/admin/faqs-form`, formData).then(res => {
	// 		if (res.data === `Upload Successful`) {
	// 			location.reload()
	// 		}
	// 	})
	// }

	return (
		<div className="grid grid-cols-1 overflow-y-auto">
			<h2 className="text-main-primary text-center font-sansation-bold text-2xl">Sign In</h2>
			<InputField
				name="input"
				id="username"
				type="text"
				placeholder="e.g. johndoe@sample.com"
				label="Username*"
				value={formData.username}
				handleInput={handleInput}
			/>
			<InputField
				name="password"
				id="password"
				type="password"
				placeholder="e.g. example123"
				label="Password*"
				value={formData.password}
				handleInput={handleInput}
			/>
			<div className="col-span-1 py-2">
				<p className="text-base font-medium text-gray-700 font-sansation-bold">
					Forgot Password?{" "}
					<span
						onClick={handleClick}
						className="text-main-primary cursor-pointer font-sansation-bold">
						Reset
					</span>
				</p>
			</div>
			<div className="col-span-1 py-2">
				<Btn
					size="md"
					handleClick={handleSubmit}
					cls="bg-main-primary text-zinc-50 rounded-full w-full col-start-2 md:col-start-1 col-span-2">
					Sign In
				</Btn>
			</div>
			<div className="col-span-1 py-2">
				<p className="text-base text-center font-medium text-gray-700 font-sansation-bold">
					Don't have an account?{" "}
					<span
						onClick={handleSignUp}
						className="text-main-primary cursor-pointer font-sansation-bold">
						Sign Up
					</span>
				</p>
			</div>
		</div>
	)
}

export { SignIn }
