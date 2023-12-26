const ServiceBoxSquare = ({ service }) => {
	const { serviceName, icon } = service

	return (
		<div className="relative z-0 flex flex-col items-start justify-end p-2 mx-2 overflow-hidden rounded-md shadow-md aspect-square md:p-4 md:mx-4 bg-zinc-200">
			<div className="absolute inset-0 -z-10">
				<img
					src={icon}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="relative z-10 p-2">
				<h4 className="pb-0 mb-0 text-sm md:text-2xl font-sansation-bold text-[#EEEBF4] w-1/2">{serviceName}</h4>
			</div>
		</div>
	)
}

export { ServiceBoxSquare }
