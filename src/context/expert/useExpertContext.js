import { useContext } from "react"
import { ExpertContext } from ".."

const useExpertContext = () => {
	const AllExpertContext = useContext(ExpertContext)
	if (AllExpertContext === undefined) {
		throw new Error("useExpertContext must be used within a ExpertProvider")
	}

	return AllExpertContext
}
export default useExpertContext
