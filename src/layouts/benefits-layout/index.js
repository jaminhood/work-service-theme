// import axios from "axios"
// import { useEffect, useState } from "react"
// import benefitsImg from "../../../../assets/imgs/service-1.png"
// import { SITE_URL } from "../../../constants"
import Container from "../../shared/Container"
import BenefitsCard from "./components/BenefitsCard"

const BenefitsLayout = () => {
	//  const [benefits, useBenefits] = useState([])

	//  useEffect(async () => {
	//   await axios.get(`${SITE_URL}wp-json/ws-api/v1/reason/get`).then((res) => {
	//    useBenefits(res.data)
	//   })
	//  }, [])

	return (
		<div className="relative px-4 py-20 bg-[#D4CBED]">
			<Container>
				<h2 className="text-4xl md:text-5xl text-center font-sansation-bold text-main-primary mb-4">Why Choose Us?</h2>
				<div className="grid items-center grid-cols-1 gap-8 md:grid-cols-3">
					{[1, 2, 3].map(benefit => (
						<BenefitsCard
							key={benefit}
							benefit={benefit}
						/>
					))}
				</div>
			</Container>
		</div>
	)
}

export default BenefitsLayout
