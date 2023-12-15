import axios from "axios"
import { useEffect, useState } from "react"
import { Btn } from "../../../../shared/btn"
import { Icon } from "../../../../shared/icon"
import { SITE_URL } from "../../../../utils"

const CustomerDashboardContentDownload = () => {
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
		<div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-4 items-center">
			<h3 className="text-3xl font-sansation-bold text-center md:text-left col-span-2 md:col-span-1 font-bold text-main-primary">Download App</h3>
			<a
				href={android}
				target="_blank">
				<Btn
					size="lg"
					cls="bg-main-secondary text-zinc-50 rounded-2xl w-full">
					<span>
						<Icon
							name="playstore"
							width="25px"
							height="24px"
							fill="#F0FECD"
						/>
					</span>
					<span className="font-jost-regular">Google Play</span>
				</Btn>
			</a>
			<a
				href={ios}
				target="_blank">
				<Btn
					size="lg"
					cls="bg-main-primary text-zinc-50 rounded-2xl w-full">
					<span>
						<Icon
							name="apple"
							width="25px"
							height="24px"
							fill="#F0FECD"
						/>
					</span>
					<span className="font-jost-regular">Apple Store</span>
				</Btn>
			</a>
		</div>
	)
}

export { CustomerDashboardContentDownload }
