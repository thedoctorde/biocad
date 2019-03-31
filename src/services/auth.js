// const AUTH_ENDPOINT = 'http://127.0.0.1:3000';

class AuthService {

    async Login(username, password) {
        // const url = `${AUTH_ENDPOINT}/login`;
        // const response = await fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         Accept: 'application/json'
        //     }
        // });
        // if (!response.ok) {
        //     throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`);
        // }
        // const data = await response.json();

        let data = {};
        if (username === "user" && password === "12345") {
            data.username = "user"
        }

        const user = data.username
        return {
            username: user
        }
    }

}

export default new AuthService();
