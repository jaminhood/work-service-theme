// import { AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai"
// import { FiFacebook } from "react-icons/fi"
// import { GoMail } from "react-icons/go"
// import { HiOutlineMapPin } from "react-icons/hi"
import logo from "../../assets/imgs/word-logo.png"
// import { SITE_URL } from "../../constants"
import axios from "axios"
import { useEffect, useState } from "react"
import bg from "../../assets/imgs/footer-bg.png"
import ContentBox from "../../shared/ContentBox"
import { Icon } from "../../shared/icon"
import { SITE_URL, footerNavBtns } from "../../utils"

const FooterLayout = () => {
	//  const [contact, useContact] = useState([])

	//  useEffect(async () => {
	//   await axios.get(`${SITE_URL}wp-json/ws-api/v1/contact/get`).then((res) => {
	//    useContact(res.data)
	//   })
	//  }, [])

	return (
		<footer className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<img
					src={bg}
					className="object-cover w-full h-full"
				/>
			</div>
			<ContentBox>
				<div class="flex justify-between items-center">
					<div>
						<a href={SITE_URL}>
							<img
								src={logo}
								className="object-cover h-12"
							/>
						</a>
					</div>
					<div className="flex gap-8 items-center border-b-2 border-b-[#EEEBF4] py-8">
						{footerNavBtns.map(link => (
							<button
								key={link.action}
								className="text-base font-jost-regular text-zinc-300"
								onClick={() => {}}>
								{link.render}
							</button>
						))}
					</div>
					<div className="flex items-center justify-center gap-4 text-zinc-50">
						<a
							href={`#`}
							target="_blank">
							<Icon
								name="map-pin"
								width="20px"
								height="26px"
								stroke="#EEEBF4"
							/>
						</a>
						<a
							href={`#`}
							target="_blank">
							<Icon
								name="mail"
								width="27px"
								height="22px"
								fill="#EEEBF4"
							/>
						</a>
						<a
							href={`#`}
							target="_blank">
							<Icon
								name="whatsapp"
								width="27px"
								height="26px"
								fill="#EEEBF4"
							/>
						</a>
						<a
							href={`#`}
							target="_blank">
							<Icon
								name="ig"
								width="27px"
								height="26px"
								fill="#EEEBF4"
							/>
						</a>
						<a
							href={`#`}
							target="_blank">
							<Icon
								name="facebook"
								width="17px"
								height="28px"
								stroke="#EEEBF4"
							/>
						</a>
					</div>
				</div>
				<div class="flex justify-center flex-col items-center">
					<p className="py-4 text-base font-jost-regular text-zinc-300">&copy; {new Date().getFullYear()} Work Service. All Rights Reserved.</p>
				</div>
			</ContentBox>
		</footer>
	)
}

export default FooterLayout
