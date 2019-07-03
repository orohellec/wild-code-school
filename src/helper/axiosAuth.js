import axiosAuth from 'axios';

const token = localStorage.getItem('authToken');
axiosAuth.defaults.headers.common = {'Authorization': `bearer ${token}`};
console.log(token);

export default axiosAuth;