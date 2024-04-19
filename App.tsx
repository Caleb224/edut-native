import "./global.css";
import "react-native-reanimated";
import "react-native-gesture-handler";
import Constants from "expo-constants";
import Navigation from "./app/navigation";
import { AuthProvider } from "./providers/AuthContext";
import { useFonts } from "expo-font";

function App() {
	const [fontsLoaded] = useFonts({
		DMSerifDisplay: require("./assets/fonts/DMSerifDisplay-Regular.ttf"),
	});
	return (
		<AuthProvider>
			<Navigation />
		</AuthProvider>
	);
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === "true") {
	AppEntryPoint = require("./.ondevice").default;
}

export default AppEntryPoint;
