import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Authentication/Login";
import Authentication from "../screens/Authentication";
import SignUp from "../screens/Authentication/SignUp";

const Stack = createStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="MainAuth" component={Authentication} />

			{/* <Stack.Screen name="ForgotPassword" getComponent={} />  */}
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					presentation: "modal",
					headerShown: true,
					title: "Login",
					headerStyle: {
						backgroundColor: "#2C3E50",
					},
					headerTitleStyle: {
						color: "#fff",
					},
					headerBackTitle: "Back",
					headerBackTitleStyle: {
						color: "#E36E39",
					},
					headerTintColor: "#E36E39",
				}}
			/>
			<Stack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerShown: true,
					title: "Sign Up",
					headerStyle: {
						backgroundColor: "#2C3E50",
					},
					headerTitleStyle: {
						color: "#fff",
					},
					headerBackTitle: "Back",
					headerBackTitleStyle: {
						color: "#E36E39",
					},
					headerTintColor: "#E36E39",
				}}
			/>
		</Stack.Navigator>
	);
}
