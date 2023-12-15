const Shield = ({ width, height, fill }) => {
	return (
		<svg
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 17 21"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M16.3636 9.59091C16.3636 14.6364 12.8727 19.3545 8.18182 20.5C3.49091 19.3545 0 14.6364 0 9.59091V4.13636L8.18182 0.5L16.3636 4.13636V9.59091ZM8.18182 18.6818C11.5909 17.7727 14.5455 13.7182 14.5455 9.79091V5.31818L8.18182 2.48182L1.81818 5.31818V9.79091C1.81818 13.7182 4.77273 17.7727 8.18182 18.6818ZM10.7273 9.59091V8.22727C10.7273 6.95455 9.45455 5.95455 8.18182 5.95455C6.90909 5.95455 5.63636 6.95455 5.63636 8.22727V9.59091C5.09091 9.59091 4.54545 10.1364 4.54545 10.6818V13.8636C4.54545 14.5 5.09091 15.0455 5.63636 15.0455H10.6364C11.2727 15.0455 11.8182 14.5 11.8182 13.9545V10.7727C11.8182 10.1364 11.2727 9.59091 10.7273 9.59091ZM9.54545 9.59091H6.81818V8.22727C6.81818 7.5 7.45455 7.04545 8.18182 7.04545C8.90909 7.04545 9.54545 7.5 9.54545 8.22727V9.59091Z"
				fill={fill}
			/>
		</svg>
	)
}

export { Shield }
