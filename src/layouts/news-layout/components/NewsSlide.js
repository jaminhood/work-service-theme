const NewsSlide = ({ news }) => {
	return (
		<div className="h-[70vh]">
			<img
				src={news.banner_img}
				alt=""
				className="object-cover w-full h-full"
			/>
		</div>
	)
}

export { NewsSlide }
