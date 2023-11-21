import profileImg from "../../../../assets/imgs/profile-1.png"
import { Icon } from "../../../../shared/icon"
import { CustomerChatMessage } from "./CustomerChatMessage"
import { CustomerChatMessagePayment } from "./CustomerChatMessagePayment"

const CustomerChatCover = () => {
	return (
		<div className="flex gap-4 flex-col items-stretch h-full">
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center capitalize">Car Repair</h3>
			<div className="h-full overflow-y-auto">
				<CustomerChatMessage sender="customer" />
				<CustomerChatMessage sender="admin" />
				<CustomerChatMessagePayment price="5000" />
				<CustomerChatMessage sender="admin" />
				<CustomerChatMessage sender="admin" />
				<CustomerChatMessage sender="customer" />
				<CustomerChatMessage sender="customer" />
				<CustomerChatMessage sender="admin" />
				<CustomerChatMessage sender="admin" />
				<CustomerChatMessage sender="admin" />
			</div>
			<div className="w-full py-2 flex gap-2">
				<div className="w-[2.3rem] h-[2.3rem] rounded-full overflow-hidden">
					<img
						src={profileImg}
						className="object-cover w-fill h-full"
					/>
				</div>
				<div className="w-96 h-full rounded-lg bg-[#D4CBED] flex gap-8 px-2 items-center">
					<input
						type="text"
						placeholder="Type a message"
						className="placeholder:text-main-primary text-main-primary bg-transparent w-full focus:outline-[0] outline-[0] font-sansation-regular placeholder:font-sansation-regular"
					/>
					<span className="w-[2.5rem] h-[2.5rem] flex justify-center items-center cursor-pointer">
						<Icon {...{ name: `work-service`, width: "18px", height: "16px", fill: "#5E4A96" }} />
					</span>
				</div>
			</div>
		</div>
	)
}

export { CustomerChatCover }
