const CustomerDashboardContentBox = ({ heading, btnAction, btnValue, children }) => {
	return (
		<div className="py-4 grid gap-2 grid-cols-1">
			<div className="flex justify-between items-center">
				<h3 className="text-3xl text-main-primary font-sansation-bold">{heading}</h3>
				{btnValue !== `` && (
					<span
						className="text-base text-main-primary font-sansation-bold cursor-pointer"
						onClick={btnAction}>
						{btnValue}
					</span>
				)}
			</div>
			{children}
		</div>
	)
}

export { CustomerDashboardContentBox }

