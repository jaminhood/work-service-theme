import useThemeContext from "../../../context/theme/useThemeContext"
import useDeviceType from "../../../hooks/useDeviceType"
import Container from "../../../shared/Container"
import { Btn } from "../../../shared/btn"
import { getURL } from "../../../utils"

const HeroContent = () => {
	const { isMobile } = useDeviceType()
	const { handleOpenModal, getUserProfile } = useThemeContext()

	const handleClick = async () => {
		const token = localStorage.getItem(`ws-token`)
		if (!token || token === ``) {
			handleOpenModal(`auth-signin`)
			return
		}

		const profile = await getUserProfile()
		location.replace(getURL(`ws-${profile.role}/dashboard/`))
	}

	return (
		<Container>
			<div className="grid md:items-center md:grid-cols-2 md:h-screen">
				<div className="col-span-1 pt-20 text-left md:py-20">
					<h1 className={`mt-4 mb-8 text-[32px] md:mb-0 ${isMobile ? `text-center` : `text-left`} md:text-6xl font-sansation-bold text-zinc-50 leading-10`}>
						Find an Expert for {isMobile && <br />} every Task, right away
					</h1>
					<div className="grid items-center grid-cols-4 md:mt-4">
						<Btn
							size="lg"
							handleClick={handleClick}
							cls="bg-zinc-50 text-main-primary rounded-2xl col-start-2 md:col-start-1 col-span-2">
							Get Started
						</Btn>
					</div>
				</div>
			</div>
		</Container>
	)
}

export { HeroContent }
