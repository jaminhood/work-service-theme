import { useState } from "react"
import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"
import { Loader } from "../../../shared/loader"

const SignIn = () => {
	const { loading, handleLogin, handleOpenModal } = useThemeContext()
	const [formData, setFormData] = useState({
		username: ``,
		password: ``,
	})

	const handleClick = () => handleOpenModal(`auth-forgot-password`)

	const handleSignUp = () => handleOpenModal(`auth-signup`)

	const handleSubmit = async () => await handleLogin(formData)

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	return loading ? (
		<Loader />
	) : (
		<div className="grid grid-cols-1 overflow-y-auto">
			<h2 className="text-2xl text-center text-main-primary font-sansation-bold">Sign In</h2>
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
						className="cursor-pointer text-main-primary font-sansation-bold">
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
				<p className="text-base font-medium text-center text-gray-700 font-sansation-bold">
					Don't have an account?{" "}
					<span
						onClick={handleSignUp}
						className="cursor-pointer text-main-primary font-sansation-bold">
						Sign Up
					</span>
				</p>
			</div>
		</div>
	)
}

export { SignIn }
