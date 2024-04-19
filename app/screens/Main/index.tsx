import { SafeAreaView, Text, View } from "react-native";
import { Button } from "react-native-ui-lib";
import { supabase } from "../../../lib/supabase/supabase";
import { FontAwesome5 } from "@expo/vector-icons";
import GroupDisplayCard from "../../../components/Cards/GroupDisplayCard";
import PrayerListCard from "../../../components/Cards/PrayerListCard";

export default function () {
	return (
		<SafeAreaView className="flex flex-1 justify-start items-center gap-4 bg-[#B7C4CF]">
			<View className="flex flex-row justify-between items-center w-full px-4">
				<Text
					style={{
						fontFamily: "DMSerifDisplay",
					}}
					className="text-[#EEE] font-extrabold text-5xl"
				>
					Today
				</Text>
				<FontAwesome5 name="bell" size={24} color="#EEE3CB" />
			</View>
			<View className="flex gap-2 w-full px-4">
				<Text
					style={{ fontFamily: "DMSerifDisplay" }}
					className="text-[#EEE] font-semibold text-3xl"
				>
					My Prayers
				</Text>
				<PrayerListCard prayerListTitle="Daily Prayer" />
				<PrayerListCard prayerListTitle="Listening Prayer" />
				<PrayerListCard prayerListTitle="Healing Prayer" />
				<PrayerListCard prayerListTitle="Church Prayer" />
				<Text
					style={{ fontFamily: "DMSerifDisplay" }}
					className="text-[#EEE] font-semibold text-3xl"
				>
					My Groups
				</Text>
				<GroupDisplayCard
					groupName="Sunday Night Prayer"
					description="Weekly prayer meeting on Sundays"
					members={15}
					imageUrl="https://images.squarespace-cdn.com/content/v1/58640895d1758e0928144507/1596039570390-ZCJ7KTIYXVP9LKBVFGY4/AdobeStock_213746761.jpeg"
				/>
			</View>
		</SafeAreaView>
	);
}
