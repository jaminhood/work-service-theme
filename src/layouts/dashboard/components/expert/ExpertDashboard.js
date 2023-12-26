import useExpertContext from "../../../../context/expert/useExpertContext"
import useDeviceType from "../../../../hooks/useDeviceType"
import { DashboardLayout } from "../../../../shared/dashboard-layout"

const ExpertDashboard = () => {
	const { openedCategory } = useExpertContext()
	const { isMobile } = useDeviceType()

	// return openedCategory === `` ? (
	// 	<DashboardLayout
	// 		columns={1}
	// 		center={<h1>Expert</h1>}
	// 	/>
	// ) : isMobile ? (
	// 	<DashboardLayout
	// 		columns={1}
	// 		center={<h1>Expert</h1>}
	// 	/>
	// ) : (
	// 	<DashboardLayout
	// 		columns={2}
	// 		left={<h1>Expert</h1>}
	// 		right={<h1>Expert</h1>}
	// 	/>
	// )

	return (
		<DashboardLayout
			columns={1}
			center={<h1>Expert</h1>}
		/>
	)
}

export { ExpertDashboard }
