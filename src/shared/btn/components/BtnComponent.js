import React from "react"

const BtnComponent = ({ cls, children, handleClick, size }) => {
	return (
		<button
			onClick={handleClick}
			className={`font-sansation-bold focus:outline-[0] text-sm md:text-base capitalize transition-all duration-500 ease-in-out inline-flex justify-center items-center gap-4 ${cls} ${size}`}>
			{children}
		</button>
	)
}

export { BtnComponent }
