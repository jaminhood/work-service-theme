import { footerBg } from "../../../helpers/images"

const FooterBg = () => {
	return (
		<div className="absolute inset-0 -z-10">
			<img
				src={footerBg}
				className="object-cover w-full h-full"
			/>
		</div>
	)
}

export { FooterBg }
