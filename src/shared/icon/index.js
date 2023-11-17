import { Down } from "./components/Down"
import { Facebook } from "./components/Facebook"
import { IG } from "./components/IG"
import { Mail } from "./components/Mail"
import { MapPin } from "./components/MapPin"
import { Phone } from "./components/Phone"
import { WhatsApp } from "./components/WhatsApp"

const Icon = props => {
	switch (props.name.toLowerCase()) {
		case "map-pin":
			return <MapPin {...props} />
		case "mail":
			return <Mail {...props} />
		case "whatsapp":
			return <WhatsApp {...props} />
		case "ig":
			return <IG {...props} />
		case "facebook":
			return <Facebook {...props} />
		case "phone":
			return <Phone {...props} />
		case "down":
			return <Down {...props} />
		default:
			return <div>Icon</div>
	}
}

export { Icon }
