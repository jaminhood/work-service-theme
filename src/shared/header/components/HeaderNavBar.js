import { headerNavLinks } from "../../../constants"
import HeaderNavItem from "./HeaderNavItem"

const HeaderNavBar = ({ fixed, isOpened, colored }) => {
  return (
    <nav
      className={`fixed top-20 right-0 bottom-0 ${isOpened ? `left-0` : `left-full`} ${
        fixed ? `-z-10` : `z-40`
      } flex items-center justify-center w-full p-8 transition-all duration-500 ease-in-out md:p-0 md:w-fit bg-main-primary md:bg-transparent md:relative md:top-0 md:left-0`}
    >
      <ul className="flex flex-col items-center justify-center gap-8 md:flex-row">
        {headerNavLinks.map((link) => (
          <HeaderNavItem key={link.render} color={fixed} link={link} />
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNavBar
