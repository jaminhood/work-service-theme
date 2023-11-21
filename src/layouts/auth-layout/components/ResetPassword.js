import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { Icon } from "../../../shared/icon"
import { InputField } from "../../../shared/input-field"

const ResetPassword = () => {
	const { handleOpenModal } = useThemeContext()

	const handleClick = () => handleOpenModal(`auth-signin`)

	return (
		<div className="grid grid-cols-1 overflow-y-auto">
			<h2 className="text-main-primary text-center font-sansation-bold text-4xl">Reset Password</h2>
			<div className="text-center py-2">
				<Icon
					name="unlock"
					width="95px"
					height="125px"
					fill="#5E4A96"
				/>
			</div>
			<h2 className="text-main-primary text-center font-sansation-bold text-4xl">
				Reset <br /> Password?
			</h2>
			<div className="col-span-1 py-2">
				<p className="text-base text-center font-medium text-gray-700 font-sansation-bold">Enter a new password. Please make sure it is different from the old one.</p>
			</div>
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
			<div className="col-span-1 py-2">
				<Btn
					size="md"
					handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-full w-full col-start-2 md:col-start-1 col-span-2">
					Done
				</Btn>
			</div>
		</div>
	)
}

export { ResetPassword }
