import profilePlaceholder from "./assets/imgs/profile-placeholder.jpg"

export const SITE_URL = `http://localhost/dev/`
// export const SITE_URL = `http://myworkservice.com/`

export const getStorage = key => localStorage.getItem(key)

export const token = localStorage.getItem(`ws-token`)

export const apiRoutes = {
	login: `wp-json/jwt-auth/v1/token`,
	register: `wp-json/ws-auth/v1/register`,
	deleteAccount: `wp-json/ws-auth/v1/delete-account`,
	profile: {
		get: `wp-json/ws-api/v1/profile`,
		postPhoto: `wp-json/ws-api/v1/profile`,
		postDetails: `wp-json/ws-api/v1/profile-details`,
	},
	categories: `wp-json/ws-api/v1/categories`,
	subCategories: `wp-json/ws-api/v1/sub-categories/category`,
	services: {
		one: `wp-json/ws-api/v1/services/sub-category`,
		all: `wp-json/ws-api/v1/admin/services`,
	},
	downloadLinks: `wp-json/ws-api/v1/admin/downloads`,
	requests: {
		get: `wp-json/ws-api/v1/requests`,
		post: `wp-json/ws-api/v1/request`,
	},
	contact: {
		get: `wp-json/ws-api/v1/admin/contacts`,
	},
}

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
		action: `auth-signin`,
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

export const expertMenu = [
	{
		icon: `home`,
		path: `dashboard`,
		render: `home`,
	},
	{
		icon: `work-service`,
		path: `orders`,
		render: `bookings`,
	},
	{
		icon: `user`,
		path: `profile`,
		render: `profile`,
	},
]

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

export const profilePageLinks = {
	customer: {
		generalLinks: [
			{
				icon: `user`,
				title: `Personal Data`,
				link: `personal-data`,
			},
			{
				icon: `shield`,
				title: `Security`,
				link: `security`,
			},
			{
				icon: `my-requests`,
				title: `My Requests`,
				link: `my-requests`,
			},
			{
				icon: `invite-a-friend`,
				title: `Invite A Friend`,
				link: `invite-a-friend`,
			},
		],
		supportLinks: [
			{
				icon: `work-service`,
				title: `Support`,
				link: `support`,
			},
			{
				icon: `work-service`,
				title: `FAQ`,
				link: `faq`,
			},
		],
	},
	expert: {
		generalLinks: [
			{
				icon: `user`,
				title: `Personal Data`,
				link: `personal-data`,
			},
			{
				icon: `shield`,
				title: `Security`,
				link: `security`,
			},
			{
				icon: `invite-a-friend`,
				title: `Invite A Friend`,
				link: `invite-a-friend`,
			},
		],
		supportLinks: [
			{
				icon: `work-service`,
				title: `Support`,
				link: `support`,
			},
			{
				icon: `work-service`,
				title: `FAQ`,
				link: `faq`,
			},
		],
	},
}

export const getURL = (addOn = `/`) => `${SITE_URL}${addOn}`

export const getCred = (type = `json`) => ({
	headers: {
		"Content-Type": type === `img` ? "multipart/form-data" : "application/json",
		Authorization: `Bearer ${localStorage.getItem(`ws-token`)}`,
	},
})

// export { profilePlaceholder }
