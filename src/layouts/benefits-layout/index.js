import axios from "axios"
import { useEffect, useState } from "react"
import Container from "../../shared/Container"
import { SITE_URL } from "../../utils"
import BenefitsCard from "./components/BenefitsCard"

const BenefitsLayout = () => {
	const [benefits, useBenefits] = useState([])

	const getBenefits = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/reason`).then(res => useBenefits(res.data))

	useEffect(() => {
		getBenefits()
	}, [])

	return (
		<div className="relative px-4 py-20 bg-[#D4CBED]">
			<Container>
				<h2 className="mb-4 text-4xl text-center md:text-5xl font-sansation-bold text-main-primary">Why Choose Us?</h2>
				<div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
					{benefits.map((benefit, idx) => (
						<BenefitsCard
							key={idx}
							benefit={benefit}
							idx={idx}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

export default BenefitsLayout
