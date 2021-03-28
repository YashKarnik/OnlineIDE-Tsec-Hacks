import React, { useEffect, useState, createContext, useContext } from 'react';
import firebase from 'firebase/app';
import { auth } from '../firebase';
const UserContext = createContext();
export const useUserContext = () => useContext(UserContext);
export const UserProvider = props => {
	const [currentUser, setCurrentUser] = useState({});
	const [loading, setLoading] = useState(true);
	const provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
	function login() {
		return auth.signInWithPopup(provider);
	}
	function logout() {
		return auth.signOut();
	}
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);
	let user = {
		currentUser,
		login,
		logout,
	};
	return (
		<UserContext.Provider value={user}>
			{!loading && props.children}
		</UserContext.Provider>
	);
};
