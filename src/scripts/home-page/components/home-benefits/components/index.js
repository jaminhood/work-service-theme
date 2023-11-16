import Container from "../../../shared/Container"
import benefitsImg from "../../../../assets/imgs/service-1.png"
import HomeBenefitsCard from "./components/HomeBenefitsCard"
import axios from "axios"
import { useState, useEffect } from "react"
import { SITE_URL } from "../../../constants"

const HomeBenefits = () => {
 const [benefits, useBenefits] = useState([])

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/reason/get`).then((res) => {
   useBenefits(res.data)
  })
 }, [])

 return (
  <section className="relative px-4 py-20 bg-main-primary text-zinc-50">
   <Container>
    <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
     <div>
      <h2 className="text-5xl text-center md:text-left font-sansation-bold">Why Choose Us?</h2>
      <div className="px-8 my-12 border-l-4 border-l-zinc-400">
       {benefits.map((benefit) => (
        <HomeBenefitsCard key={benefit.benefit_id} benefit={benefit} />
       ))}
      </div>
     </div>
     <div>
      <div className="w-full">
       <img src={benefitsImg} className="object-cover w-full" />
      </div>
     </div>
    </div>
   </Container>
  </section>
 )
}

export default HomeBenefits
