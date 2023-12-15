import { CustomerChatForm } from "./CustomerChatForm"
import { CustomerChatMessage } from "./CustomerChatMessage"
import { CustomerChatMessagePayment } from "./CustomerChatMessagePayment"

const CustomerChatCover = () => {
	return (
		<div className="flex gap-4 flex-col items-stretch h-full">
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">Car Repair</h3>
			<div className="h-full overflow-y-auto pr-2">
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
			<CustomerChatForm />
		</div>
	)
}

export { CustomerChatCover }
