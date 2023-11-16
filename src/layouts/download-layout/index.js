import Container from "../../shared/Container"
import Button from "../../shared/button"

const DownloadLayout = () => {
	return (
		<div className="py-12 bg-zinc-50">
			<Container>
				<div className="grid grid-cols-3 gap-8 px-20">
					<h3 className="text-4xl font-bold text-main-primary">Download App</h3>
					<Button size="l">Google Play</Button>
					<Button size="l">Apple Store</Button>
				</div>
			</Container>
		</div>
	)
}

export default DownloadLayout
