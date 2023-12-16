const CustomerBookingsContainer = ({ time, children }) => {
	return (
		<div className="bg-zinc-50 px-6 py-4 rounded-lg my-4 shadow-sm">
			<h4 className="text-xl text-main-primary font-sansation-bold capitalize">{time}</h4>
			{children}
		</div>
	)
}

export { CustomerBookingsContainer }
