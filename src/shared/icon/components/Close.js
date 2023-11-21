const Close = ({ width, height, stroke }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 13 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1 11.243L6.243 6.00002L11.486 11.243M11.486 0.757019L6.242 6.00002L1 0.757019"
				stroke={stroke}
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}

export { Close }
