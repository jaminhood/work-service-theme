import axios from "axios"
import { useEffect, useState } from "react"
import aboutBg from "../../assets/imgs/our-story.png"
import useDeviceType from "../../hooks/useDeviceType"
import Container from "../../shared/Container"
import { SITE_URL } from "../../utils"

const OurStory = () => {
	const { isMobile } = useDeviceType()
	const [about, setAbout] = useState([])

	const fetchAbout = async () => {
		try {
			const response = await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/about`)
			setAbout(response.data[0])
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchAbout()
	}, [])

	return (
		<div className="py-20 bg-[#EEEBF4]">
			<Container>
				<div className="grid items-center grid-cols-1 gap-16 md:grid-cols-3">
					{!isMobile && (
						<div className="col-span-1">
							<img
								src={aboutBg}
								alt=""
								className="object-cover w-full"
							/>
						</div>
					)}
					<div className="col-span-1 md:col-span-2">
						<div className="">
							<h2 className="text-3xl font-bold leading-8 tracking-tight text-main-primary sm:text-4xl sm:leading-10">Our Story</h2>
							<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-xl font-jost-regular">{about?.aboutStory}</p>
						</div>
					</div>
					{isMobile && (
						<div className="col-span-1">
							<img
								src={aboutBg}
								alt=""
								className="object-cover w-full"
							/>
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}

export default OurStory
