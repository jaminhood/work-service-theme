const Input = props => {
	const { id, type, placeholder, label, cls, value, handleInput } = props

	return (
		<div className="col-span-1 py-2">
			{label !== `` && (
				<label
					for={id}
					className="block text-base font-medium text-gray-700 font-sansation-bold cursor-pointer">
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
					className={`block w-full focus:outline-[0] outline-[0] font-jost-regular placeholder:font-jost-regular shadow-sm ${
						placeholder == `` ? `text-2xl h-16 text-center` : `text-base px-4 py-3`
					} border-gray-300 rounded-md ${cls !== undefined ? cls : ``}`}
				/>
			</div>
		</div>
	)
}

export { Input }
