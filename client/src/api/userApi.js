import axios from 'axios'


 export const fetchAccounts =async()=>{
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/account/user`);
    return data 
}

//get a singel user 
export const fetchAccount =async()=>{
    const token=localStorage.getItem('token');
    const {data} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/auth/user/uraccount`,{headers:{Authorization:token}} );
    return data 
}
export const postContact = async(values)=>{
    const addingContact = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/user/singup`,{...values})

}


// export const postLogin = async(values)=>{
//     const loginUser  = await axios.post(`${process.env.REACT_APP_URL}/auth/user/login`, values);
//     await localStorage.setItem('token', loginUser.data.token);
// }