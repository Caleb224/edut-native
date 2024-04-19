import React, { createContext, useState, useEffect, useContext } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase/supabase";

type ContextProps = {
	user: null | boolean;
	session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
	children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
	const [user, setUser] = useState<boolean | null>(null);
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		const getInitialSession = async () => {
			try {
				const { data, error } = await supabase.auth.getSession();
				const { session } = data;

				setSession(session);
				setUser(session?.user ? true : false);

				const { data: authListener } = supabase.auth.onAuthStateChange(
					async (event, session) => {
						console.log(`Supabase auth event: ${event}`);
						setSession(session);
						setUser(session?.user ? true : false ?? null);
					},
				);

				return () => {
					authListener.subscription;
				};
			} catch (error) {
				console.error(error);
			}
		};

		getInitialSession();
	}, [user]);

	return (
		<AuthContext.Provider
			value={{
				user,
				session,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === null) {
		throw new Error("useAuth must be used within an AuthContextProvider");
	}
	return context;
};

export { AuthContext, AuthProvider, useAuth };
