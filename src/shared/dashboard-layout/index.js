import { DoubleLayout } from "./components/DoubleLayout"
import { SingleLayout } from "./components/SingleLayout"

const DashboardLayout = props => {
	switch (parseInt(props.columns)) {
		case 1:
			return <SingleLayout {...props} />
		case 2:
			return <DoubleLayout {...props} />
	}
}

export { DashboardLayout }
