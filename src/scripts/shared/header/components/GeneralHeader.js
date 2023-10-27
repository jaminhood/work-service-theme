import logo_light from "../../../../assets/imgs/logo-light.png"
import { SITE_URL } from "../../../constants"
import Container from "../../Container"
import HeaderNavBar from "./HeaderNavBar"

const GeneralHeader = () => {
  return (
    <header class="absolute top-0 left-0 z-50 w-full bg-transparent text-zinc-50 flex items-center justify-center">
      <Container>
        <div class="h-20 flex justify-between items-center">
          <span>
            <a href={SITE_URL} className="relative z-50">
              <img src={logo_light} className="object-cover w-16" />
            </a>
          </span>
          <HeaderNavBar isOpened={false} colored={true} />
        </div>
      </Container>
    </header>
  )
}

export default GeneralHeader
