import { SITE_URL, customerMenu } from "../../../utils"
import { Icon } from "../../icon"

const CustomerMenu = () => {
	const url = window.location.href

	return (
		<ul className="flex flex-col items-center justify-center gap-4 w-full">
			{customerMenu.map(link => (
				<li
					key={link.path}
					className="w-[70%]">
					<a
						href={`${SITE_URL}ws-customer/${link.path}`}
						className={`customer__menu--link transition-all ease-in-out duration-300 ${url.includes(link.path) ? `active` : ``} `}>
						<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-zinc-50 flex justify-center items-center icon__span">
							<Icon {...{ name: link.icon, width: "18px", height: "16px", fill: "#5E4A96" }} />
						</span>
						<span className="font-sansation-bold capitalize">{link.render}</span>
					</a>
				</li>
			))}
		</ul>
	)
}
export { CustomerMenu }