import { authImg, authImgMobile } from "../../../helpers/images"
import useDeviceType from "../../../hooks/useDeviceType"

const AuthInfo = () => {
	const { isMobile } = useDeviceType()

	return (
		<div className="col-span-1 md:h-[90vh]">
			<img
				src={isMobile ? authImgMobile : authImg}
				alt="Auth"
				className="w-full md:h-full object-cover"
			/>
		</div>
	)
}

export { AuthInfo }
