import { useEffect, useState } from "react"
import profileImg from "../../../assets/imgs/profile-placeholder.jpg"
import useCustomerContext from "../../../context/customer/useCustomerContext"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"

const CustomerProfilePersonalDataForm = () => {
	const { getProfile, submitProfile } = useCustomerContext()
	const [file, setFile] = useState(null)
	const [formData, setFormData] = useState({
		image: ``,
		fullname: ``,
		username: ``,
		email: ``,
		phone: ``,
	})

	const myProfile = async () => {
		const { display_name, image, phone, user_email, user_nicename, username } = await getProfile()
		setFormData(prev => ({
			...prev,
			fullname: `${display_name} ${user_nicename}`,
			image,
			username,
			email: user_email,
			phone,
		}))
	}

	useEffect(() => {
		myProfile()
	}, [])

	const handleInput = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const onImageChange = e => {
		if (e.target.files && e.target.files[0]) {
			setFormData(prev => ({ ...prev, image: URL.createObjectURL(e.target.files[0]) }))
			setFile(e.target.files[0])
		}
	}

	const handleClick = async () => {
		await submitProfile(formData, file)
	}

	return (
		<div className="pt-4 grid grid-cols-1">
			<div className="col-span-1 flex justify-center items-center">
				<div className="w-[5rem] h-[5rem] rounded-xl overflow-hidden">
					<input
						type="file"
						id="image"
						accept="image/*"
						onChange={onImageChange}
						className="hidden"
					/>
					<img
						src={formData.image !== `` ? formData.image : profileImg}
						onClick={() => document.getElementById("image").click()}
						className="object-cover w-fill h-full cursor-pointer"
					/>
				</div>
			</div>
			<InputField
				name="input"
				id="fullname"
				type="text"
				placeholder="Abigal Smith"
				cls="bg-[#D4CBED] text-main-primary"
				label="Full Name"
				value={formData.fullname}
				handleInput={handleInput}
			/>
			<InputField
				name="input"
				id="username"
				type="text"
				placeholder="abby"
				cls="bg-[#D4CBED] text-main-primary"
				label="Username"
				value={formData.username}
				handleInput={handleInput}
			/>
			<InputField
				name="input"
				id="email"
				type="email"
				placeholder="abigalsmith@gmail.com"
				cls="bg-[#D4CBED] text-main-primary"
				label="Email Address"
				value={formData.email}
				handleInput={handleInput}
			/>
			<InputField
				name="input"
				id="phone"
				type="text"
				placeholder="07000000000"
				cls="bg-[#D4CBED] text-main-primary"
				label="Phone Number"
				value={formData.phone}
				handleInput={handleInput}
			/>
			<div className="col-span-1 py-2">
				<Btn
					size="md"
					handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-2xl w-full">
					Update
				</Btn>
			</div>
		</div>
	)
}

export { CustomerProfilePersonalDataForm }
