const SingleLayout = ({ center }) => {
	return (
		<div className="grid grid-cols-1 h-screen w-full">
			<div className="bg-[#eeebf4] h-screen px-20 py-16 col-span-1 overflow-y-auto">{center}</div>
		</div>
	)
}

export { SingleLayout }
