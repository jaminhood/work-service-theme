import { useEffect } from "react"
import useCustomerContext from "../../../../context/customer/useCustomerContext"
import { CustomerChatBox } from "./CustomerChatBox"
import { CustomerChatContainer } from "./CustomerChatContainer"

const CustomerChatContent = () => {
	const { getChatList } = useCustomerContext()

	const getData = async () => {
		const data = await getChatList()
		console.log(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<>
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">Chat</h3>
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
