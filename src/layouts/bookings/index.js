import ThemeProvider from "../../context/theme/ThemeProvider"
import { CustomerBookings } from "./components/customer/CustomerBookings"

const Bookings = ({ account }) => {
	return <ThemeProvider>{account === `customer` ? <CustomerBookings /> : <></>}</ThemeProvider>
}

export { Bookings }
