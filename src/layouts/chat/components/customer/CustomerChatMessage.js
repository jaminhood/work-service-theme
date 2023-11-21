import { Icon } from "../../../../shared/icon"

const CustomerChatMessage = ({ sender }) => {
	if (sender === `admin`) {
		return (
			<div className="w-full flex justify-start py-2 gap-2">
				<span className="w-[2.3rem] h-[2.3rem] rounded-full bg-[#D4CBED] flex justify-center items-center icon__span">
					<Icon {...{ name: `work-service`, width: "16px", height: "14px", fill: "#5E4A96" }} />
				</span>
				<p className="max-w-[15rem] py-2 px-4 font-jost-regular rounded-xl rounded-tl-none bg-[#D4CBED] text-main-primary">Hello,. Good Morning..</p>
			</div>
		)
	}

	return (
		<div className="w-full flex justify-end py-2">
			<p className="max-w-[15rem] py-2 px-4 font-jost-regular rounded-xl rounded-tr-none bg-main-primary text-zinc-50">Hello,. Good Morning..</p>
		</div>
	)
}

export { CustomerChatMessage }
