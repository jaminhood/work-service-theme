const BenefitsCard = ({ benefit }) => {
	return (
		<div className="p-4 text-center relative flex flex-col gap-4 justify-center items-center">
			<span className="w-12 h-12 inline-flex justify-center items-center rounded-full border-2 text-main-primary font-sansation-bold border-main-primary">{benefit}</span>
			<h4 className="mb-2 text-2xl font-sansation-bold text-[#2E2C33]">Unrivaled Expertise</h4>
			<p className="text-base font-jost-regular text-[#2E2C33]">
				Our team consists of highly skilled professionals with extensive experience and rigorous training in their respective fields, from mechanics to barbers. They guarantee precision and consistently
				exceed your expectations.
			</p>
		</div>
	)
}

export default BenefitsCard
