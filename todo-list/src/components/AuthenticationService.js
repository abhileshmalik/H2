import axios from "axios";


class AutheticationService {

    registerSuccesfulLogin(username) {
        localStorage.setItem('authenticatedUser', username);
    }


    logout() {
        localStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        let user = localStorage.getItem('authenticatedUser')
        if(user===null) return false
        return true 
    }

    getLoggedInUsername() {
        let user = localStorage.getItem('authenticatedUser')
        if(user===null) return ''
        return user
    }

    getUserToken(username, password) {

        const formData = new FormData();

            formData.append('grant_type', 'password');
            formData.append('client_id', 'live-test');
            formData.append('client_secret', 'abcde');
            formData.append('username', username);
            formData.append('password', password);
        
        return axios.post('http://localhost:8080/oauth/token', formData)
    }

    
}

export default new AutheticationService()