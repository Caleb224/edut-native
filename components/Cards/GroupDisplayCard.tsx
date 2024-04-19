import { Card, Button, View, Text } from "react-native-ui-lib";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import MotiPressable from "moti";

type GroupDisplayCardProps = {
	groupName: string;
	description: string;
	imageUrl?: string;
	members: number;
	onPress?: () => void;
};

export default function GroupDisplayCard({
	groupName,
	description,
	imageUrl,
	members,
	onPress,
}: GroupDisplayCardProps) {
	return (
		<LinearGradient
			colors={["#D7C0AE", "#967E76", "#76453B"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 0.8, y: 0.8 }}
			style={{ borderRadius: 12 }}
		>
			<Card
				style={{ paddingVertical: 16, paddingHorizontal: 14, width: "100%" }}
				backgroundColor="transparent"
				enableShadow={true}
			>
				{imageUrl && (
					<Card.Section
						imageSource={{
							uri: imageUrl,
						}}
						imageStyle={{ height: 170, borderRadius: 12, resizeMode: "cover" }}
					/>
				)}
				<View paddingV-16>
					<Text text30 style={{ fontFamily: "DMSerifDisplay", color: "#EEE" }}>
						{groupName}
					</Text>
					<Text text70L style={{ color: "#EEE3CB" }}>
						{description}
					</Text>
				</View>
				<View row spread centerV>
					<Text color="#EEE" text80L>
						MEMBERS: {members}
					</Text>
				</View>
			</Card>
		</LinearGradient>
	);
}
