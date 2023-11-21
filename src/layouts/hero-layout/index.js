import aboutBg from "../../assets/imgs/page-about.png"
import contactBg from "../../assets/imgs/page-contact.png"
import ThemeProvider from "../../context/theme/ThemeProvider"
import AuthLayout from "../auth-layout"
import HeroHome from "./components/HeroHome"
import HeroPage from "./components/HeroPage"

const HeroLayout = ({ page, heading }) => {
	return (
		<ThemeProvider>
			<AuthLayout />
			{page == `home` && <HeroHome />}
			{page == `about` && (
				<HeroPage
					heading={heading}
					bg={aboutBg}
				/>
			)}
			{page == `contact` && (
				<HeroPage
					heading={heading}
					bg={contactBg}
				/>
			)}
		</ThemeProvider>
	)
}

export default HeroLayout
