import axios from "axios"
import { useEffect, useState } from "react"
import Container from "../../shared/Container"
import { SITE_URL } from "../../utils"

const TrustedByLayout = () => {
	const [trusted, setTrusted] = useState([])

	const fetchTrusted = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/trust`).then(res => setTrusted(res.data))

	useEffect(() => {
		fetchTrusted()
	}, [])

	return (
		<div className="md:py-8 py-4 bg-[#F2F0F7]">
			<Container>
				<div className="flex items-center justify-center gap-8">
					<h2 className="text-lg text-center font-sansation-bold text-[#B7B1C0]">Trusted By:</h2>
					{trusted.map(trust => (
						<div
							className="h-8"
							key={trust.trustedID}>
							<img
								src={trust.trusted_img}
								alt=""
								className="h-full"
							/>
						</div>
					))}
				</div>
			</Container>
		</div>
	)
}

export default TrustedByLayout
