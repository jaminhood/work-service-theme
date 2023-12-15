const Password = props => {
	const { id, type, placeholder, label, value, handleInput } = props

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
				<input
					type={type}
					name={id}
					id={id}
					autoComplete={id}
					placeholder={placeholder}
					value={value}
					onInput={handleInput}
					required
					className="block w-full px-4 py-3 focus:outline-[0] outline-[0] font-jost-regular placeholder:font-jost-regular shadow-sm sm:text-sm border-gray-300 rounded-md"
				/>
			</div>
		</div>
	)
}

export { Password }
