import banner_img from "../../../assets/imgs/news-banner.png"

const NewsSlide = () => {
	return (
		<div className="w-full h-full">
			<img
				src={banner_img}
				alt=""
				className="object-cover w-full"
			/>
		</div>
	)
}

export { NewsSlide }
