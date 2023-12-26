import { useEffect, useState } from "react"
import useThemeContext from "../../../context/theme/useThemeContext"
import { profilePlaceholder } from "../../../helpers/images"
import { Btn } from "../../../shared/btn"
import { InputField } from "../../../shared/input-field"
import { Loader } from "../../../shared/loader"

const ProfilePersonalDataForm = () => {
	const { loading, handleLoading, getUserProfile, setUserProfile } = useThemeContext()
	const [file, setFile] = useState(null)
	const [userRole, setUserRole] = useState(``)
	const [formData, setFormData] = useState({
		image: ``,
		fullname: ``,
		username: ``,
		email: ``,
		phone: ``,
		profession: ``,
	})

	const myProfile = async () => {
		const { display_name, image, phone, user_email, user_nicename, username, role, profession } = await getUserProfile()
		setUserRole(role)
		setFormData(prev => ({
			...prev,
			fullname: `${display_name} ${user_nicename}`,
			image,
			username,
			email: user_email,
			phone,
			profession,
		}))
		handleLoading(false)
	}

	useEffect(() => {
		handleLoading(true)
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
		await setUserProfile(formData, file)
	}

	return (
		<>
			{loading && <Loader />}
			<div className="grid grid-cols-1 pt-4">
				<div className="flex items-center justify-center col-span-1">
					<div className="w-[5rem] h-[5rem] rounded-xl overflow-hidden">
						<input
							type="file"
							id="image"
							accept="image/*"
							onChange={onImageChange}
							className="hidden"
						/>
						<img
							src={formData.image !== `` ? formData.image : profilePlaceholder}
							onClick={() => document.getElementById("image").click()}
							className="object-cover h-full cursor-pointer w-fill"
						/>
					</div>
				</div>
				<InputField
					name="input"
					id="fullname"
					type="text"
					placeholder={formData.fullname}
					cls="bg-[#D4CBED] text-main-primary"
					label="Full Name"
					disabled={true}
					value={formData.fullname}
					handleInput={handleInput}
				/>
				<InputField
					name="input"
					id="username"
					type="text"
					placeholder={formData.username}
					cls="bg-[#D4CBED] text-main-primary"
					label="Username"
					disabled={true}
					value={formData.username}
					handleInput={handleInput}
				/>
				<InputField
					name="input"
					id="email"
					type="email"
					placeholder={formData.email}
					cls="bg-[#D4CBED] text-main-primary"
					label="Email Address"
					disabled={true}
					value={formData.email}
					handleInput={handleInput}
				/>
				<InputField
					name="input"
					id="phone"
					type="text"
					placeholder={formData.phone}
					cls="bg-[#D4CBED] text-main-primary"
					label="Phone Number"
					value={formData.phone}
					handleInput={handleInput}
				/>
				{userRole === `expert` && (
					<InputField
						name="input"
						id="profession"
						type="text"
						placeholder={formData.profession}
						cls="bg-[#D4CBED] text-main-primary"
						label="Profession"
						value={formData.profession}
						handleInput={handleInput}
					/>
				)}
				<div className="col-span-1 py-2">
					<Btn
						size="md"
						handleClick={handleClick}
						cls="bg-main-primary text-zinc-50 rounded-2xl w-full">
						Update
					</Btn>
				</div>
			</div>
		</>
	)
}

export { ProfilePersonalDataForm }
