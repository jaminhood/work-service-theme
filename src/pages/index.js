import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
// import "../index.css"
import { clientPages } from "./clientPages"
import { customerPages } from "./customerPages"

const pages = () => {
	clientPages()
	customerPages()
}

export { pages }
