import teamImg from "../../../assets/imgs/profile-1.png"

const TeamBox = () => {
	return (
		<div className="flex flex-col gap-8 text-center">
			<div className="w-full aspect-square rounded-full overflow-hidden">
				<img
					src={teamImg}
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="text-center">
				<h4 className="text-2xl font-bold leading-8 tracking-tight text-main-primary font-sansation-bold sm:leading-10">David Rotimi</h4>
				<p className="text-xl text-gray-500 font-jost-regular">CEO</p>
			</div>
		</div>
	)
}

export default TeamBox
