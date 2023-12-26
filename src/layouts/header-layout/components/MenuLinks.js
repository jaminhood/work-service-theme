import { getURL, headerNavLinks } from "../../../utils"

const MenuLinks = ({ className, mobile }) => {
	return (
		<ul className={`flex items-center justify-center gap-8 ${mobile ? `flex-col` : ``}`}>
			{headerNavLinks.map(link => (
				<li key={link.path}>
					<a
						href={getURL(link.path)}
						className={`font-sansation-bold capitalize ${className}`}>
						{link.render}
					</a>
				</li>
			))}
		</ul>
	)
}

export { MenuLinks }
