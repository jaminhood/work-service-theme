const CustomerProfileRequestBox = ({ data }) => {
	return (
		<div className="col-span-1">
			<h3 className="text-xl text-main-primary font-sansation-bold capitalize mb-2">{data.requestName}</h3>
			<p className="text-sm font-medium text-[#9C8DC9] font-jost-regular">{data.requestDesc}</p>
		</div>
	)
}

export { CustomerProfileRequestBox }
