import api from './baseApi'

export const signIn = async (credentials)=>{
    const response = await api.post('/login',credentials);
    const data = response.data;
    window.localStorage.setItem('token', data['token']);
    window.localStorage.setItem('email', data['email']);
    window.localStorage.setItem('id', data['id']);
    window.localStorage.setItem('username', data['username']);
    return data;
}