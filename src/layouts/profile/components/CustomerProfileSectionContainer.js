import { Icon } from "../../../shared/icon"

const CustomerProfileSectionContainer = ({ title, links }) => {
	return (
		<div className="py-2 rounded-lg">
			<h4 className="text-xl text-[#9C8DC9] font-sansation-bold capitalize mb-2">{title}</h4>
			<ul className="p-4 bg-[#F2F0F7] shadow-sm">
				{links.map(data => (
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
		</div>
	)
}

export { CustomerProfileSectionContainer }
