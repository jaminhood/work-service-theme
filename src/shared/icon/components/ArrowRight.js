const ArrowRight = ({ width, height, fill }) => {
	return (
		<svg
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 8 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.18262 12.9401L6.07262 8.05006C6.65012 7.47256 6.65012 6.52756 6.07262 5.95006L1.18262 1.06006"
				stroke={fill}
				stroke-width="1.5"
				stroke-miterlimit="10"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}

export { ArrowRight }
