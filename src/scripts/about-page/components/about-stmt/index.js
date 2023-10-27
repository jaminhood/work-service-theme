import Container from "../../../shared/Container"
import AboutStmtCard from "./components/AboutStmtCard"
import axios from "axios"
import { useState, useEffect } from "react"
import { SITE_URL } from "../../../constants"

const AboutStmt = () => {
 const [vision, useVision] = useState(``)
 const [mission, useMission] = useState(``)

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/about/get`).then((res) => {
   useVision(res.data.about_vision)
   useMission(res.data.about_mission)
  })
 }, [])

 return (
  <section className="py-20 border-t border-t-zinc-300 bg-zinc-50">
   <Container>
    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
     <AboutStmtCard title="Vision" para={vision} />
     <AboutStmtCard title="Mission" para={mission} />
    </div>
   </Container>
  </section>
 )
}

export default AboutStmt
