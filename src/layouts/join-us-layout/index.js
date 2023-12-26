import bg from "../../assets/imgs/join-us-bg.png"
import joinUsImg from "../../assets/imgs/join-us-img.png"
import ThemeProvider from "../../context/theme/ThemeProvider"
import useThemeContext from "../../context/theme/useThemeContext"
import ContentBox from "../../shared/ContentBox"
import { Btn } from "../../shared/btn"
import { SITE_URL } from "../../utils"

const JoinUsLayout = () => {
	const { handleOpenModal } = useThemeContext()

	const handleClick = () => {
		const token = localStorage.getItem(`ws-token`)
		if (!token || token === ``) {
			handleOpenModal(`auth-signup`)
			return
		}

		location.replace(`${SITE_URL}/ws-customer/dashboard/`)
	}

	return (
		<ThemeProvider>
			<div className="relative overflow-hidden">
				<div className="absolute inset-0 -z-10">
					<img
						src={bg}
						className="object-cover w-full h-full"
					/>
				</div>
				<ContentBox>
					<div className="grid items-center grid-cols-1 gap-24 md:grid-cols-3">
						<div className="col-span-1 md:col-span-2">
							<div className="">
								<h2 className="text-3xl font-bold leading-8 tracking-tight text-[#514e56] sm:text-4xl sm:leading-10 font-sansation-bold">Join Us Today</h2>
								<p className="mt-3 text-base text-[#514e56] md:mt-5 md:text-xl font-jost-regular">
									Discover the Work Service difference for yourself. Whether you're a seasoned professional looking to expand your clientele or a service seeker in need of an expert's touch, we're here to
									bring you together. Join our growing community and experience the future of service access.
								</p>
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
						<div className="col-span-1">
							<img
								src={joinUsImg}
								alt=""
								className="object-cover w-full"
							/>
						</div>
					</div>
				</ContentBox>
			</div>
		</ThemeProvider>
	)
}

export default JoinUsLayout
