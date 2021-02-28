import { firebaseAuth, githubProbiver, googleProvider } from './firebase'

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    logout() {
        firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        })
    }

    getProvider(providerName) {
        switch(providerName){
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProbiver;
            default:
                new Error(`Not Supported Provider ${providerName}`);
        }
    }
}

export default AuthService;