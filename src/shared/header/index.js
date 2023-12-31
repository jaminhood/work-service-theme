import { useState, useEffect } from "react"
// import { BiMenuAltRight } from "react-icons/bi"
// import { AiOutlineCloseCircle } from "react-icons/ai"
// import logo_light from "../../../assets/imgs/logo-light.png"
// import logo_dark from "../../../assets/imgs/logo-dark.png"
// import { SITE_URL } from "../../constants"
// import Container from "../Container"
// import HeaderNavBar from "./components/HeaderNavBar"
// import HeaderFixed from "./components/HeaderFixed"
import GeneralHeader from "./components/GeneralHeader"
import FixedHeader from "./components/FixedHeader"
import useDeviceType from "../../hooks/useDeviceType"
import MobileFixedHeader from "./components/MobileFixedHeader"

const Header = () => {
  const { isMobile } = useDeviceType()
  // const url = window.location.href
  // const [isOpened, setIsOpened] = useState(false)
  // const [isTop, setIsTop] = useState(false)

  // const toggleOpened = () => setIsOpened((prev) => !prev)

  // Add an event listener to handle the scroll position
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const scrollPosition = window.scrollY

      if (scrollPosition > 300) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    })
  }, [])

  return <>{isMobile ? isFixed ? <MobileFixedHeader /> : <GeneralHeader /> : isFixed ? <FixedHeader /> : <GeneralHeader />}</>

  // if (isTop === true) {
  //   // return <FixedHeader />
  //   return <>Hello</>
  // }

  // return <GeneralHeader />
  // return <>Hi</>
  // const light = url.includes(`about`) || url.includes(`contact`) || url === SITE_URL

  // return (
  //   <header class="absolute top-0 left-0 z-50 w-full bg-transparent text-zinc-50 flex items-center justify-center">
  //     <Container>
  //       <div class="border-b border-b-zinc-400 h-20 flex justify-between items-center">
  //         <span>
  //           <a href={SITE_URL} class="relative z-50">
  //             {light ? <img src={logo_light} className="object-cover w-16" /> : <img src={logo_dark} className="object-cover w-16" />}
  //           </a>
  //         </span>
  //         <span onClick={toggleOpened} className="relative z-50 cursor-pointer md:hidden">
  //           {isOpened ? <AiOutlineCloseCircle size={40} /> : <BiMenuAltRight size={40} />}
  //         </span>
  //         <HeaderNavBar isOpened={isOpened} colored={light} />
  //       </div>
  //     </Container>
  //   </header>
  // )
}

export default Header
