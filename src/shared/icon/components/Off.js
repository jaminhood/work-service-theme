const Off = ({ width, height, fill }) => {
	return (
		<svg
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 24 25"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.9237 0.5V12.8083H10.4621V0.5H12.9237ZM17.5763 2.62688L18.572 3.35184C20.5683 4.80418 22.0536 6.85106 22.8153 9.19925C23.577 11.5475 23.576 14.0765 22.8123 16.424C22.0487 18.7716 20.5617 20.8173 18.5643 22.268C16.5669 23.7187 14.1616 24.5 11.6929 24.5C9.22427 24.5 6.81895 23.7187 4.82154 22.268C2.82413 20.8173 1.3371 18.7716 0.573477 16.424C-0.190146 14.0765 -0.191183 11.5475 0.570516 9.19925C1.33221 6.85106 2.81756 4.80418 4.81379 3.35184L5.8083 2.62565L7.25822 4.6159L6.26371 5.3421C4.68734 6.48843 3.51426 8.10431 2.91255 9.95821C2.31085 11.8121 2.31138 13.8089 2.91409 15.6625C3.51679 17.5161 4.69074 19.1313 6.26772 20.2768C7.84471 21.4223 9.7438 22.0392 11.6929 22.0392C13.642 22.0392 15.5411 21.4223 17.1181 20.2768C18.6951 19.1313 19.869 17.5161 20.4717 15.6625C21.0744 13.8089 21.075 11.8121 20.4733 9.95821C19.8716 8.10431 18.6985 6.48843 17.1221 5.3421L16.1276 4.6159L17.5763 2.62688Z"
				fill={fill}
			/>
		</svg>
	)
}

export { Off }
