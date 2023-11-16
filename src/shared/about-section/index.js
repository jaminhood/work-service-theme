import about_img from "../../../assets/imgs/about_img.jpg"
import { SITE_URL } from "../../constants"
import Container from "../Container"
import Button from "../button"
import axios from "axios"
import { useState, useEffect } from "react"

const AboutSection = () => {
 const url = window.location.href
 const nameFromURL = url.split(`/`)
 nameFromURL.pop()
 const page_name = nameFromURL.pop()

 const [paragraph, useParagraph] = useState(``)

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/about/get`).then((res) => {
   useParagraph(res.data.about_paragraph)
  })
 }, [])

 return (
  <section className="py-20">
   <Container>
    <div className="grid items-center gap-12 md:grid-cols-2">
     <div className="col-span-1 text-center md:text-left">
      <h2 className="text-2xl font-sansation-bold text-main-primary">About Work Service.</h2>
      <p className="py-4 my-4 text-base font-jost-regular">{paragraph}</p>
      {page_name !== `about` && (
       <div className="grid items-center gap-4 md:grid-cols-3">
        <Button size="l" content="Read About Us." />
       </div>
      )}
     </div>
     <div className="col-span-1">
      <div className="overflow-hidden rounded-lg">
       <img src={about_img} className="object-cover w-full h-full" />
      </div>
     </div>
    </div>
   </Container>
  </section>
 )
}

export default AboutSection
