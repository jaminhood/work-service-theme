import { useEffect, useState } from "react"
import { SITE_URL, customerMenu, expertMenu } from "../../../utils"
import { Icon } from "../../icon"

const SidebarMenu = ({ account }) => {
	const url = window.location.href
	const [menu, setMenu] = useState([])

	useEffect(() => {
		switch (account) {
			case `customer`:
				setMenu(customerMenu)
				break
			case `expert`:
				setMenu(expertMenu)
				break
		}
	}, [account])

	return (
		<ul className="flex flex-col items-center justify-center gap-4 w-full">
			{menu.map(link => (
				<li
					key={link.path}
					className="w-[70%]">
					<a
						href={`${SITE_URL}ws-${account}/${link.path}`}
						className={`customer__menu--link transition-all ease-in-out duration-300 ${url.includes(link.path) ? `active` : ``} `}>
						<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-zinc-50 flex justify-center items-center icon__span">
							<Icon {...{ name: link.icon, width: "18px", height: "16px", fill: "#5E4A96" }} />
						</span>
						<span className="font-jost-regular capitalize">{link.render}</span>
					</a>
				</li>
			))}
		</ul>
	)
}
export { SidebarMenu }
