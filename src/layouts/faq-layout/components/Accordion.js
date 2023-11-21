import { motion } from "framer-motion"
import { useState } from "react"
import { Icon } from "../../../shared/icon"

const Accordion = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => setIsOpen(prev => !prev)

	return (
		<div className="w-full py-2">
			<div
				className="flex justify-between items-center w-full"
				onClick={handleClick}>
				<h4 className="text-2xl font-sansation-bold font-bold text-main-primary">What is Work Service?</h4>
				<span className={`cursor-pointer transition-all ease-in-out duration-300 ${isOpen ? `rotate-180` : `rotate-0`}`}>
					<Icon {...{ name: "down", width: "24px", height: "24px", fill: "#5E4A96" }} />
				</span>
			</div>
			{isOpen && (
				<motion.div
					className="flex justify-between items-center"
					initial={{ opacity: 0, top: `-100%` }}
					animate={{
						opacity: 1,
						top: 0,
						transition: { duration: 1 },
					}}>
					<p className="mt-3 text-lg text-zinc-900 font-jost-regular">Have feedback for us? We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>/
				</motion.div>
			)}
		</div>
	)
}

export { Accordion }
