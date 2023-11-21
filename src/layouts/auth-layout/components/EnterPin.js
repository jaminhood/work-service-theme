import useThemeContext from "../../../context/theme/useThemeContext"
import { Btn } from "../../../shared/btn"
import { Icon } from "../../../shared/icon"
import { InputField } from "../../../shared/input-field"

const EnterPin = () => {
	const { handleOpenModal } = useThemeContext()

	const handleClick = () => handleOpenModal(`auth-reset`)

	return (
		<div className="grid grid-cols-1 overflow-y-auto">
			<h2 className="text-main-primary text-center font-sansation-bold text-4xl">Reset Pin</h2>
			<div className="text-center py-4">
				<Icon
					name="lock"
					width="123px"
					height="125px"
					fill="#5E4A96"
				/>
			</div>
			<h2 className="text-main-primary text-center font-sansation-bold text-4xl">Enter Code</h2>
			<div className="col-span-1 py-4">
				<p className="text-base text-center font-medium text-gray-700 font-sansation-bold">Enter the 6 digit password reset code sent to your registered email address.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 p-2">
				<InputField
					name="input"
					id="numOne"
					type="text"
					placeholder=""
					label=""
				/>
				<InputField
					name="input"
					id="numTwo"
					type="text"
					placeholder=""
					label=""
				/>
				<InputField
					name="input"
					id="numThree"
					type="text"
					placeholder=""
					label=""
				/>
				<InputField
					name="input"
					id="numFour"
					type="text"
					placeholder=""
					label=""
				/>
				<InputField
					name="input"
					id="numFive"
					type="text"
					placeholder=""
					label=""
				/>
				<InputField
					name="input"
					id="numSix"
					type="text"
					placeholder=""
					label=""
				/>
			</div>
			<div className="col-span-1 py-2">
				<Btn
					size="md"
					handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-full w-full col-start-2 md:col-start-1 col-span-2">
					Continue
				</Btn>
			</div>
		</div>
	)
}

export { EnterPin }
