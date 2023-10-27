import { SITE_URL } from "../../../constants"
import Container from "../../Container"
import logo_dark from "../../../../assets/imgs/logo-dark.png"
import HeaderNavBar from "./HeaderNavBar"
import { motion } from "framer-motion"
import HeaderCategories from "./HeaderCategories"

const FixedHeader = () => {
  return (
    <motion.header
      class={`fixed top-0 left-0 z-50 w-full bg-transparent text-zinc-50 flex items-center flex-col justify-center shadow-md`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full bg-zinc-50 text-main-primary">
        <Container>
          <div class="h-20 flex justify-between items-center relative z-50">
            <motion.span initial={{ x: "-100%" }} animate={{ x: 0 }}>
              <a href={SITE_URL} class="relative z-50">
                <img src={logo_dark} className="object-cover w-16" />
              </a>
            </motion.span>
            <HeaderNavBar fixed={true} isOpened={false} />
          </div>
        </Container>
      </div>
      <HeaderCategories fixed={true} isOpened={false} />
    </motion.header>
  )
}

export default FixedHeader
