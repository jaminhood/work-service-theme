import { Apple } from "./components/Apple"
import { ArrowRight } from "./components/ArrowRight"
import { Chat } from "./components/Chat"
import { Close } from "./components/Close"
import { DeleteAccount } from "./components/DeleteAccount"
import { Down } from "./components/Down"
import { Facebook } from "./components/Facebook"
import { Home } from "./components/Home"
import { IG } from "./components/IG"
import { InviteAFriend } from "./components/InviteAFriend"
import { Lock } from "./components/Lock"
import { Mail } from "./components/Mail"
import { MapPin } from "./components/MapPin"
import { Menu } from "./components/Menu"
import { MyRequests } from "./components/MyRequests"
import { Off } from "./components/Off"
import { Phone } from "./components/Phone"
import { Playstore } from "./components/Playstore"
import { ResetPassword } from "./components/ResetPassword"
import { Shield } from "./components/Shield"
import { Unlock } from "./components/Unlock"
import { User } from "./components/User"
import { WhatsApp } from "./components/WhatsApp"
import { WorkService } from "./components/WorkService"

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
		case "apple":
			return <Apple {...props} />
		case "playstore":
			return <Playstore {...props} />
		case "close":
			return <Close {...props} />
		case "menu":
			return <Menu {...props} />
		case "lock":
			return <Lock {...props} />
		case "unlock":
			return <Unlock {...props} />
		case "home":
			return <Home {...props} />
		case "work-service":
			return <WorkService {...props} />
		case "chat":
			return <Chat {...props} />
		case "user":
			return <User {...props} />
		case "off":
			return <Off {...props} />
		case "arrow-right":
			return <ArrowRight {...props} />
		case "reset-password":
			return <ResetPassword {...props} />
		case "delete-account":
			return <DeleteAccount {...props} />
		case "shield":
			return <Shield {...props} />
		case "my-requests":
			return <MyRequests {...props} />
		case "invite-a-service":
			return <InviteAFriend {...props} />
		default:
			return <WorkService {...props} />
	}
}

export { Icon }
