import profileImg from "../../../assets/imgs/profile-1.png"

const ProfileInfo = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
				<img
					src={profileImg}
					className="object-cover w-fill h-full"
				/>
			</div>
			<h4 className="text-zinc-50 mt-4 text-center font-sansation-bold text-lg">Abigail Smith</h4>
			<p className="text-base text-center font-medium text-zinc-300 font-jost-regular">@abby</p>
		</div>
	)
}

export { ProfileInfo }

