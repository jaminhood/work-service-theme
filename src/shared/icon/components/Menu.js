const Menu = ({ width, height, fill }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 20 14"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M0 13.6666V11.4444H20V13.6666H0ZM0 8.11109V5.88887H20V8.11109H0ZM0 2.55554V0.333313H20V2.55554H0Z"
				fill={fill}
			/>
		</svg>
	)
}

export { Menu }
