import { BsFillHouseDoorFill } from "react-icons/bs"
import { BiEnvelope } from "react-icons/bi"
import { BsTelephoneFill } from "react-icons/bs"

const ContactInfoBox = ({ info_type, info }) => {
 return (
  <div className="flex items-center gap-4 p-4 shadow-md rounded-xl bg-zinc-200 text-main-primary">
   <span className="flex items-center justify-center w-12 h-12 rounded-full bg-main-primary text-zinc-50">
    {info_type === `phone` ? <BsTelephoneFill size={20} /> : info_type === `email` ? <BiEnvelope size={20} /> : <BsFillHouseDoorFill size={20} />}
   </span>
   <div className="flex flex-col justify-between">
    <h5 className="text-base font-sansation-bold">{info_type === `phone` ? `Phone Number` : info_type === `email` ? `E-mail` : `Address`}</h5>
    <p className="text-sm opacity-70 font-jost-regular">{info}</p>
   </div>
  </div>
 )
}

export default ContactInfoBox
