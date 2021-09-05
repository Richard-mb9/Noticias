import api from './baseApi';


export const getNews = async (filters = {})=>{
    const response = await api.get('/news',{
        params: filters
    });
    return response.data;
}

export const createNew = async (data) =>{
    const response = await api.post('/news',data)
    return response
}

export const deleteNew = async (id) =>{
    return api.delete(`/news/${id}`) 
}

export const updateNews = async(id, data)=>{
    return api.put(`/news/${id}`, data) 
}