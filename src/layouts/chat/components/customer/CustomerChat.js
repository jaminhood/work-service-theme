import { DashboardLayout } from "../../../../shared/dashboard-layout"
import { CustomerChatContent } from "./CustomerChatContent"
import { CustomerChatCover } from "./CustomerChatCover"

const CustomerChat = () => {
	return (
		<DashboardLayout
			columns={2}
			left={<CustomerChatContent />}
			right={<CustomerChatCover />}
		/>
	)
}

export { CustomerChat }
