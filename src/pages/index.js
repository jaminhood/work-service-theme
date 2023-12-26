import "react-toastify/dist/ReactToastify.min.css"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
// import "../index.css"
import { clientPages } from "./clientPages"
import { customerPages } from "./customerPages"
import { expertPages } from "./expertPages"

const pages = () => {
	expertPages()
	clientPages()
	customerPages()
}

export { pages }
