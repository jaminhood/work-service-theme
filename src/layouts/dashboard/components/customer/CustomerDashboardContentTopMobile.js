import profileImg from "../../../../assets/imgs/profile-1.png"
import { Icon } from "../../../../shared/icon"

const CustomerDashboardContentTopMobile = () => {
	return (
		<div className="flex md:hidden justify-between items-center w-full mb-4">
			<div className="w-[3rem] h-[3rem] rounded-lg overflow-hidden">
				<img
					src={profileImg}
					className="object-cover w-fill h-full"
				/>
			</div>
			<span className="w-[3rem] h-[3rem] rounded-xl bg-main-primary flex justify-center items-center icon__span cursor-pointer">
				<Icon {...{ name: `work-service`, width: 22, height: 20, fill: "#ffffff" }} />
			</span>
		</div>
	)
}

export { CustomerDashboardContentTopMobile }
