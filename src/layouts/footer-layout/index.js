// import { SITE_URL } from "../../constants"
import axios from "axios"
import { useEffect, useState } from "react"
import ThemeProvider from "../../context/theme/ThemeProvider"
import ContentBox from "../../shared/ContentBox"
import AuthLayout from "../auth-layout"
import Terms from "../terms"
import { FooterBg } from "./components/FooterBg"
import { FooterBottom } from "./components/FooterBottom"
import { FooterLogo } from "./components/FooterLogo"
import { FooterMenu } from "./components/FooterMenu"
import { FooterSocial } from "./components/FooterSocial"

const FooterLayout = () => {
	//  const [contact, useContact] = useState([])

	//  useEffect(async () => {
	//   await axios.get(`${SITE_URL}wp-json/ws-api/v1/contact/get`).then((res) => {
	//    useContact(res.data)
	//   })
	//  }, [])

	return (
		<ThemeProvider>
			<Terms />
			<AuthLayout />
			<footer className="relative overflow-hidden">
				<FooterBg />
				<ContentBox>
					<div class="flex justify-between items-center flex-col md:flex-row">
						<FooterLogo />
						<FooterMenu />
						<FooterSocial />
					</div>
					<FooterBottom />
				</ContentBox>
			</footer>
		</ThemeProvider>
	)
}

export default FooterLayout
