import { ImQuotesLeft } from "react-icons/im"

const AboutStmtCard = ({ title, para }) => {
 return (
  <div className="col-span-1">
   <div className="relative z-0 py-8 px-28 rounded-md shadow-md bg-zinc-300 text-main-primary min-h-[10rem]">
    <div className="absolute left-28 top-4 -z-10 opacity-30">
     <ImQuotesLeft size={100} />
    </div>
    <p className="pt-4 text-sm font-jost-regular opacity-70">{para}</p>
    <h4 className="text-sm text-right font-sansation-bold">~ {title}</h4>
   </div>
  </div>
 )
}

export default AboutStmtCard
