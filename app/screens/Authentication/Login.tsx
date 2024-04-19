import { Text, View } from "react-native";
import { Button, TextField } from "react-native-ui-lib";
import { supabase } from "../../../lib/supabase/supabase";
import { useState } from "react";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signInWithEmail = () => {
		const asyncSignIn = async () => {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: email,
				password: password,
			});

			console.log(data, error);
		};

		asyncSignIn();
	};

	return (
		<View className="flex flex-1 items-center justify-start bg-[#2C3E50]">
			<View className="flex gap-8 w-10/12 py-12">
				<View className="flex justify-center items-start bg-[#5C6D7D] w-full rounded-xl px-3">
					<TextField
						value={email}
						onChangeText={(text) => setEmail(text)}
						floatingPlaceholderStyle={{ color: "#ddd" }}
						color="#fff"
						placeholder={"Email"}
						floatingPlaceholder
						label={"Email"}
						enableErrors
						validate={[
							"required",
							"email",
							(value: string) => value.length > 6,
						]}
						validationMessage={[
							"Field is required",
							"Email is invalid",
							"Password is too short",
						]}
						containerStyle={{ width: "100%" }}
					/>
				</View>
				<View className="flex justify-center items-start bg-[#5C6D7D] w-full rounded-xl px-3">
					<TextField
						textContentType="password"
						secureTextEntry
						value={password}
						onChangeText={(text) => setPassword(text)}
						floatingPlaceholderStyle={{ color: "#ddd" }}
						color="#fff"
						placeholder={"Password"}
						floatingPlaceholder
						label={"Email"}
						enableErrors
						validate={[
							"required",
							"required",
							(value: string) => value.length > 6,
						]}
						validationMessage={[
							"Field is required",
							"Email is invalid",
							"Password is too short",
						]}
						containerStyle={{ width: "100%" }}
					/>
				</View>
				<Button
					label="Sign In"
					className="self-end"
					backgroundColor="#E36E39"
					onPress={signInWithEmail}
				/>
			</View>
		</View>
	);
}
