import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"
import { SITE_URL } from "../../../utils"

const SignIn = () => {
	const { handleOpenModal } = useThemeContext()

	const handleClick = () => handleOpenModal(`auth-forgot-password`)

	const handleSubmit = () => location.replace(`${SITE_URL}/ws-customer/dashboard/`)

	return (
		<div className="grid grid-cols-1 overflow-y-auto">
			<h2 className="text-main-primary text-center font-sansation-bold text-4xl">Sign In</h2>
			<InputField
				name="input"
				id="email"
				type="email"
				placeholder="e.g. johndoe@sample.com"
				label="Email or Username*"
			/>
			<InputField
				name="password"
				id="password"
				placeholder="e.g. example123"
				label="Password*"
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
		</div>
	)
}

export { SignIn }
