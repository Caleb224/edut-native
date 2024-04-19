import {
	Dimensions,
	ImageBackground,
	Text,
	View,
	SafeAreaView,
} from "react-native";
import { Button } from "react-native-ui-lib";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const splashImage = require("../../../assets/LoginSplash.jpeg");

export default function () {
	const { navigate } = useNavigation();

	return (
		<ImageBackground
			source={splashImage}
			style={{
				width: "100%",
				height: Dimensions.get("window").height,
			}}
			blurRadius={1}
			resizeMode="cover"
		>
			<LinearGradient
				colors={["rgba(0, 0, 0, 0.8)", "transparent"]}
				start={{ x: 0.5, y: 0.8 }}
				end={{ x: 0.5, y: 0.6 }}
				style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
			>
				<SafeAreaView className="flex flex-1 justify-between items-center gap-2 w-full">
					<View className="h-1/2 flex items-center justify-center">
						<Text className="text-white text-8xl font-bold">EDUTH</Text>
						<Text className="text-white text-2xl font-semibold mb-36">
							Supercharge your prayer life
						</Text>
					</View>
					<View className="flex gap-8 w-5/6">
						<Button
							label={"Login"}
							labelStyle={{ fontWeight: "700" }}
							backgroundColor="#E36E39"
							className="rounded-2xl"
							animateTo={"left"}
							onPress={() => navigate("Login" as never)}
						/>
						<Button
							label={"Sign Up"}
							labelStyle={{ fontWeight: "700" }}
							outlineColor="#E36E39"
							outline
							className="rounded-2xl"
							onPress={() => navigate("SignUp" as never)}
						/>
					</View>
				</SafeAreaView>
			</LinearGradient>
		</ImageBackground>
	);
}
