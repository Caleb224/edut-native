import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Main from "../screens/Main";

const Tabs = createBottomTabNavigator();

export default function MainTabs() {
	return (
		<Tabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#967E76",
				},
			}}
		>
			<Tabs.Screen
				name="Home"
				component={Main}
				options={{
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5 name="home" size={size} color={color} />
					),
					tabBarActiveTintColor: "#EEE3CB",
					tabBarInactiveTintColor: "#D7C0AE",
				}}
			/>
		</Tabs.Navigator>
	);
}
