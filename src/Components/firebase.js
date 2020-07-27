import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDXCwkmRKmJf47NyHf6tLbV4rN9Ngxf22k",
    authDomain: "mindtalk-test.firebaseapp.com",
    databaseURL: "https://mindtalk-test.firebaseio.com",
    projectId: "mindtalk-test",
    storageBucket: "mindtalk-test.appspot.com",
    messagingSenderId: "63067862157",
    appId: "1:63067862157:web:455544ce990f9cd64ddec4",
    measurementId: "G-8FV0Y70G5Z"
  };

  class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig)
		this.auth = app.auth()
		this.db = app.firestore()
    }

    login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
    }
    
    async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
    }
    
    isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	getCurrentUseremail() {
        return this.auth.currentUser && this.auth.currentUser.email
    }

}

export default new Firebase()