import useThemeContext from "../../context/theme/useThemeContext"
import { Modal } from "../../shared/modal"
import { AuthInfo } from "./components/AuthInfo"
import { EnterPin } from "./components/EnterPin"
import { ForgotPassword } from "./components/ForgotPassword"
import { ResetPassword } from "./components/ResetPassword"
import { SignIn } from "./components/SignIn"
import { SignUp } from "./components/SignUp"

const AuthLayout = () => {
	const { openedModal, handleCloseModal } = useThemeContext()

	return (
		openedModal.includes(`auth`) && (
			<Modal toggleOpen={handleCloseModal}>
				<div className="grid grid-cols-1 md:grid-cols-2 md:h-[90vh] items-center">
					<AuthInfo />
					<div className="col-span-1 p-12 h-full overflow-y-auto grid items-center">
						{openedModal.includes(`signup`) && <SignUp />}
						{openedModal.includes(`signin`) && <SignIn />}
						{openedModal.includes(`forgot`) && <ForgotPassword />}
						{openedModal.includes(`pin`) && <EnterPin />}
						{openedModal.includes(`reset`) && <ResetPassword />}
					</div>
				</div>
			</Modal>
		)
	)
}

export default AuthLayout
