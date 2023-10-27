import { SITE_URL } from "../../constants"

const ServiceBox = ({ service }) => {
 return (
  <a href={`${SITE_URL}ws-login/sign-in`} className="relative z-0 flex flex-col items-end justify-end p-4 mx-4 overflow-hidden shadow-md bg-zinc-200 h-80">
   <div className="absolute inset-0 before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-main-primary before:opacity-70 -z-10">
    <img src={service.service_icon} className="object-cover w-full h-full" />
   </div>
   <div className="relative z-10 p-2 text-zinc-50">
    <h4 className="pb-0 mb-0 text-2xl font-sansation-bold">{service.service_name}</h4>
   </div>
  </a>
 )
}

export default ServiceBox
