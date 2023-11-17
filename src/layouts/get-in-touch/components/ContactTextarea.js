const ContactTextarea = props => {
	const { id, placeholder, label } = props

	return (
		<div className="col-span-1 py-2">
			<label
				id={id}
				className="block text-sm font-medium text-gray-700 font-sansation-bold">
				{label}
			</label>
			<div className="mt-1">
				<textarea
					name={id}
					id={id}
					autoComplete={id}
					placeholder={placeholder}
					required
					className="block w-full px-4 py-3 focus:outline-[0] h-60 resize-none font-jost-regular placeholder:font-jost-regular shadow-sm sm:text-sm border-gray-300 rounded-md"
				/>
			</div>
		</div>
	)
}

export { ContactTextarea }
