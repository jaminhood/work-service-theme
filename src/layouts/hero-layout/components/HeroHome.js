import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import Container from "../../../shared/Container"
import Button from "../../../shared/button"
import { heroSlides } from "../../../utils"

const HeroHome = () => {
	const controls = useAnimation()
	const [currentSlide, setCurrentSlide] = useState(0)

	const totalSlides = heroSlides.length

	const nextSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide()
			controls.start({ opacity: 1 })
		}, 10000) // Adjust the delay (in milliseconds) between slides

		return () => clearInterval(interval)
	}, [controls])

	return (
		<div className="relative overflow-hidden md:h-screen">
			<div className="absolute inset-0 -z-10">
				{heroSlides.map((slide, i) => (
					<motion.div
						className="absolute inset-0 -z-20"
						key={i}
						initial={{ opacity: 0 }}
						animate={{
							opacity: i === currentSlide ? 1 : 0,
							transition: { duration: 1 },
						}}>
						<img
							src={slide}
							className="object-cover w-full h-full"
						/>
					</motion.div>
				))}
			</div>
			<Container>
				<div className="grid items-center md:grid-cols-2 md:h-screen">
					<div className="col-span-1 py-20 text-left">
						<h1 className="mt-4 mb-8 text-5xl md:mb-0 md:text-6xl font-sansation-bold text-zinc-50">Find an expert for every task, right away</h1>
						<div className="grid items-center grid-cols-1 mt-4 md:grid-cols-3">
							<div className="rounded-xl overflow-hidden border border-zinc-50">
								<Button
									size="l"
									outline={true}>
									Get Started
								</Button>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default HeroHome
