import Container from "../../../shared/Container"

const HeroPage = ({ bg, heading }) => {
	return (
		<div className="relative overflow-hidden md:h-[70vh]">
			<div className="absolute inset-0 -z-10">
				<img
					src={bg}
					className="object-cover w-full h-full"
				/>
			</div>
			<Container>
				<div className="flex justify-start items-end px-4 py-20 md:h-[70vh]">
					<h1 className="text-5xl md:text-6xl max-w-[15rem] font-sansation-bold text-zinc-50">{heading}</h1>
				</div>
			</Container>
		</div>
	)
}

export default HeroPage
