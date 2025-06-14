import axios from "axios"

export const myArtifactsPromise = (email,accessToken) =>{
    return axios.get(`http://localhost:3000/artifacts?email=${email}`,{
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.data);
}