import useDeviceType from "../../hooks/useDeviceType"
import DesktopHeader from "./components/DesktopHeader"
import MobileHeader from "./components/MobileHeader"

const HeaderLayout = () => {
	const { isMobile } = useDeviceType()

	return <>{isMobile ? <MobileHeader /> : <DesktopHeader />}</>
}

export default HeaderLayout
