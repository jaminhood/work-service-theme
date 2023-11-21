import bg from "../../../assets/imgs/footer-bg.png"

const FooterBg = () => {
	return (
		<div className="absolute inset-0 -z-10">
			<img
				src={bg}
				className="object-cover w-full h-full"
			/>
		</div>
	)
}

export { FooterBg }
