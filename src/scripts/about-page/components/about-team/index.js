import Container from "../../../shared/Container"
import AboutTeamCard from "./components/AboutTeamCard"
import axios from "axios"
import { useState, useEffect } from "react"
import { SITE_URL } from "../../../constants"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

const settings = {
 dots: true,
 arrows: false,
 infinite: true,
 autoplay: true,
 autoplaySpeed: 3000,
 speed: 500,
 slidesToShow: 3,
 slidesToScroll: 1,
}

const AboutTeam = () => {
 const [team, useTeam] = useState([])

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/team/get`).then((res) => {
   useTeam(res.data)
   console.log(res.data)
  })
 }, [])

 return (
  <section className="py-20 border-t border-t-zinc-300 bg-zinc-300">
   <Container>
    <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-3">
     <div className="col-span-1 md:col-span-3">
      <h3 className="text-4xl text-center font-sansation-bold text-main-primary">Meet The Management</h3>
     </div>
     {team.length < 3 ? (
      team.map((data) => <AboutTeamCard key={data.team_id} team={data} />)
     ) : (
      <div className="md:col-span-3">
       <Slider {...settings}>
        {team.map((data) => (
         <AboutTeamCard key={data.team_id} team={data} />
        ))}
       </Slider>
      </div>
     )}
    </div>
   </Container>
  </section>
 )
}

export default AboutTeam
