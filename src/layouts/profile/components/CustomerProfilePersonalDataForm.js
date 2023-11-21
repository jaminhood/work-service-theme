import profileImg from "../../../assets/imgs/profile-1.png"

const CustomerProfilePersonalDataForm = () => {
	return (
		<div className="pt-4 grid grid-cols-1 gap-4">
			<div className="col-span-1 flex justify-center items-center">
				<div className="w-[5rem] h-[5rem] rounded-xl overflow-hidden">
					<img
						src={profileImg}
						className="object-cover w-fill h-full"
					/>
				</div>
			</div>
		</div>
	)
}

export { CustomerProfilePersonalDataForm }
