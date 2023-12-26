import axios from "axios"
import { useEffect, useState } from "react"
import useDeviceType from "../../hooks/useDeviceType"
import Container from "../../shared/Container"
import { Btn } from "../../shared/btn"
import { Icon } from "../../shared/icon"
import { SITE_URL } from "../../utils"

const DownloadLayout = () => {
	const { isMobile } = useDeviceType()
	const [ios, setIos] = useState(`#`)
	const [android, setAndroid] = useState(`#`)

	const getAboutData = async () =>
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/downloads`).then(({ data }) => {
			if (data.length > 0) {
				setIos(data[0].linkIOS)
				setAndroid(data[0].linkAndroid)
			}
		})

	useEffect(() => {
		getAboutData()
	}, [])

	return (
		<div className="pb-12 bg-zinc-50">
			<Container>
				<div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:px-20">
					<h3 className="col-span-2 text-4xl font-bold text-center md:text-left md:col-span-1 text-main-primary font-sansation-bold">Download App</h3>
					<a
						href={android}
						target="_blank">
						<Btn
							size={isMobile ? "md" : "lg"}
							cls="bg-main-secondary text-zinc-50 rounded-2xl w-full font-jost-regular text-base">
							<span>
								<Icon
									name="playstore"
									width={isMobile ? "17px" : "25px"}
									height="24px"
									fill="#F0FECD"
								/>
							</span>
							Google Play
						</Btn>
					</a>
					<a
						href={ios}
						target="_blank">
						<Btn
							size={isMobile ? "md" : "lg"}
							cls="bg-main-primary text-zinc-50 rounded-2xl w-full font-jost-regular text-base">
							<span>
								<Icon
									name="apple"
									width={isMobile ? "17px" : "25px"}
									height="24px"
									fill="#F0FECD"
								/>
							</span>
							Apple Store
						</Btn>
					</a>
				</div>
			</Container>
		</div>
	)
}

export default DownloadLayout
