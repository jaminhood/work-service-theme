import valueImg from "../../../assets/imgs/value-1.png"

const ValueBox = ({ title, text }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-4 p-4 rounded-lg bg-zinc-50">
			<div className="w-12 h-12 rounded-md bg-[#D4CBED] flex justify-center items-center">
				<img
					src={valueImg}
					alt=""
					className="object-cover w-6 h-6"
				/>
			</div>
			<div className="text-center">
				<h4 className="text-lg font-bold leading-8 tracking-tight text-main-primary font-sansation-bold sm:leading-10">{title}</h4>
				<p className="text-sm text-gray-500 font-jost-regular">{text}</p>
			</div>
		</div>
	)
}

export default ValueBox
