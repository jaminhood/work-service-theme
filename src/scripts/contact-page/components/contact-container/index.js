import Container from "../../../shared/Container"
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"

const ContactContainer = () => {
 return (
  <section className="py-20 bg-zinc-50">
   <Container>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
     <ContactInfo />
     <ContactForm />
    </div>
   </Container>
  </section>
 )
}

export default ContactContainer
