import ThemeProvider from "../../context/theme/ThemeProvider"
import AuthLayout from "../auth-layout"
import { HeaderContent } from "./components/HeaderContent"

const HeaderLayout = () => {
	return (
		<ThemeProvider>
			<AuthLayout />
			<HeaderContent />
		</ThemeProvider>
	)
}

export default HeaderLayout
