import useThemeContext from "../../context/theme/useThemeContext"
import { Modal } from "../../shared/modal"

const Terms = () => {
	const { openedModal, handleCloseModal } = useThemeContext()

	return (
		openedModal === `terms` && (
			<Modal toggleOpen={handleCloseModal}>
				<div className="py-12 px-8 h-[90vh]">Terms</div>
			</Modal>
		)
	)
}

export default Terms
