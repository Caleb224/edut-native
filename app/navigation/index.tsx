import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../providers/AuthContext";
import MainStack from "./MainStack";
import { View } from "react-native";

export default function () {
	const { user } = useAuth();
	return (
		<NavigationContainer>
			<View className="flex flex-1 bg-[#2C3E50]">
				{!user && <AuthStack />}
				{user && <MainStack />}
			</View>
			<StatusBar animated style="light" />
		</NavigationContainer>
	);
}
