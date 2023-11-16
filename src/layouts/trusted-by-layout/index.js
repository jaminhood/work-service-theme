// import axios from "axios"
// import { useEffect, useState } from "react"
// import { SITE_URL } from "../../../constants"
import trusted_img from "../../assets/imgs/luxtrade.png"
import Container from "../../shared/Container"

const TrustedByLayout = () => {
	// const [trusted, setTrusted] = useState([])

	// useEffect(async () => {
	// 	await axios.get(`${SITE_URL}wp-json/ws-api/v1/trust/get`).then(res => {
	// 		setTrusted(res.data)
	// 	})
	// }, [])

	return (
		<div className="py-8 bg-[#F2F0F7]">
			<Container>
				<div className="flex items-center justify-center gap-8">
					<h2 className="text-lg text-center font-sansation-bold text-[#B7B1C0]">Trusted By:</h2>
					<div className="h-8">
						<img
							src={trusted_img}
							alt=""
							className="h-full"
						/>
					</div>
					{/* {trusted.map(trust => (
						<div
							className="h-12"
							key={trust.trusted_id}>
							<img
								src={trust.trusted_img}
								alt=""
								className="h-full"
							/>
						</div>
					))} */}
				</div>
			</Container>
		</div>
	)
}

export default TrustedByLayout
