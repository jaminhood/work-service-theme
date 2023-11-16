import { useState } from "react"
import faq_img from "../../../assets/imgs/faqs.jpg"
import Container from "../Container"
import Accordion from "./Accordion"

const FAQs = () => {
 const [accordionState, setAccordionState] = useState(0)

 const toggleAccordionState = (id) => {
  setAccordionState(id)
 }

 return (
  <section className="py-20 border-t">
   <Container>
    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-3">
     <div className="col-span-1">
      <div className="overflow-hidden rounded-lg">
       <img src={faq_img} className="object-cover w-full h-full" />
      </div>
     </div>
     <div className="col-span-1 md:col-span-2">
      <h2 className="text-2xl font-sansation-bold text-main-primary">Frequently Asked Question(s).</h2>
      <p className="py-4 my-4 text-base font-jost-regular">
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      {[1, 2, 3, 4].map((data) => (
       <Accordion key={data} data={data} accordionState={accordionState} toggleAccordionState={toggleAccordionState} />
      ))}
     </div>
    </div>
   </Container>
  </section>
 )
}

export default FAQs
