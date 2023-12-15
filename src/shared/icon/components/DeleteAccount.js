const DeleteAccount = ({ width, height, fill }) => {
	return (
		<svg
			width={`${width}px`}
			height={`${height}px`}
			viewBox="0 0 17 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M12.3087 7.61669C13.4203 7.61669 14.4864 8.05827 15.2724 8.84428C16.0584 9.6303 16.5 10.6964 16.5 11.808C16.5 12.9196 16.0584 13.9856 15.2724 14.7716C14.4864 15.5577 13.4203 15.9992 12.3087 15.9992C11.1971 15.9992 10.1311 15.5577 9.34505 14.7716C8.55903 13.9856 8.11745 12.9196 8.11745 11.808C8.11745 10.6964 8.55903 9.6303 9.34505 8.84428C10.1311 8.05827 11.1971 7.61669 12.3087 7.61669ZM8.13498 9.14079C7.90657 9.49705 7.72498 9.88123 7.59469 10.2839H2.21461C2.06303 10.2839 1.91766 10.3441 1.81047 10.4513C1.70329 10.5584 1.64307 10.7038 1.64307 10.8554V11.5466C1.64307 12.0465 1.86102 12.522 2.23976 12.8474C3.19842 13.6712 4.64327 14.0941 6.59335 14.0941C7.05058 14.0941 7.47885 14.0713 7.87969 14.0255C8.0702 14.4066 8.30873 14.7594 8.5884 15.0772C7.97647 15.1838 7.3112 15.2372 6.59335 15.2372C4.39103 15.2372 2.68556 14.7373 1.49524 13.7131C1.18305 13.4448 0.932501 13.1123 0.76073 12.7382C0.588958 12.3642 0.50002 11.9574 0.5 11.5458V10.8546C0.500202 10.4 0.680937 9.9641 1.00247 9.64272C1.324 9.32133 1.76 9.14079 2.21461 9.14079H8.13498ZM10.4745 9.87693L10.4219 9.92113L10.3777 9.97447C10.3338 10.0381 10.3103 10.1136 10.3103 10.1909C10.3103 10.2682 10.3338 10.3437 10.3777 10.4073L10.4219 10.4607L11.7707 11.8087L10.4242 13.1553L10.38 13.2078C10.3359 13.2716 10.3123 13.3472 10.3123 13.4247C10.3123 13.5021 10.3359 13.5778 10.38 13.6415L10.4242 13.694L10.4768 13.7382C10.5405 13.7823 10.6161 13.8059 10.6936 13.8059C10.771 13.8059 10.8467 13.7823 10.9104 13.7382L10.9629 13.694L12.3095 12.3475L13.6576 13.6963L13.7101 13.7398C13.7738 13.7838 13.8495 13.8075 13.9269 13.8075C14.0044 13.8075 14.08 13.7838 14.1437 13.7398L14.1963 13.6956L14.2405 13.6422C14.2844 13.5786 14.308 13.5031 14.308 13.4258C14.308 13.3485 14.2844 13.273 14.2405 13.2094L14.1963 13.1568L12.8475 11.808L14.1986 10.4607L14.2428 10.4073C14.2867 10.3437 14.3102 10.2682 14.3102 10.1909C14.3102 10.1136 14.2867 10.0381 14.2428 9.97447L14.1986 9.92113L14.1453 9.87769C14.0816 9.83378 14.0062 9.81026 13.9288 9.81026C13.8515 9.81026 13.776 9.83378 13.7124 9.87769L13.6591 9.92113L12.3095 11.27L10.9607 9.92113L10.9081 9.87769C10.8538 9.84019 10.7907 9.81738 10.725 9.81151C10.6593 9.80563 10.5932 9.81688 10.5331 9.84416L10.4745 9.87693ZM6.59335 0C7.09372 -7.45608e-09 7.58919 0.0985549 8.05147 0.290038C8.51375 0.481521 8.93379 0.762182 9.2876 1.116C9.64142 1.46981 9.92208 1.88985 10.1136 2.35213C10.305 2.81441 10.4036 3.30988 10.4036 3.81025C10.4036 4.31062 10.305 4.80609 10.1136 5.26837C9.92208 5.73065 9.64142 6.15069 9.2876 6.5045C8.93379 6.85832 8.51375 7.13898 8.05147 7.33046C7.58919 7.52194 7.09372 7.6205 6.59335 7.6205C5.58281 7.6205 4.61366 7.21906 3.8991 6.5045C3.18454 5.78994 2.7831 4.82079 2.7831 3.81025C2.7831 2.79971 3.18454 1.83056 3.8991 1.116C4.61366 0.401436 5.58281 0 6.59335 0ZM6.59335 1.14307C6.24309 1.14307 5.89626 1.21206 5.57267 1.3461C5.24907 1.48014 4.95504 1.6766 4.70737 1.92427C4.4597 2.17194 4.26324 2.46597 4.1292 2.78957C3.99516 3.11316 3.92618 3.45999 3.92618 3.81025C3.92618 4.16051 3.99516 4.50734 4.1292 4.83093C4.26324 5.15453 4.4597 5.44856 4.70737 5.69623C4.95504 5.9439 5.24907 6.14036 5.57267 6.2744C5.89626 6.40844 6.24309 6.47742 6.59335 6.47742C7.30073 6.47742 7.97914 6.19642 8.47933 5.69623C8.97952 5.19603 9.26053 4.51763 9.26053 3.81025C9.26053 3.10287 8.97952 2.42446 8.47933 1.92427C7.97914 1.42408 7.30073 1.14307 6.59335 1.14307Z"
				fill={fill}
			/>
		</svg>
	)
}

export { DeleteAccount }
