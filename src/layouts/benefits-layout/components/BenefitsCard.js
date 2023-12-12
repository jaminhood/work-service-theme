const BenefitsCard = ({ benefit, idx }) => {
	return (
		<div className="relative flex flex-col items-center justify-center gap-4 p-4 text-center">
			<span className="inline-flex items-center justify-center w-12 h-12 border-2 rounded-full text-main-primary font-sansation-bold border-main-primary">{idx + 1}</span>
			<h4 className="mb-2 text-2xl font-sansation-bold text-[#2E2C33]">{benefit.benefitHeading}</h4>
			<p className="text-base font-jost-regular text-[#2E2C33]">{benefit.benefitParagraph}</p>
		</div>
	)
}

export default BenefitsCard
