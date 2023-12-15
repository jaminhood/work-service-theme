const Select = props => {
	const { id, options, label, value, handleInput } = props

	return (
		<div className="col-span-1 py-2">
			{label !== `` && (
				<label
					for={id}
					className="block text-base font-medium text-gray-700 font-jost-regular cursor-pointer">
					{label}
				</label>
			)}
			<div className="mt-1">
				<select
					id={id}
					name={id}
					value={value}
					onInput={handleInput}
					className="block w-full px-4 py-3 focus:outline-[0] outline-[0] font-jost-regular placeholder:font-jost-regular shadow-sm sm:text-sm border-gray-300 rounded-md">
					{options.map(opt => (
						<option
							value={opt.value}
							key={opt.value}>
							{opt.render}
						</option>
					))}
				</select>
			</div>
		</div>
	)
}

export { Select }
