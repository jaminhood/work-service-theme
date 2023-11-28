import useThemeContext from "../../context/theme/useThemeContext"
import { Modal } from "../../shared/modal"

const Terms = () => {
	const { openedModal, handleCloseModal } = useThemeContext()

	return (
		openedModal === `terms` && (
			<Modal toggleOpen={handleCloseModal}>
				<div className="py-12 px-8 h-[90vh]">
					<h2 className="text-3xl font-bold leading-8 tracking-tight text-main-primary sm:text-4xl sm:leading-10">Terms</h2>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						Welcome to Work service! These Terms of Use outline the terms and conditions that govern your use of our innovative app and platform. By accessing or using the Work service app, you agree to be
						bound by these Terms of Use. Please read them carefully before proceeding.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>1. Acceptance of Terms:</strong> By using the Work service app, you acknowledge that you have read, understood, and agree to comply with these Terms of Use, as well as our Privacy
						Policy. If you do not agree with any part of these terms, please refrain from using the app.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>2. Description of Service:</strong> Work service is an app that connects users with skilled experts providing a wide range of services. These services include but are not limited to
						Barbing, Car repairs, Laundry service, Programming, and various other expert services across different domains.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>3. User Conduct:</strong> You are solely responsible for your actions and behavior while using the Work service app. You agree not to use the app for any unlawful or unauthorized
						purpose. Additionally, you shall not engage in any activity that may harm, disrupt, or interfere with the functioning of the app or its users.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>4. User Accounts:</strong> To fully utilize the features of the app, you may need to create a user account. You must provide accurate and up-to-date information during the registration
						process. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>5. Service Providers and Users:</strong> Work service facilitates connections between service providers and users. Service providers are responsible for the services they offer, and
						users are responsible for their interactions and agreements with service providers. Work service is not a party to any agreements or disputes between users and service providers.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>6. Service Requests and Payments:</strong> When you use the app to request services, you agree to pay the applicable fees as specified by the service provider. Payments will be processed
						through the app's secure payment system. Any additional terms or conditions related to payments will be outlined in the app.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>7. Content Ownership:</strong> Users and service providers retain ownership of the content they submit to the app. However, by submitting content, you grant Work service a non-exclusive,
						worldwide, royalty-free license to use, display, reproduce, and distribute the content for the purposes of operating and promoting the app.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>8. Intellectual Property:</strong> All trademarks, logos, service marks, and other intellectual property displayed on the app are the property of Work service or their respective owners.
						You may not use, copy, reproduce, modify, or distribute any of the app's content without prior written consent from Work service.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>9. Termination of Access:</strong> Work service reserves the right to terminate or suspend your access to the app at any time, with or without cause. You may also delete your account and
						cease using the app at any time.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>10. Changes to Terms:</strong> Work service may update or modify these Terms of Use from time to time. Any changes will be effective upon posting, and your continued use of the app after
						such changes will constitute your acceptance of the revised terms.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>11. Disclaimer of Warranty:</strong> Work service provides the app on an "as-is" basis, without any warranties or guarantees of any kind. We do not warrant that the app will be
						error-free, secure, or continuously available.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>12. Limitation of Liability:</strong> In no event shall Work service be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the app or
						any services obtained through the app.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">
						<strong>13. Governing Law:</strong> These Terms of Use shall be governed by and construed in accordance with the laws of Federal republic of Nigeria , without regard to its conflict of law
						principles.
					</p>
					<p className="mt-3 text-base text-gray-500 md:mt-5 md:text-lg font-jost-regular">By using the Work service app, you agree to abide by these Terms of Use. Thank you for using Work service!</p>
				</div>
			</Modal>
		)
	)
}

export default Terms
