import { useCurrency } from "../../../../hooks/useCurrency"
import { Btn } from "../../../../shared/btn"
import { Icon } from "../../../../shared/icon"

const CustomerChatMessagePayment = ({ price }) => {
	const [newPrice] = useCurrency(parseInt(price), `en-NG`, `NGN`)

	return (
		<div className="w-full flex justify-start py-2 gap-2">
			<span className="w-[2.3rem] h-[2.3rem] rounded-full bg-[#D4CBED] flex justify-center items-center icon__span">
				<Icon {...{ name: `work-service`, width: "16px", height: "14px", fill: "#5E4A96" }} />
			</span>
			<div className="w-[15rem] p-4 rounded-xl rounded-tl-none bg-[#F2F0F7] text-main-primary flex items-center gap-2 flex-col shadow-md">
				<p className="font-sansation-bold text-center text-main-primary text-2xl">{newPrice}</p>
				<p className="font-jost-regular text-center text-main-primary text-lg">10% of Service</p>
				<a
					href="#"
					target="_blank">
					<Btn
						size="sm"
						// handleClick={handleClick}
						cls="bg-main-primary text-zinc-50 rounded-2xl">
						Request
					</Btn>
				</a>
			</div>
		</div>
	)
}

export { CustomerChatMessagePayment }
