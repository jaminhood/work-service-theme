import ContactInfoBox from "./ContactInfoBox"
import axios from "axios"
import { useState, useEffect } from "react"
import { SITE_URL } from "../../../../constants"

const ContactInfo = () => {
 const [contact, useContact] = useState([])

 useEffect(async () => {
  await axios.get(`${SITE_URL}wp-json/ws-api/v1/contact/get`).then((res) => {
   useContact(res.data)
   console.log(res.data)
  })
 }, [])

 return (
  <div className="grid grid-cols-1 col-span-1 gap-4">
   <ContactInfoBox info_type="phone" info={contact.contact_phone} />
   <ContactInfoBox info_type="email" info={contact.contact_email} />
   <ContactInfoBox info_type="location" info={contact.contact_address} />
  </div>
 )
}

export default ContactInfo
