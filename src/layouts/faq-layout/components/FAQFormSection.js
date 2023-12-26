import { FAQForm } from "./FAQForm"

const FAQFormSection = () => {
	return (
		<div>
			<h3 className="text-3xl font-bold text-zinc-800 font-sansation-regular">Ask a different question</h3>
			<p className="mt-3 text-xl text-zinc-900 font-jost-regular">Fill the form below to ask a different question that is not in the FAQ list.</p>
			<FAQForm />
		</div>
	)
}

export { FAQFormSection }
