import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5f36ddc2c01379e6fcfd17de5f64bd6e540107fa8ac2b0849010b87fde9ec560'
      }
});