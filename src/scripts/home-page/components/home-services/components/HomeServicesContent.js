import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { SITE_URL } from "../../../../constants"
import ServiceBox from "../../../../shared/service-box"

const settings = {
 dots: false,
 arrows: true,
 infinite: true,
 autoplay: true,
 autoplaySpeed: 3000,
 speed: 500,
 slidesToShow: 3,
 slidesToScroll: 1,
 responsive: [
  {
   breakpoint: 768,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
   },
  },
  {
   breakpoint: 600,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
   },
  },
 ],
}

const HomeServicesContent = () => {
 const [services, setServices] = useState([])

 const getAllServices = async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/services/get-all`).then((res) => {
   setServices(res.data)
  })
 }

 useEffect(async () => {
  await getAllServices()
 }, [])

 return (
  <div className="grid items-center grid-cols-1">
   <div className="col-span-1">
    <h2 className="mb-8 text-4xl font-sansation-bold text-main-primary">Featured Services.</h2>
   </div>
   {services.length < 4 ? (
    <div className="grid grid-cols-3 gap-4">
     {services.map((service) => (
      <ServiceBox service={service} key={service.service_id} />
     ))}
    </div>
   ) : (
    <Slider {...settings}>
     {services.map((service) => (
      <ServiceBox service={service} key={service.service_id} />
     ))}
    </Slider>
   )}
  </div>
 )
}

export default HomeServicesContent
