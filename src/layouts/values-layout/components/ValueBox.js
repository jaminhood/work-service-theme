import valueImg from "../../../assets/imgs/value-1.png"

const ValueBox = () => {
	return (
		<div className="bg-zinc-50 p-4 rounded-lg flex justify-center items-center gap-4 flex-col">
			<div className="w-12 h-12 rounded-md bg-[#D4CBED] flex justify-center items-center">
				<img
					src={valueImg}
					alt=""
					className="w-6 h-6 object-cover"
				/>
			</div>
			<div className="text-center">
				<h4 className="text-lg font-bold leading-8 tracking-tight text-main-primary font-sansation-bold sm:leading-10">Expertise</h4>
				<p className="text-sm text-gray-500 font-jost-regular">We value the skills and knowledge of our professionals.</p>
			</div>
		</div>
	)
}

export default ValueBox
