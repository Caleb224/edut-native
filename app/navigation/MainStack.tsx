import { createStackNavigator } from "@react-navigation/stack";
import MainTabs from "./MainTabs";

const Stack = createStackNavigator();

export default function MainStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: "#2C3E50", // Background color for all routes in the navigator
				},
			}}
		>
			<Stack.Screen name="Main" component={MainTabs} />
		</Stack.Navigator>
	);
}
