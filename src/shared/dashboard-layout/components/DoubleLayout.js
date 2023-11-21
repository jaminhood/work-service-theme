const DoubleLayout = ({ left, right }) => {
	return (
		<div className="grid grid-cols-2 h-screen w-full">
			<div className="bg-[#EEEBF4] h-screen px-20 pt-16 col-span-1 overflow-y-auto relative">{left}</div>
			<div className="bg-[#F2F0F7] h-screen px-20 pt-16 col-span-1 overflow-y-auto relative">{right}</div>
		</div>
	)
}

export { DoubleLayout }
