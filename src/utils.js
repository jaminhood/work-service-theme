export const SITE_URL = `http://localhost/dev/`
import hero_1 from "./assets/imgs/hero-1.png"
import hero_2 from "./assets/imgs/hero-2.png"
import hero_3 from "./assets/imgs/hero-3.png"
import hero_4 from "./assets/imgs/hero-4.png"

export const headerNavLinks = [
	{
		path: ``,
		render: `Home`,
	},
	{
		path: `about`,
		render: `About`,
	},
	{
		path: `contact`,
		render: `Contact`,
	},
]

export const headerNavBtns = [
	{
		action: `expert`,
		desktop: true,
		render: `Become an Expert`,
	},
	{
		action: `login`,
		desktop: false,
		render: `Sign In`,
	},
]

export const heroSlides = [hero_1, hero_2, hero_3, hero_4]
