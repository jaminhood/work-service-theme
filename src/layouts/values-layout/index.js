import ContentBox from "../../shared/ContentBox"
import Heading from "../../shared/Heading"
import ValueBox from "./components/ValueBox"

const ValuesLayout = () => {
	return (
		<ContentBox cls="bg-[#D4CBED]">
			<Heading>
				<span className="underline font-sansation-bold">Core</span> Values
			</Heading>
			<div className="grid items-center grid-cols-1 gap-8 md:grid-cols-4 mt-8">
				{[1, 2, 3, 4].map(data => (
					<ValueBox key={data} />
				))}
			</div>
		</ContentBox>
	)
}

export default ValuesLayout
