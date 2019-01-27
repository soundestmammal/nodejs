import Axios from 'axios';

const KEY = 'AIzaSyA0voUsmK9qBvVkiPgpsnx0X2xzUB0F5x8';

export default Axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})