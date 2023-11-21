import ContentBox from "../../shared/ContentBox"
import Heading from "../../shared/Heading"
import { FAQAccordions } from "./components/FAQAccordions"
import { FAQFormSection } from "./components/FAQFormSection"

const FAQ = () => {
	return (
		<ContentBox cls="bg-[#F2F0F7]">
			<Heading>
				<span className="inline-block w-full text-left font-sansation-bold">
					Frequently <span className="underline font-sansation-bold">Asked</span> Questions
				</span>
			</Heading>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-24">
				<FAQAccordions />
				<FAQFormSection />
			</div>
		</ContentBox>
	)
}

export default FAQ
