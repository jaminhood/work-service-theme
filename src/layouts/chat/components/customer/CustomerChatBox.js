import { Icon } from "../../../../shared/icon"

const CustomerChatBox = () => {
	return (
		<div className="pt-4 flex gap-8 items-center cursor-pointer">
			<div>
				<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-main-primary flex justify-center items-center icon__span">
					<Icon {...{ name: `work-service`, width: "18px", height: "16px", fill: "#ffffff" }} />
				</span>
			</div>
			<div className="w-full">
				<h5 className="text-base text-main-primary font-sansation-bold capitalize">Car Repair</h5>
			</div>
			<div className="w-[10rem]">
				<p className="text-sm text-main-secondary font-sansation-bold capitalize">2 mins ago</p>
			</div>
		</div>
	)
}

export { CustomerChatBox }
