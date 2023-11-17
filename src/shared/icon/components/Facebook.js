const Facebook = ({ width, height, stroke }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 17 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M15.4992 1H11.5992C9.87531 1 8.22201 1.68482 7.00302 2.90381C5.78404 4.12279 5.09922 5.77609 5.09922 7.5V11.4H1.19922V16.6H5.09922V27H10.2992V16.6H14.1992L15.4992 11.4H10.2992V7.5C10.2992 7.15522 10.4362 6.82456 10.68 6.58076C10.9238 6.33696 11.2544 6.2 11.5992 6.2H15.4992V1Z"
				stroke={stroke}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}

export { Facebook }
