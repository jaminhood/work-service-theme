const TeamBox = ({ user }) => {
	const { teamName, teamRole, team_img } = user

	return (
		<div className="flex flex-col gap-8 text-center">
			<div className="w-full overflow-hidden rounded-full aspect-square">
				<img
					src={team_img}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="text-center">
				<h4 className="text-2xl font-bold leading-8 tracking-tight text-main-primary font-sansation-bold sm:leading-10">{teamName}</h4>
				<p className="text-base text-gray-500 font-jost-regular">{teamRole}</p>
			</div>
		</div>
	)
}

export default TeamBox
