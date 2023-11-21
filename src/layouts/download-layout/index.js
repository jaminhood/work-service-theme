import Container from "../../shared/Container"
import { Btn } from "../../shared/btn"
import { Icon } from "../../shared/icon"

const DownloadLayout = () => {
	return (
		<div className="pb-12 bg-zinc-50">
			<Container>
				<div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:px-20">
					<h3 className="text-4xl text-center md:text-left col-span-2 md:col-span-1 font-bold text-main-primary">Download App</h3>
					<Btn
						size="lg"
						cls="bg-main-secondary text-zinc-50 rounded-2xl">
						<span>
							<Icon
								name="playstore"
								width="25px"
								height="24px"
								fill="#F0FECD"
							/>
						</span>
						<span className="font-jost-regular">Google Play</span>
					</Btn>
					<Btn
						size="lg"
						cls="bg-main-primary text-zinc-50 rounded-2xl">
						<span>
							<Icon
								name="apple"
								width="25px"
								height="24px"
								fill="#F0FECD"
							/>
						</span>
						<span className="font-jost-regular">Apple Store</span>
					</Btn>
				</div>
			</Container>
		</div>
	)
}

export default DownloadLayout
