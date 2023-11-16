import logo_light from "../../../assets/imgs/word-logo.png"
import Container from "../../../shared/Container"
import { SITE_URL, headerNavBtns, headerNavLinks } from "../../../utils"

const DesktopHeader = () => {
	return (
		<div class="absolute top-0 left-0 z-50 w-full bg-transparent text-zinc-50 flex items-center justify-center">
			<Container>
				<div class="h-20 flex justify-between items-center">
					<span>
						<a
							href={SITE_URL}
							className="relative z-50">
							<img
								src={logo_light}
								className="object-cover h-8"
							/>
						</a>
					</span>
					<nav className="flex items-center justify-center bg-transparent relative gap-8">
						<ul className="flex items-center justify-center gap-8">
							{headerNavLinks.map(link => (
								<li key={link.path}>
									<a
										href={link.path}
										className={`font-sansation-bold capitalize text-zinc-50`}>
										{link.render}.
									</a>
								</li>
							))}
						</ul>
						<ul className="flex items-center justify-center gap-8">
							{headerNavBtns.map(
								link =>
									link.desktop && (
										<li key={link.action}>
											<button className={`focus:outline-[0] border-2 border-zinc-50 rounded-2xl py-1 px-6 font-sansation-bold capitalize text-zinc-50`}>{link.render}.</button>
										</li>
									),
							)}
						</ul>
					</nav>
				</div>
			</Container>
		</div>
	)
}

export default DesktopHeader
