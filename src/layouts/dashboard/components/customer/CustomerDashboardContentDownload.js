import axios from "axios"
import { useEffect, useState } from "react"
import useThemeContext from "../../../../context/theme/useThemeContext"
import { Btn } from "../../../../shared/btn"
import { Icon } from "../../../../shared/icon"
import { SITE_URL } from "../../../../utils"

const CustomerDashboardContentDownload = () => {
	const { getDashboardData, handleLoading } = useThemeContext()
	const [ios, setIos] = useState(`#`)
	const [android, setAndroid] = useState(`#`)

	const getData = async () => {
		handleLoading(true)
		console.log(await getDashboardData())
		await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/downloads`).then(({ data }) => {
			if (data.length > 0) {
				setIos(data[0].linkIOS)
				setAndroid(data[0].linkAndroid)
			}
		})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className="grid items-center grid-cols-2 gap-8 py-4 md:grid-cols-3">
			<h3 className="col-span-2 text-3xl font-bold text-center font-sansation-bold md:text-left md:col-span-1 text-main-primary">Download App</h3>
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
