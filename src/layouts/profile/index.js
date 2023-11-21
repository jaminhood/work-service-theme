import { CustomerProfile } from "./components/CustomerProfile"

const Profile = ({ account }) => {
	switch (account) {
		case `customer`:
			return <CustomerProfile />
	}
}

export { Profile }
