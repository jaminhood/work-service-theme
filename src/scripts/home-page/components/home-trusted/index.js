import axios from "axios"
import Container from "../../../shared/Container"
import { SITE_URL } from "../../../constants"
import { useEffect, useState } from "react"

const HomeTrusted = () => {
 const [trusted, setTrusted] = useState([])

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/trust/get`).then((res) => {
   setTrusted(res.data)
  })
 }, [])

 return (
  <section className="py-8 bg-zinc-200">
   <Container>
    <div className="flex items-center justify-center gap-4">
     <h2 className="text-lg text-center font-sansation-bold text-zinc-400">Trusted By:</h2>
     {trusted.map((trust) => (
      <div className="h-12" key={trust.trusted_id}>
       <img src={trust.trusted_img} alt="" className="h-full" />
      </div>
     ))}
    </div>
   </Container>
  </section>
 )
}

export default HomeTrusted
