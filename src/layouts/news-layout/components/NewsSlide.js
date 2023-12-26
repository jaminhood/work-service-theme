const NewsSlide = ({ news }) => {
	return (
		<div className="w-full">
			<img
				src={news.banner_img}
				alt=""
				className="object-cover w-full h-full"
			/>
		</div>
	)
}

export { NewsSlide }
