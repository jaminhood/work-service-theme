import useThemeContext from "../../../context/theme/useThemeContext"
import useDeviceType from "../../../hooks/useDeviceType"
import Container from "../../../shared/Container"
import { Btn } from "../../../shared/btn"

const HeroContent = () => {
	const { isMobile } = useDeviceType()
	const { handleOpenModal } = useThemeContext()

	const handleClick = () => handleOpenModal(`auth-signup`)

	return (
		<Container>
			<div className="grid md:items-center md:grid-cols-2 md:h-screen">
				<div className="col-span-1 pt-12 pb-40 md:py-20 text-left">
					<h1 className={`mt-4 mb-8 text-3xl md:mb-0 ${isMobile ? `text-center` : `text-left`} md:text-6xl font-sansation-bold text-zinc-50`}>Find an expert for every task, right away</h1>
					<div className="grid items-center mt-4 grid-cols-4">
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
