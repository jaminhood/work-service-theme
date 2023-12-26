import useThemeContext from "../../../context/theme/useThemeContext"
import { inviteAFriend } from "../../../helpers/images"

const ProfileInvite = () => {
	const { handleOpenProfile, handleLogout } = useThemeContext()

	return (
		<>
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">Invite A Friend</h3>
			<div className="flex justify-center items-center py-2">
				<img
					src={inviteAFriend}
					className="h-60 object-cover"
				/>
			</div>
			<div className="flex justify-center items-center py-2">
				<div className="w-full font-jost-regular shadow-sm text-base px-4 py-3 rounded-md bg-[#D4CBED]">Link</div>
			</div>
		</>
	)
}

export { ProfileInvite }
