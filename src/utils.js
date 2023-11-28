import hero_1_mobile from "./assets/imgs/hero-1-mobile.png"
import hero_1 from "./assets/imgs/hero-1.png"
import hero_2_mobile from "./assets/imgs/hero-2-mobile.png"
import hero_2 from "./assets/imgs/hero-2.png"
import hero_3_mobile from "./assets/imgs/hero-3-mobile.png"
import hero_3 from "./assets/imgs/hero-3.png"
import hero_4_mobile from "./assets/imgs/hero-4-mobile.png"
import hero_4 from "./assets/imgs/hero-4.png"

// export const SITE_URL = `http://localhost/dev/`
export const SITE_URL = `http://myworkservice.com/`

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
		action: `auth-signup`,
		desktop: true,
		render: `Become an Expert`,
	},
	{
		action: `auth-login`,
		desktop: false,
		render: `Sign In`,
	},
]

export const footerNavBtns = [
	{
		action: `contact`,
		render: `Contact Us`,
	},
	{
		action: `auth-signup`,
		render: `Become an Expert`,
	},
	{
		action: `faq`,
		render: `FAQ`,
	},
	{
		action: `terms`,
		render: `Term of Use`,
	},
]

export const customerMenu = [
	{
		icon: `home`,
		path: `dashboard`,
		render: `home`,
	},
	{
		icon: `work-service`,
		path: `bookings`,
		render: `bookings`,
	},
	{
		icon: `chat`,
		path: `chat`,
		render: `chat`,
	},
	{
		icon: `user`,
		path: `profile`,
		render: `profile`,
	},
]

export const heroSlides = { desktop: [hero_1, hero_2, hero_3, hero_4], mobile: [hero_1_mobile, hero_2_mobile, hero_3_mobile, hero_4_mobile] }

export const categories = [
	{
		id: 1,
		title: `repair`,
		subCategories: [`automobile`, `electrical`, `plumbing`, `computer`],
	},
	{
		id: 2,
		title: `self-care`,
		subCategories: [`hair care`, `make-up`, `nail tech`],
	},
	{
		id: 3,
		title: `cleaning`,
		subCategories: [`laundry`, `fumigation`, `home`, `gardener`],
	},
	{
		id: 4,
		title: `freelance`,
		subCategories: [`programming`, `graphics design`, `content creation`, `business plan`],
	},
]
