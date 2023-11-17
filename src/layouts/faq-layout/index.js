import ContentBox from "../../shared/ContentBox"
import { FAQFormSection } from "./components/FAQFormSection"
import { FAQInfo } from "./components/FAQInfo"

const FAQ = () => {
	return (
		<ContentBox cls="bg-[#F2F0F7]">
			<div className="grid items-center grid-cols-2 gap-24">
				<FAQInfo />
				<FAQFormSection />
			</div>
		</ContentBox>
	)
}

export default FAQ
