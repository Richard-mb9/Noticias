export const isAuthenticated = ()=>{
    return window.localStorage.getItem('token') ? true : false;
}

export const getUsername = ()=>{
  return window.localStorage.getItem('username')
}

export const getToken = ()=>{
  return window.localStorage.getItem('token')
}

export const logout = ()=>{
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('email');
  window.localStorage.removeItem('id');
  window.localStorage.removeItem('username');
  window.location.href = "/login"
}

export const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
};