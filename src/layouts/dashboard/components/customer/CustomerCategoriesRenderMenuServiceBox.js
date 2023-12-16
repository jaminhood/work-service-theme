import useCustomerContext from "../../../../context/customer/useCustomerContext"

const CustomerCategoriesRenderMenuServiceBox = ({ service }) => {
	const { address, handleOpenCategory } = useCustomerContext()
	const { serviceID, serviceName, icon } = service

	const handleClick = () => {
		if (address[0].streetAddress !== ``) {
			handleOpenCategory(`service_${serviceID}`)
		} else {
			handleOpenCategory(`address-form`)
		}
	}

	return (
		<div
			className="relative z-0 flex flex-col items-start justify-end h-20 p-2 mx-2 overflow-hidden rounded-md shadow-md cursor-pointer bg-zinc-200 md:h-40"
			onClick={handleClick}>
			<div className="absolute inset-0 -z-10">
				<img
					src={icon}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="relative z-10 p-2">
				<h4 className="pb-0 mb-0 text-sm md:text-lg font-sansation-bold text-[#EEEBF4] w-1/2">{serviceName}</h4>
			</div>
		</div>
	)
}

export { CustomerCategoriesRenderMenuServiceBox }
