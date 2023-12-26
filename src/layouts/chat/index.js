import ThemeProvider from "../../context/theme/ThemeProvider"
import { CustomerChat } from "./components/customer/CustomerChat"

const Chat = () => {
	return (
		<ThemeProvider>
			<CustomerChat />
		</ThemeProvider>
	)
}

export { Chat }
