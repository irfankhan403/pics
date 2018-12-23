import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
      Authorization: 'Client-ID 1bd2b01c8ce68babbb5727bfa93e102d3e04b61d061aa403d8c7c9b9943b8f4f'
    }
});
