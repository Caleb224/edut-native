import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import GroupDisplayCard from "./GroupDisplayCard";

const meta = {
	title: "Cards",
	component: GroupDisplayCard,
	args: {
		groupName: "Sunday Night Prayer",
		description:
			"Join us for a time of prayer and fellowship every Sunday night at 7pm.",
		imageUrl:
			"https://images.squarespace-cdn.com/content/v1/58640895d1758e0928144507/1596039570390-ZCJ7KTIYXVP9LKBVFGY4/AdobeStock_213746761.jpeg",
		members: 13,
		onPress: () => {
			alert("You've joined the group!");
		},
	},
	decorators: [
		(Story) => (
			<View style={{ padding: 16 }}>
				<Story />
			</View>
		),
	],
} satisfies Meta<typeof GroupDisplayCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const GroupDisplayCardStory: Story = {};
