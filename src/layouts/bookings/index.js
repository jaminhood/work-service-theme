import { CustomerBookings } from "./components/customer/CustomerBookings"

const Bookings = ({ account }) => {
	switch (account) {
		case `customer`:
			return <CustomerBookings />
	}
}

export { Bookings }
