import CustomerProvider from "../../../../context/customer/CustomerProvider"
import { DashboardLayout } from "../../../../shared/dashboard-layout"
import { CustomerChatContent } from "./CustomerChatContent"
import { CustomerChatCover } from "./CustomerChatCover"

const CustomerChat = () => {
	return (
		<CustomerProvider>
			<DashboardLayout
				columns={2}
				left={<CustomerChatContent />}
				right={<CustomerChatCover />}
			/>
		</CustomerProvider>
	)
}

export { CustomerChat }
