import { AiOutlineWhatsApp } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import logo from "../../../assets/imgs/logo-light.png"
import { SITE_URL } from "../../constants"
import Container from "../Container"
import axios from "axios"
import { useState, useEffect } from "react"

const Footer = () => {
 const [contact, useContact] = useState([])

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/contact/get`).then((res) => {
   useContact(res.data)
  })
 }, [])

 return (
  <footer className="px-4 py-16 text-center bg-main-primary">
   <Container>
    <div class="border-b border-b-zinc-400 pb-4 flex justify-center flex-col items-center">
     <div>
      <a href={SITE_URL}>
       <img src={logo} className="object-cover w-32" />
      </a>
     </div>
     <div className="flex items-center justify-center gap-4 py-8 text-zinc-50">
      <a href={contact.contact_facebook} target="_blank">
       <AiFillLinkedin size={40} />
      </a>
      <a href={contact.contact_instagram} target="_blank">
       <AiOutlineInstagram size={40} />
      </a>
      <a href={contact.contact_whatsapp} target="_blank">
       <AiOutlineWhatsApp size={40} />
      </a>
     </div>
    </div>
    <div class="flex justify-center flex-col items-center">
     <p className="py-4 text-base font-jost-regular text-zinc-300">&copy; {new Date().getFullYear()} Work Service. All Rights Reserved.</p>
    </div>
   </Container>
  </footer>
 )
}

export default Footer
