import ContentBox from "../../shared/ContentBox"
import Heading from "../../shared/Heading"
import TeamBox from "./component/TeamBox"

const TeamLayout = () => {
	return (
		<ContentBox cls="bg-[#EEEBF4]">
			<Heading>
				Meet The <span className="underline font-sansation-bold">Team</span>
			</Heading>
			<div className="w-full max-w-xl grid grid-cols-3 gap-20 my-4 mx-auto">
				{[0, 1, 2].map(data => (
					<TeamBox key={data} />
				))}
			</div>
		</ContentBox>
	)
}

export default TeamLayout
