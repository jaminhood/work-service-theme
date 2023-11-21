import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { Icon } from "../../../shared/icon"
import { InputField } from "../../../shared/input-field"

const ForgotPassword = () => {
	const { handleOpenModal } = useThemeContext()

	const handleClick = () => handleOpenModal(`auth-pin`)

	return (
		<div className="grid grid-cols-1 overflow-y-auto">
			<h2 className="text-main-primary text-center font-sansation-bold text-4xl">Reset Password</h2>
			<div className="text-center py-4">
				<Icon
					name="lock"
					width="123px"
					height="125px"
					fill="#5E4A96"
				/>
			</div>
			<h2 className="text-main-primary text-center font-sansation-bold text-4xl">
				Forgot your <br /> Password?
			</h2>
			<div className="col-span-1 py-4">
				<p className="text-base text-center font-medium text-gray-700 font-sansation-bold">
					Enter the email associated with your account and we will send an email with instructions to reset your password.
				</p>
			</div>
			<InputField
				name="input"
				id="email"
				type="email"
				placeholder="e.g. johndoe@sample.com"
				label="Email*"
			/>
			<div className="col-span-1 py-2">
				<Btn
					size="md"
					handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-full w-full col-start-2 md:col-start-1 col-span-2">
					Send
				</Btn>
			</div>
		</div>
	)
}

export { ForgotPassword }
