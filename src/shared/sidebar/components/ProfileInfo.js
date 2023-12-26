import profileImg from "../../../assets/imgs/profile-placeholder.jpg"
import useThemeContext from "../../../context/theme/useThemeContext"

const ProfileInfo = () => {
	const { profile } = useThemeContext()

	return (
		<div className="flex flex-col items-center">
			<div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
				<img
					src={profile.image !== `` ? profile.image : profileImg}
					className="object-cover w-fill h-full"
				/>
			</div>
			<h4 className="text-zinc-50 mt-4 text-center font-sansation-bold text-lg">
				{profile.display_name} {profile.user_nicename}
			</h4>
			<p className="text-base text-center font-medium text-zinc-300 font-jost-regular">{profile.role === `expert` ? profile.profession : `@${profile.username}`}</p>
		</div>
	)
}

export { ProfileInfo }
