import ContentBox from "../../shared/ContentBox"
import { ContactFormSection } from "./components/ContactFormSection"
import { ContactInfo } from "./components/ContactInfo"

const GetInTouch = () => {
	return (
		<ContentBox cls="bg-[#EEEBF4]">
			<div className="grid items-center grid-cols-2 gap-24">
				<ContactFormSection />
				<ContactInfo />
			</div>
		</ContentBox>
	)
}

export default GetInTouch
