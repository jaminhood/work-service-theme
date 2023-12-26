import Heading from "../../../shared/Heading"
import ContactForm from "./ContactForm"

const ContactFormSection = () => {
	return (
		<div>
			<Heading>
				<span className="inline-block w-full text-left font-sansation-bold">
					Get In <span className="underline font-sansation-bold">Touch</span>
				</span>
			</Heading>
			<h3 className="text-2xl font-bold text-zinc-800 font-sansation-regular">Send a message</h3>
			<p className="mt-3 text-lg text-zinc-900 font-jost-regular">Have feedback for us? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>
			<ContactForm />
		</div>
	)
}

export { ContactFormSection }
