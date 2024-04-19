import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "moti";

type PrayerListCardProps = {
	prayerListTitle?: string;
};

export default function PrayerListCard({
	prayerListTitle,
}: PrayerListCardProps) {
	return (
		<View className="flex flex-row gap-4 justify-around items-center w-full bg-[#967E76] rounded-xl p-2 shadow-md">
			<View className="flex justify-center items-center h-12 w-12 bg-[#482121] rounded-xl drop-shadow-lg">
				<FontAwesome5 name="praying-hands" size={20} color="#D7C0AE" />
			</View>
			<Text
				style={{ fontFamily: "DMSerifDisplay" }}
				className="text-[#EEE] font-bold text-xl flex-1"
			>
				{prayerListTitle}
			</Text>
			<FontAwesome5 name="chevron-right" size={20} color="#EEE3CB" />
		</View>
	);
}
