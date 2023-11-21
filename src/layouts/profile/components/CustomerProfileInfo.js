import profileImg from "../../../assets/imgs/profile-1.png"
import { Icon } from "../../../shared/icon"

const CustomerProfileInfo = () => {
	return (
		<div className="flex items-center gap-4 mb-2">
			<div className="w-[3rem] h-[3rem] rounded-md overflow-hidden">
				<img
					src={profileImg}
					className="object-cover w-fill h-full"
				/>
			</div>
			<div className="w-[calc(100%-8rem)]">
				<h4 className="text-main-primary font-sansation-bold text-base">Abigail Smith</h4>
				<p className="text-sm font-medium text-[#9C8DC9] font-jost-regular">@abby</p>
			</div>
			<div className="w-[3rem] h-[3rem] rounded-md overflow-hidden">
				<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#9C8DC9] flex justify-center items-center cursor-pointer">
					<Icon {...{ name: `off`, width: 17, height: 18, fill: "#EEEBF4" }} />
				</span>
			</div>
		</div>
	)
}

export { CustomerProfileInfo }
