import { CustomerChat } from "./components/customer/CustomerChat"

const Chat = ({ account }) => {
	switch (account) {
		case `customer`:
			return <CustomerChat />
	}
}

export { Chat }
