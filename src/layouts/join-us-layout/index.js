import bg from "../../assets/imgs/join-us-bg.png"
import joinUsImg from "../../assets/imgs/join-us-img.png"
import ContentBox from "../../shared/ContentBox"

const JoinUsLayout = () => {
	return (
		<div className="relative overflow-hidden">
			<div className="absolute inset-0 -z-10">
				<img
					src={bg}
					className="object-cover w-full h-full"
				/>
			</div>
			<ContentBox>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-center">
					<div className="col-span-1 md:col-span-2">
						<div className="">
							<h2 className="text-3xl font-bold leading-8 tracking-tight text-main-primary sm:text-4xl sm:leading-10">Join Us Today</h2>
							<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-xl font-jost-regular">
								Discover the Work Service difference for yourself. Whether you're a seasoned professional looking to expand your clientele or a service seeker in need of an expert's touch, we're here to bring
								you together. Join our growing community and experience the future of service access.
							</p>
						</div>
					</div>
					<div className="col-span-1">
						<img
							src={joinUsImg}
							alt=""
							className="object-cover w-full"
						/>
					</div>
				</div>
			</ContentBox>
		</div>
	)
}

export default JoinUsLayout
