import { SITE_URL } from "../../../constants"

const HeaderNavItem = ({ color, link }) => {
 const url = window.location.href
 const path = `${SITE_URL}${link.path}`
 const cssCheck = link.path === `` ? url === SITE_URL : url.includes(path)

 const isURL = url.includes(`category`) || url.includes(`services`) || color

 return (
  <li>
   <a
    href={path}
    class={`hover:opacity-100 transition-all ease-in-out duration-500 ${cssCheck ? `opacity-100` : `opacity-50`} font-sansation-regular capitalize ${isURL ? `text-main-primary` : `text-zinc-50`}`}>
    {link.render}.
   </a>
  </li>
 )
}

export default HeaderNavItem
