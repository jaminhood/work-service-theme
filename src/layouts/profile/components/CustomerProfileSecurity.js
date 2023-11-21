import { Btn } from "../../../shared/btn"
import { Icon } from "../../../shared/icon"

const CustomerProfileSecurity = () => {
	const securityLinks = [
		{
			icon: `work-service`,
			title: `Reset Password`,
			link: `reset-password`,
		},
		{
			icon: `work-service`,
			title: `Delete Account`,
			link: `delete-account`,
		},
	]

	return (
		<>
			<h3 className="text-3xl text-main-primary font-sansation-bold text-center capitalize">Security</h3>
			<ul className="p-4">
				{securityLinks.map(data => (
					<li
						key={data.link}
						className="py-2 font-sansation-bold flex gap-8 items-center text-[#5E4A96] w-full cursor-pointer">
						<span className="w-[2.5rem] h-[2.5rem] rounded-full bg-[#D4CBED] flex justify-center items-center cursor-pointer">
							<Icon {...{ name: data.icon, width: 17, height: 18, fill: "#5E4A96" }} />
						</span>
						<span className="w-[calc(100%-9rem)] font-sansation-bold">{data.title}</span>
						<span className="w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center cursor-pointer">
							<Icon {...{ name: data.icon, width: 17, height: 18, fill: "#5E4A96" }} />
						</span>
					</li>
				))}
			</ul>
			<div className="flex justify-center items-center py-2">
				<Btn
					size="sm"
					// handleClick={handleClick}
					cls="bg-main-primary text-zinc-50 rounded-2xl">
					Logout
				</Btn>
			</div>
		</>
	)
}

export { CustomerProfileSecurity }
