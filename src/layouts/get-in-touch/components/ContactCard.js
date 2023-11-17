import { ContactIconCover } from "./ContactIconCover"

const ContactCard = ({ title, text, iconContent, children }) => {
	return (
		<div className="py-2">
			<h3 className="text-2xl font-bold text-zinc-800">{title}</h3>
			<p className="my-2 text-lg text-zinc-900 font-jost-regular">{text}</p>
			{iconContent !== undefined
				? iconContent.map((data, idx) => (
						<ContactIconCover
							iconContent={data.iconContent}
							info={data.info}
							key={idx}
						/>
				  ))
				: children}
		</div>
	)
}

export { ContactCard }
