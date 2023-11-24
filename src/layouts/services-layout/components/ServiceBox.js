// import { SITE_URL } from "../../constants"
// href={`${SITE_URL}ws-login/sign-in`}
import { useEffect, useState } from "react"
import service_img from "../../../assets/imgs/service-1.png"

const ServiceBox = ({ service, index }) => {
	const [cls, setCls] = useState(``)
	const { serviceName, icon } = service

	useEffect(() => {
		switch (index) {
			case 1:
				setCls(`before:from-[#5E4A9600] before:to-[#5E4A96]`)
				break
			case 2:
				setCls(`before:from-[#51720000] before:to-[#517200]`)
				break
			case 3:
				setCls(`before:from-[#964A4A00] before:to-[#964A4A]`)
				break
		}
	}, [index])

	return (
		<div className="relative z-0 flex flex-col items-start justify-end h-40 p-2 mx-2 overflow-hidden rounded-md shadow-md md:p-4 md:mx-4 bg-zinc-200 md:h-80">
			<div className={`absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-b ${cls} -z-10`}>
				<img
					src={icon}
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="relative z-10 p-2">
				<h4 className="pb-0 mb-0 text-sm md:text-2xl font-sansation-bold text-[#EEEBF4] w-1/2">{serviceName}</h4>
			</div>
		</div>
	)
}

export { ServiceBox }
