import axios from "axios"
import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { ThemeContext } from ".."
import { Loader } from "../../shared/loader"
import { apiRoutes, getCred, getStorage, getURL } from "../../utils"
import CustomerProvider from "../customer/CustomerProvider"
import { ExpertProvider } from "../expert/ExpertProvider"

const confirmURLPath = path => window.location.href.includes(path)

const isNotDashboard = confirmURLPath(`ws-expert`) || confirmURLPath(`ws-customer`)

const ThemeProvider = props => {
	const [openedModal, setOpenedModal] = useState(``)
	const [openedProfile, setOpenedProfile] = useState(`personal-data`)
	const [profile, setProfile] = useState(null)
	const [loading, setLoading] = useState(true)

	document.title = `${profile !== null && profile.user_login ? `${profile.user_login.toUpperCase()} | ` : ``}Work Service`

	const getUserProfile = async () => {
		if (getStorage(`ws-token`) && getStorage(`ws-token`) !== ``) {
			const { data } = await axios.get(getURL(apiRoutes.profile.get), getCred())
			setProfile(data)
			return data
		}
		setProfile([])
		return false
	}

	const getUserRequests = async () => {
		const { data } = await axios.get(getURL(apiRoutes.requests.get), getCred())
		return data
	}

	const getCategories = async () => {
		const { data } = await axios.get(getURL(apiRoutes.categories), getCred())
		return data
	}

	const getDownloadLinks = async () => {
		const { data } = await axios.get(getURL(apiRoutes.downloadLinks), getCred())
		return data
	}

	const getSubCategories = async id => {
		const { data } = await axios.get(getURL(`${apiRoutes.subCategories}?category_id=${id}`), getCred())
		return data
	}

	const getServices = async id => {
		const { data } = await axios.get(getURL(`${apiRoutes.services.one}?sub_category_id=${id}`), getCred())
		return data
	}

	const getAllServices = async () => {
		const { data } = await axios.get(getURL(apiRoutes.services.all), getCred())
		return data
	}

	const reRouteUser = async () => {
		if (!getStorage(`ws-token`) && isNotDashboard) {
			location.replace(getURL())
			setLoading(false)
			return false
		}

		const user = await getUserProfile()

		if (user !== false) {
			if (user.role === `expert` && confirmURLPath(`ws-customer`)) {
				location.replace(getURL(`ws-expert/dashboard/`))
				return false
			}

			if (user.role === `customer` && confirmURLPath(`ws-expert`)) {
				location.replace(getURL(`ws-customer/dashboard/`))
				return false
			}
		}

		// setLoading(false)
	}

	const setUserProfile = async (formData, file) => {
		setLoading(true)
		if (file !== null) {
			await axios.post(getURL(apiRoutes.profile.postPhoto), { file }, getCred(`img`))
		}

		await axios.post(getURL(apiRoutes.profile.postDetails), formData, getCred()).then(res => {
			if (res.data === `Upload Successful`) {
				location.replace(getURL(`ws-customer/profile/`))
			}
		})
	}

	const getDashboardData = async (account = `customer`) => {
		const profile = await getUserProfile()
		const categories = await getCategories()
		const downloadLinks = await getDownloadLinks()
		const allServics = await getAllServices()
		return { profile, categories, downloadLinks, allServics }
	}

	useEffect(() => {
		getUserProfile()
		reRouteUser()
	}, [])

	const handleOpenModal = value => setOpenedModal(value)
	const handleCloseModal = () => setOpenedModal(``)

	const handleOpenProfile = value => setOpenedProfile(value)
	const handleCloseProfile = () => setOpenedProfile(`personal-data`)

	const handleLoading = state => setLoading(state)

	const handleLogin = async formData => {
		handleLoading(true)
		const { username, password } = formData
		try {
			if (username.trim() !== `` && password.trim() !== ``) {
				await axios
					.post(getURL(apiRoutes.login), formData)
					.then(async ({ data }) => {
						localStorage.setItem(`ws-token`, data.token)
						toast.success(`You were logged in successfully`)
						const profile = await getUserProfile()
						return profile
					})
					.then(profile => {
						location.replace(getURL(`ws-${profile.role}/dashboard/`))
					})
					.catch(() => {
						toast.error(`Something went wrong`)
					})
			}
		} catch (err) {
			toast.error(`Something went wrong`)
		} finally {
			handleLoading(false)
		}
	}

	const handleRegister = async formData => {
		handleLoading(true)
		const { fullname, email, username, phone, password, role } = formData
		try {
			if (password !== formData[`repeat-password`]) {
				alert(`Your Passwords Do Not Match!`)
				handleLoading(false)
				return
			}

			if (fullname.trim() !== `` && email.trim() !== `` && username.trim() !== `` && phone.trim() !== `` && role.trim() !== `` && password.trim() !== ``) {
				const names = fullname.split(` `)
				const firstname = names[0]
				const lastname = names[1]

				const params = { firstname, lastname, email, username, phone, password, role }

				await axios
					.post(getURL(apiRoutes.register), params)
					.then(async ({ data }) => {
						localStorage.setItem(`ws-token`, data.token)
						toast.success(data)
						handleOpenModal(`auth-signin`)
					})
					.catch(() => {
						toast.error(`Something went wrong`)
					})
			}
		} catch (err) {
			toast.error(`Something went wrong`)
		} finally {
			handleLoading(false)
		}
	}

	const handleLogout = () => {
		localStorage.setItem(`ws-token`, ``)
		location.replace(getURL())
	}

	const handleDeleteAccount = async () => {
		setLoading(true)
		await axios.delete(getURL(apiRoutes.deleteAccount), getCred()).then(res => {
			if (res.data === `User Deleted Successfully`) {
				handleLogout()
			}
		})
	}

	const handleUserRequest = async formData => {
		setLoading(true)
		await axios.post(getURL(apiRoutes.requests.post), formData, getCred()).then(res => {
			if (res.data === `Upload Successful`) {
				location.reload()
			}
		})
	}

	const providerValues = {
		profile,
		loading,
		openedModal,
		openedProfile,
		getServices,
		getUserProfile,
		getUserRequests,
		getDashboardData,
		getSubCategories,
		setUserProfile,
		handleLogin,
		handleLogout,
		handleLoading,
		handleRegister,
		handleOpenModal,
		handleCloseModal,
		handleOpenProfile,
		handleUserRequest,
		handleCloseProfile,
		handleDeleteAccount,
	}

	return (
		<ThemeContext.Provider value={providerValues}>
			{loading && <Loader />}
			{!isNotDashboard && props.children}
			{profile !== null && profile.role === `expert` && confirmURLPath(`ws-expert`) && <ExpertProvider>{props.children}</ExpertProvider>}
			{profile !== null && profile.role === `customer` && confirmURLPath(`ws-customer`) && <CustomerProvider>{props.children}</CustomerProvider>}
			<ToastContainer position="top-right" />
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
