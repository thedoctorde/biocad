class AuthService {

    async Login(username, password) {

        let data = {};
        if (username === "user" && password === "12345") {
            data.username = "user"
        }

        const user = data.username;
        return {
            username: user
        }
    }

}

export default new AuthService();
