import axios from "axios"
import { useEffect, useState } from "react"
import { Sidebar } from "../../shared/sidebar"
import { SITE_URL } from "../../utils"
import { CustomerContext } from "./CustomerContext"

const CustomerProvider = props => {
	const [openedCategory, setOpenedCategory] = useState(``)
	const [openedProfile, setOpenedProfile] = useState(`personal-data`)
	const [token, setToken] = useState(``)
	const [profile, setProfile] = useState([])

	const getCred = (type = `json`) => ({
		headers: {
			"Content-Type": type === `img` ? "multipart/form-data" : "application/json",
			Authorization: `Bearer ${localStorage.getItem(`ws-token`)}`,
		},
	})

	const submitProfile = async (formData, file) => {
		if (file !== null) {
			await axios.post(`${SITE_URL}wp-json/ws-api/v1/profile`, { file }, getCred(`img`))
		}

		await axios.post(`${SITE_URL}wp-json/ws-api/v1/profile-details`, formData, getCred()).then(res => {
			if (res.data === `Upload Successful`) {
				location.replace(`${SITE_URL}/ws-customer/dashboard/`)
			}
		})
	}

	const handleRequestForm = async formData =>
		await axios.post(`${SITE_URL}wp-json/ws-api/v1/request`, formData, getCred()).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})

	const getProfile = async () => {
		const { data } = await axios.get(`${SITE_URL}wp-json/ws-api/v1/profile`, getCred())
		setProfile(data)
		return data
	}

	const getCategories = async () => {
		const { data } = await axios.get(`${SITE_URL}wp-json/ws-api/v1/categories`, getCred())
		return data
	}

	const getSubCategories = async id => {
		const { data } = await axios.get(`${SITE_URL}wp-json/ws-api/v1/sub-categories/category?category_id=${id}`, getCred())
		return data
	}

	const getRequestForm = async () => {
		const { data } = await axios.get(`${SITE_URL}wp-json/ws-api/v1/requests`, getCred())
		return data
	}

	const getChatList = async () => {
		const { data } = await axios.get(`${SITE_URL}wp-json/ws-api/v1/chats`, getCred())
		return data
	}

	const handleLogout = () => {
		localStorage.setItem(`ws-token`, ``)
		location.replace(SITE_URL)
	}

	const confirmToken = async () => {
		const token = localStorage.getItem(`ws-token`)
		if (!token || token === ``) {
			location.replace(SITE_URL)
			return
		}
		setToken(token)
	}

	useEffect(() => {
		confirmToken()
	})

	useEffect(() => {
		getProfile()
	}, [])

	const handleOpenCategory = value => setOpenedCategory(value)

	const handleCloseCategory = () => setOpenedCategory(``)

	const handleOpenProfile = value => setOpenedProfile(value)

	const handleCloseProfile = () => setOpenedProfile(`personal-data`)

	const providerValues = {
		profile,
		openedCategory,
		openedProfile,
		getProfile,
		getChatList,
		getRequestForm,
		getCategories,
		getSubCategories,
		submitProfile,
		handleLogout,
		handleOpenCategory,
		handleOpenProfile,
		handleCloseCategory,
		handleCloseProfile,
		handleRequestForm,
	}

	return (
		<CustomerContext.Provider value={providerValues}>
			<div className="flex h-screen">
				<Sidebar account="customer" />
				<div className="w-full md:w-[calc(100%-20rem)] h-screen">{props.children}</div>
			</div>
		</CustomerContext.Provider>
	)
}

export default CustomerProvider
