import authImg from "../../assets/imgs/auth-modal-bg.png"
import useThemeContext from "../../context/theme/useThemeContext"
import { Modal } from "../../shared/modal"
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
				<div className="grid grid-cols-2 h-[90vh] items-center">
					<div className="col-span-1 h-[90vh]">
						<img
							src={authImg}
							alt="Auth"
							className="w-full h-full object-cover"
						/>
					</div>
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
