import { BiChevronDown } from "react-icons/bi"
import { useState } from "react"

const Accordion = ({ data, accordionState, toggleAccordionState }) => {
 const [isOpened, setIsOpened] = useState(accordionState === data ? true : false)

 const toggleIsOpened = () => {
  setIsOpened((prev) => !prev)
  toggleAccordionState(data)
 }

 return (
  <div className="my-2 overflow-hidden rounded-md">
   <div className={`flex items-center justify-between px-4 py-2 cursor-pointer ${isOpened ? `bg-main-primary text-zinc-50` : `bg-zinc-300 text-main-primary`}`} onClick={toggleIsOpened}>
    <span>Accordion Header</span>
    <span>
     <BiChevronDown size={15} className={`transition-all ease-in-out duration-500 ${isOpened ? `rotate-180` : ``}`} />
    </span>
   </div>
   <div className={`grid items-center ${isOpened ? `grid-rows-[1fr]` : `grid-rows-[0fr]`} overflow-hidden bg-zinc-200 text-main-primary transition-[grid-template-rows] ease-in-out duration-500`}>
    <div className="overflow-hidden">
     <p className="px-4 py-2 text-sm">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
      their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
     </p>
    </div>
   </div>
  </div>
 )
}

export default Accordion
