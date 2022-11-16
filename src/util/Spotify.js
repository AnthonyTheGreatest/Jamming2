let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            return;
        }
    }
};

export default Spotify;