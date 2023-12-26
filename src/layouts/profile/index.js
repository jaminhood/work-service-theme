import ThemeProvider from "../../context/theme/ThemeProvider"
import { ProfileLayout } from "./components/ProfileLayout"

const Profile = ({ account }) => {
	return (
		<ThemeProvider>
			<ProfileLayout account={account} />
		</ThemeProvider>
	)
}

export { Profile }
