import { useState, useEffect } from "react"
import { SITE_URL } from "../../../constants"
import Container from "../../Container"
import logo_dark from "../../../../assets/imgs/logo-dark.png"
import HeaderNavBar from "./HeaderNavBar"
import { motion } from "framer-motion"
import HeaderCategories from "./HeaderCategories"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi"

const MobileFixedHeader = () => {
  const url = window.location.href
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  const [isCategoriesOpened, setIsCategoriesOpened] = useState(false)

  const setMenu = (menu) => {
    if (menu === `categories`) {
      setIsMenuOpened(false)
      setIsCategoriesOpened((prev) => !prev)
    }
    if (menu === `menu`) {
      setIsCategoriesOpened(false)
      setIsMenuOpened((prev) => !prev)
    }
  }

  const toggleMenuOpened = () => setMenu(`menu`)
  const toggleCategoriesOpened = () => setMenu(`categories`)

  useEffect(() => {
    setIsMenuOpened(false)
    setIsCategoriesOpened(false)
  }, [url])

  return (
    <motion.header class="fixed top-0 left-0 z-50 w-full bg-transparent text-zinc-50 flex items-center flex-col justify-center shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="w-full bg-zinc-50 text-main-primary">
        <Container>
          <div class="h-20 flex justify-between items-center relative z-50">
            <span onClick={toggleCategoriesOpened} className="relative z-50 cursor-pointer md:hidden">
              {isCategoriesOpened ? <AiOutlineCloseCircle size={40} /> : <BiMenuAltLeft size={40} />}
            </span>
            <motion.span initial={{ x: "-100%" }} animate={{ x: 0 }}>
              <a href={SITE_URL} class="relative z-50">
                <img src={logo_dark} className="object-cover w-16" />
              </a>
            </motion.span>
            <span onClick={toggleMenuOpened} className="relative z-50 cursor-pointer md:hidden">
              {isMenuOpened ? <AiOutlineCloseCircle size={40} /> : <BiMenuAltRight size={40} />}
            </span>
            <HeaderNavBar fixed={true} isOpened={isMenuOpened} />
          </div>
        </Container>
      </div>
      <HeaderCategories fixed={true} isOpened={isCategoriesOpened} />
    </motion.header>
  )
}

export default MobileFixedHeader
