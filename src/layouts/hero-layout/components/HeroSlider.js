import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

const HeroSlider = ({ heroSlides }) => {
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
		<div className="absolute inset-0 -z-10 h-screen">
			{heroSlides.map((slide, i) => (
				<motion.div
					className="absolute inset-0 -z-20 h-screen"
					key={i}
					initial={{ opacity: 0 }}
					animate={{
						opacity: i === currentSlide ? 1 : 0,
						transition: { duration: 1 },
					}}>
					<img
						src={slide}
						className="object-cover w-full h-screen"
					/>
				</motion.div>
			))}
		</div>
	)
}

export { HeroSlider }
