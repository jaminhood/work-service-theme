import axios from "axios"
import { useEffect, useState } from "react"
import ContentBox from "../../shared/ContentBox"
import Heading from "../../shared/Heading"
import { SITE_URL } from "../../utils"
import ValueBox from "./components/ValueBox"

const ValuesLayout = () => {
	const [about, setAbout] = useState([])

	const fetchAbout = async () => {
		try {
			const response = await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/about`)
			console.log(response.data[0])
			setAbout(response.data[0])
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchAbout()
	}, [])

	return (
		<ContentBox cls="bg-[#D4CBED]">
			<Heading>
				<span className="underline font-sansation-bold">Core</span> Values
			</Heading>
			<div className="grid items-center grid-cols-2 gap-8 mt-8 md:grid-cols-4">
				<ValueBox
					title="Expertise"
					text={about.expertise}
				/>
				<ValueBox
					title="Convenience"
					text={about.convenience}
				/>
				<ValueBox
					title="Trust"
					text={about.trust}
				/>
				<ValueBox
					title="Innovation"
					text={about.innovation}
				/>
			</div>
		</ContentBox>
	)
}

export default ValuesLayout
