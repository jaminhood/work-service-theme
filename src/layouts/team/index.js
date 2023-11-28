import axios from "axios"
import { useEffect, useState } from "react"
import ContentBox from "../../shared/ContentBox"
import Heading from "../../shared/Heading"
import { SITE_URL } from "../../utils"
import TeamBox from "./component/TeamBox"

const TeamLayout = () => {
	const [team, setTeam] = useState([])

	const fetchNews = async () => {
		try {
			const response = await axios.get(`${SITE_URL}wp-json/ws-api/v1/admin/team`)
			console.log(response.data)
			setTeam(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchNews()
	}, [])

	return (
		<ContentBox cls="bg-[#EEEBF4]">
			<Heading>
				Meet The <span className="underline font-sansation-bold">Team</span>
			</Heading>
			<div className="grid w-full max-w-xl grid-cols-3 gap-8 mx-auto my-4 md:gap-20">
				{team.map(data => (
					<TeamBox
						key={data}
						user={data}
					/>
				))}
			</div>
		</ContentBox>
	)
}

export default TeamLayout
