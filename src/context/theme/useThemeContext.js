import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const useThemeContext = () => {
	const AllThemeContext = useContext(ThemeContext)
	if (AllThemeContext === undefined) {
		throw new Error("useThemeContext must be used within a ThemeProvider")
	}

	return AllThemeContext
}
export default useThemeContext
