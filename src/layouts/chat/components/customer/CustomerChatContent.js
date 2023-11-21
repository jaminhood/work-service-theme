import React from "react"
import { CustomerChatBox } from "./CustomerChatBox"
import { CustomerChatContainer } from "./CustomerChatContainer"

const CustomerChatContent = () => {
	return (
		<>
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center capitalize">Chat</h3>
			<CustomerChatContainer title="Active">
				<CustomerChatBox />
				<CustomerChatBox />
			</CustomerChatContainer>
			<CustomerChatContainer title="Closed">
				<CustomerChatBox />
				<CustomerChatBox />
			</CustomerChatContainer>
		</>
	)
}

export { CustomerChatContent }
