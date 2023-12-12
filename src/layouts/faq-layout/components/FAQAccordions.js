import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../utils"
import { Accordion } from "./Accordion"

const FAQAccordions = () => {
	const [faqs, setFaqs] = useState([])

	const getFAQData = async () => await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/faqs`).then(({ data }) => setFaqs(data))

	useEffect(() => {
		getFAQData()
	}, [])

	return (
		<div>
			{faqs.map((data, idx) => (
				<Accordion
					data={data}
					key={idx}
				/>
			))}
		</div>
	)
}

export { FAQAccordions }
