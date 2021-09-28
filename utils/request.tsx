import axios from 'axios';

const request = ({ url, method, ...otherProps }) => axios({
    url: `/api${url}`,
    method: method || 'get',
    ...otherProps
})

export default request;