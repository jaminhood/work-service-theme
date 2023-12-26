import { Icon } from "../../../shared/icon"
import { getURL } from "../../../utils"

const ProfileSupport = () => {
	const securityLinks = [
		{
			icon: `chat`,
			title: `Live Chat`,
			link: getURL(`ws-customer/chat`),
		},
		{
			icon: `mail`,
			title: `Send Email`,
			link: `mailto:#`,
		},
		{
			icon: `whatsapp`,
			title: `WhatsApp`,
			link: `#`,
		},
	]

	return (
		<>
			<h3 className="text-2xl text-main-primary font-sansation-bold text-center capitalize">Support</h3>
			<ul className="p-4">
				{securityLinks.map(data => (
					<li
						key={data.link}
						className="py-2 w-full">
						<a
							href={data.link}
							className="font-jost-regular flex gap-8 items-center text-[#5E4A96] w-full cursor-pointer"
							style={{ textDecoration: `none` }}>
							<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#D4CBED] flex justify-center items-center cursor-pointer">
								<Icon {...{ name: data.icon, width: 17, height: 18, fill: "#5E4A96" }} />
							</span>
							<span className="w-[calc(100%-9rem)] font-jost-regular">{data.title}</span>
							<span className="w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center cursor-pointer">
								<Icon {...{ name: `arrow-right`, width: 17, height: 18, fill: "#5E4A96" }} />
							</span>
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export { ProfileSupport }
