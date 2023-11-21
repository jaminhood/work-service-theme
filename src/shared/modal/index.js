import { motion } from "framer-motion"
import { Icon } from "../icon"

const Modal = ({ toggleOpen, children }) => {
	return (
		<motion.div
			className="fixed inset-0 z-[9999] flex items-center justify-center w-screen h-screen"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<div
				className="absolute inset-0 opacity-50 bg-main-primary -z-10 blur-sm"
				onClick={toggleOpen}></div>
			<motion.div
				className="relative w-full max-w-5xl rounded-md shadow-lg overflow-hidden bg-zinc-50"
				initial={{ top: `-100%`, opacity: 0 }}
				animate={{ top: 0, opacity: 1 }}
				exit={{ top: `100%`, opacity: 0 }}>
				<div className="overflow-hidden overflow-y-auto max-h-[90vh]">
					<span
						className="absolute top-8 right-8 z-50 cursor-pointer"
						onClick={toggleOpen}>
						<Icon
							name="close"
							width="13px"
							height="12px"
							stroke="#5E4A96"
						/>
					</span>
					{children}
				</div>
			</motion.div>
		</motion.div>
	)
}

export { Modal }
