import { motion } from "framer-motion"
import { useState } from "react"
import { Icon } from "../../../shared/icon"

const Accordion = ({ data }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => setIsOpen(prev => !prev)

	return (
		<div className="w-full py-2">
			<div
				className="flex items-center justify-between w-full cursor-pointer"
				onClick={handleClick}>
				<h4 className="text-2xl font-bold font-sansation-bold text-main-primary">{data.faqQuestion}</h4>
				<span className={`cursor-pointer transition-all ease-in-out duration-300 ${isOpen ? `rotate-180` : `rotate-0`}`}>
					<Icon {...{ name: "down", width: "24px", height: "24px", fill: "#5E4A96" }} />
				</span>
			</div>
			{isOpen && (
				<motion.div
					className="flex items-center justify-between"
					initial={{ opacity: 0, top: `-100%` }}
					animate={{
						opacity: 1,
						top: 0,
						transition: { duration: 1 },
					}}>
					<p className="mt-3 text-lg text-zinc-900 font-jost-regular">{data.faqAnswer}</p>
				</motion.div>
			)}
		</div>
	)
}

export { Accordion }
