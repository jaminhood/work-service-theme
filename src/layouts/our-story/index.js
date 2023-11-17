import aboutBg from "../../assets/imgs/our-story.png"
import Container from "../../shared/Container"

const OurStory = () => {
	return (
		<div className="py-20 bg-[#EEEBF4]">
			<Container>
				<div className="grid grid-cols-3 gap-16 items-center">
					<div className="col-span-1">
						<img
							src={aboutBg}
							alt=""
							className="object-cover w-full"
						/>
					</div>
					<div className="col-span-2">
						<div className="">
							<h2 className="text-3xl font-bold leading-8 tracking-tight text-main-primary sm:text-4xl sm:leading-10">Our Story</h2>
							<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-xl font-jost-regular">
								At Work Service, we are more than just a platform connecting service seekers with skilled experts; we are the embodiment of a vision that began with a simple question: "How can we make expert
								services more accessible, reliable, and enjoyable for everyone?" Founded by a team of passionate individuals who recognized the need for a modern, user-centric approach to accessing expert
								services, Work Service has since grown into a platform that serves both individuals and businesses in diverse domains. Our journey began with the desire to empower people to find the right
								experts effortlessly, while ensuring professionals have a platform to showcase their skills and build successful careers.
							</p>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default OurStory
