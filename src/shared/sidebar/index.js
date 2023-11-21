import { CustomerSidebar } from "./components/CustomerSidebar"

const Sidebar = ({ account }) => {
	switch (account) {
		case `customer`:
			return <CustomerSidebar />
	}
}

export { Sidebar }
