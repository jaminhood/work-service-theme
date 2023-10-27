import { useState, useEffect } from "react"
import Container from "../../../shared/Container"
import CategoryContainerServices from "./components/CategoryContainerServices"

const CategoryContainer = () => {
 const [activeServices, setActiveServices] = useState(JSON.parse(localStorage.getItem(`theme-services`)))

 useEffect(() => {
  let msgs
  msgs = setInterval(async () => {
   setActiveServices(JSON.parse(localStorage.getItem(`theme-services`)))
  }, 500)

  return () => clearInterval(msgs)
 }, [])

 return (
  <section className="py-20">
   <Container>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
     <CategoryContainerServices categories={activeServices} />
    </div>
   </Container>
  </section>
 )
}

export default CategoryContainer
