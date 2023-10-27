import React from "react"
import Container from "../../../shared/Container"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import axios from "axios"
import { useState, useEffect } from "react"
import { SITE_URL } from "../../../constants"

const settings = {
 dots: false,
 arrows: true,
 infinite: true,
 autoplay: true,
 autoplaySpeed: 3000,
 speed: 500,
 slidesToShow: 1,
 slidesToScroll: 1,
}
const HomeNews = () => {
 const [news, useNews] = useState([])

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/news/get`).then((res) => {
   useNews(res.data)
  })
 }, [])

 return (
  <section className="py-20 bg-zinc-50">
   <Container>
    <div className="w-full overflow-hidden">
     <Slider {...settings}>
      {news.map((news) => (
       <div key={news.banner_id}>
        <img src={news.banner_img} alt="" className="object-cover w-full h-full" />
       </div>
      ))}
     </Slider>
    </div>
   </Container>
  </section>
 )
}

export default HomeNews
