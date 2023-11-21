import profileImg from "../../../assets/imgs/profile-1.png"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"

const CustomerProfilePersonalDataForm = () => {
	return (
		<div className="pt-4 grid grid-cols-1">
			<div className="col-span-1 flex justify-center items-center">
				<div className="w-[5rem] h-[5rem] rounded-xl overflow-hidden">
					<img
						src={profileImg}
						className="object-cover w-fill h-full"
					/>
				</div>
			</div>
			<InputField
				name="input"
				id="fullname"
				type="text"
				placeholder="Abigal Smith"
				value="Abigal Smith"
				cls="bg-[#D4CBED] text-main-primary"
				label="Full Name"
			/>
			<InputField
				name="input"
				id="username"
				type="text"
				placeholder="abby"
				value="abby"
				cls="bg-[#D4CBED] text-main-primary"
				label="Username"
			/>
			<InputField
				name="input"
				id="email"
				type="email"
				placeholder="abigalsmith@gmail.com"
				value="abigalsmith@gmail.com"
				cls="bg-[#D4CBED] text-main-primary"
				label="Email Address"
			/>
			<InputField
				name="input"
				id="phone"
				type="text"
				placeholder="07000000000"
				value="07000000000"
				cls="bg-[#D4CBED] text-main-primary"
				label="Phone Number"
			/>
			<InputField
				name="input"
				id="address"
				type="text"
				placeholder="No. 2, njni e e  ef e  fe n"
				value="No. 2, njni e e  ef e  fe n"
				cls="bg-[#D4CBED] text-main-primary"
				label="Address"
			/>
			<div className="col-span-1 py-2">
				<Btn
					size="md"
					// handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-2xl w-full">
					Update
				</Btn>
			</div>
		</div>
	)
}

export { CustomerProfilePersonalDataForm }
