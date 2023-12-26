import loading from "../../assets/imgs/loading.gif"

const Loader = () => {
	return (
		<div className="fixed top-0 left-0 bottom-0 right-0 z-[9999999999] bg-white flex justify-center items-center">
			<img
				src={loading}
				alt="Loader"
			/>
		</div>
	)
}

export { Loader }
